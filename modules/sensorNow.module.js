const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

class _sensorNow {
    GetValue = async (id) => {
        try {
            const detail = await prisma.sensor_now.findFirst({
                where: {
                    sensor_id: id,
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
                data_value: Joi.number().required(),
            }).options({ abortEarly: false })

            validate(schema, body);

            const add = await prisma.sensor_now.create({
                data: {
                    sensor_id: body.sensor_id,
                    data_value: body.data_value
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
                data_value: Joi.number().required()
            }).options({ abortEarly: false });

            validate(schema, body);

            // const sensor = await prisma.sensor.findFirst({
            //     where: {
            //         id_sensor: body.id_sensor
            //     }

            // })

            const update = await prisma.sensor_now.update({
                where: {
                    sensor_id: body.id
                },
                data: {
                    data_value: body.data_value
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