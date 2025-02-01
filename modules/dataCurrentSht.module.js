const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

class _currentSht {
    GetValue = async (id) => {
        try {
            const detail = await prisma.data_current_sht.findFirst({
                where: {
                    sensor_id: id,
                },
                select: {
                    humadity: true,
                    temperature: true
                }
            })

            return {
                status: true,
                data: detail,
            }

        } catch (error) {
            console.error('GetValue dataCurrentSht module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    };

    listSensorData = async () => {
        try {
            const list = await prisma.data_current_sht.findMany();

            return {
                status: true,
                data: list,
            }
        } catch (error) {
            console.error('listSensorData dataCurrentSht module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    };

    createSensorData = async (body) => {
        try {
            const schema = Joi.object({
                sensor_id: Joi.number().required()
            }).options({ abortEarly: false })

            validate(schema, body);

            const sen = await prisma.sensor.findUnique({
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

            const sen_ = await prisma.data_current_sht.findFirst({
                where: {
                    sensor_id: body.sensor_id
                },
                select: {
                    sensor_id: true
                }
            })

            if (sen_) {
                return {
                    status: false,
                    code: 401,
                    error: 'Sensor_id Availabel'
                }
            }


            const add = await prisma.data_current_sht.create({
                data: {
                    humadity: 0,
                    temperature: 0,
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
            console.error('createSensorData dataCurrentSht module Error: ', error);
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
                humadity: Joi.number().required(),
                temperature: Joi.number().required()
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

            const update = await prisma.data_current_sht.updateMany({
                where: {
                    sensor_id: body.sensor_id
                },
                data: {
                    humadity: body.humadity,
                    temperature: body.temperature
                }
            })
            return {
                status: true,
                data: update,
            };

        } catch (error) {
            console.error('sendData dataCurrentSht module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    deleteList = async (id) => {
        try {
            const deleteList = await prisma.data_current_sht.deleteMany({
                where: {
                    sensor_id: id,
                }
            })

            return {
                status: true,
                data: deleteList,
            };

        } catch (error) {
            console.error('deleteList dataCurrentSht module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

}

module.exports = new _currentSht();