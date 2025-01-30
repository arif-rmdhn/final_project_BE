const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

class _sensorNow {
    GetValue = async (id) => {
        try {
            const detail = await prisma.sensor_now.findFirst({
                where: {
                    sensor_id: id,
                },
                select: {
                    data_value: true
                }

            })

            return {
                status: true,
                data: detail,
            }

        } catch (error) {
            console.error('GetValue sensorData module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    };

    listSensorData = async () => {
        try {
            const list = await prisma.sensor_now.findMany();

            return {
                status: true,
                data: list,
            }
        } catch (error) {
            console.error('listSensorData sensorData module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    };

    createSensorData = async (body) => {
        try {
            const schema = Joi.object({
                sensor_id: Joi.number().required(),
                data_value: Joi.number().required()
            }).options({ abortEarly: false })

            validate(schema, body);

            const sen = await prisma.sensor.findFirst({
                where: {
                    id_sensor: body.sensor_id
                },
                select: {
                    id_sensor: true
                }
            })

            if (!sen) {
                return {
                    status: false,
                    code: 401,
                    error: 'Id_Sensor Not Found'
                }
            }

            const add = await prisma.sensor_now.create({
                data: {
                    data_value: body.data_value,
                    sensor: {
                        connect: {
                            id_sensor: sen.id_sensor
                        }
                    }
                }
            });

            return {
                status: true,
                data: add,
            };
        } catch (error) {
            console.error('createSensorData sensorData module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    sendData = async (body) => {
        try {
            const schema = Joi.object({
                sensor_id: Joi.number().required(),
                data_value: Joi.number().required()
            }).options({ abortEarly: false });

            validate(schema, body);

            const sen = await prisma.sensor.findFirst({
                where: {
                    id_sensor: body.sensor_id
                },
                select: {
                    id_sensor: true
                }
            })

            if (!sen) {
                return {
                    status: false,
                    code: 401,
                    error: 'Id_Sensor Not Found'
                }
            }

            const update = await prisma.sensor_now.updateMany({
                where: {
                    sensor_id: body.sensor_id
                },
                data: {
                    data_value: body.data_value,
                }
            })


            return {
                status: true,
                data: update,
            };

        } catch (error) {
            console.error('sendData sensorData module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    deleteList = async (id) => {
        try {
            const deleteList = await prisma.sensor_now.delete({
                where: {
                    sensor_id: parseInt(id),
                }
            })


        } catch (error) {
            console.error('deleteList sensorData module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

}

module.exports = new _sensorNow();