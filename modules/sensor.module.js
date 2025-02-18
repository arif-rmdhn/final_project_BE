const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

class _sensor {
    createSensor = async (body) => {
        try {
            const schema = Joi.object({
                id_sensor: Joi.number().required(),
                sensor_name: Joi.string().required(),
                description: Joi.string().required()
            }).options({ abortEarly: false })

            validate(schema, body);

            const sen = await prisma.sensor.findUnique({
                where: {
                    id_sensor: body.id_sensor
                },
                select: {
                    id_sensor: true
                }
            })

            if (sen) {
                return {
                    status: false,
                    code: 401,
                    error: 'Id_Sensor Availabel'
                }
            }

            const add = await prisma.sensor.create({
                data: {
                    id_sensor: body.id_sensor,
                    sensor_name: body.sensor_name,
                    description: body.description
                }
            })

            return {
                status: true,
                data: add
            }
        } catch (error) {
            console.error('AddSensor sensor module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    listSensor = async () => {
        try {
            const list = await prisma.sensor.findMany();

            return {
                status: true,
                data: list,
            }
        } catch (error) {
            console.error('listSensor sensor module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    detailSensorSht = async (id) => {
        try {
            const listDetail = await prisma.sensor.findFirst({
                where: {
                    id_sensor: id
                }, include: {
                    data_sensor_sht: true
                }
            })

            return {
                status: true,
                data: listDetail
            }
        } catch (error) {
            console.error('listSensor sensor module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    destroySensor = async (id) => {
        try {
            const destroy = await prisma.sensor.delete({
                where: {
                    id_sensor: id
                }
            })

            return {
                status: true,
                data: destroy,
            }
        } catch (error) {
            console.error('destroySensor sensor module Error: ', error);
            return {
                status: false,
                error,
            }
        }

    }

    updateSensor = async (body) => {
        try {
            const schema = Joi.object({
                id_sensor: Joi.number().required(),
                sensor_name: Joi.string().required(),
                description: Joi.string().required()
            }).options({ abortEarly: false })

            validate(schema, body);

            const update = await prisma.sensor.update({
                where: {
                    id_sensor: body.id_sensor
                },
                data: {
                    id_sensor: body.id_sensor,
                    sensor_name: body.sensor_name,
                    description: body.description
                }
            })

            return {
                status: true,
                data: update,
            }
        } catch (error) {
            console.error('updateSensor sensor module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

}

module.exports = new _sensor();