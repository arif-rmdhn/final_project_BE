const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

class _sensorSoil {
    addDataSensor = async (body) => {
        try {
            const schema = Joi.object({
                sensor_id: Joi.number().required(),
                humadity: Joi.number().required(),
                temperature: Joi.number().required(),
                conductivity: Joi.number().required(),
                ph: Joi.number().required(),
                tds: Joi.number().required()
            }).options({ abortEarly: false })

            validate(schema, body);

            const sen = await prisma.sensor.findUnique({
                where: {
                    id_sensor: body.sensor_id
                }
            })

            if (!sen) {
                return {
                    status: false,
                    code: 401,
                    error: 'Id_Sensor Not Found'
                }
            }

            const add = await prisma.sensor_soil.create({
                data: {
                    humadity: body.humadity,
                    temperature: body.temperature,
                    conductivity: body.conductivity,
                    ph: body.ph,
                    tds: body.tds,
                    sensor: {
                        connect: {
                            id_sensor: sen.id_sensor
                        }
                    }
                }
            })

            return {
                status: true,
                data: add
            }

        } catch (error) {
            console.error('addDataSensor sensorSoil module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    getAllData = async (id) => {
        try {
            const listSensor = await prisma.sensor_soil.findMany({
                where: {
                    sensor_id: id
                }
            })

            return {
                status: true,
                data: listSensor
            }
        } catch (error) {
            console.error('getAllData sensorSoil module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    destroAll = async (id) => {
        try {
            const destroy = await prisma.sensor_soil.deleteMany({
                where: {
                    sensor_id: id
                }
            })
            return {
                status: true,
                data: destroy,
            };

        } catch (error) {

        }
    }
}

module.exports = new _sensorSoil();
