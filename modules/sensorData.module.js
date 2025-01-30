const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

class _sensorData {
    addDataSensor = async (body) => {
        try {
            const schema = Joi.object({
                sensor_id: Joi.number().required(),
                data_value: Joi.number().required()
            }).options({ abortEarly: false })

            validate(schema, body);

            const add = await prisma.data_sensor.create({
                data: {
                    sensor_id: body.sensor_id,
                    data_value: body.data_value
                }
            })

            return {
                status: true,
                data: add
            }

        } catch (error) {
            console.error('addDataSensor sensorData module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    getAllData = async (id) => {
        try {
            const listSensor = await prisma.data_sensor.findMany({
                where: {
                    sensor_id: parseInt(id)
                }
            })

            return {
                status: true,
                data: listSensor
            }
        } catch (error) {
            console.error('getAllData sensorData module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }


}

module.exports = new _sensorData();
