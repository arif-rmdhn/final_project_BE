const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

class _aetherSoil {
    // Kirim data baru ke database
    SendAetherSoil = async (body) => {
        try {
            const schema = Joi.object({
                Temperature: Joi.number().required(),
                Humidity: Joi.number().required(),
                Ph: Joi.number().required(),
                EC: Joi.number().required(),
                Nitrogen: Joi.number().required(),
                Potassium: Joi.number().required(),
                Kalium: Joi.number().required()
            }).options({ abortEarly: false })

            validate(schema, body);

            const result = await prisma.AetherSoil.create({
                data: {
                    Temperature: body.Temperature,
                    Humidity: body.Humidity,
                    Ph: body.Ph,
                    EC: body.EC,
                    Nitrogen: body.Nitrogen,
                    Potassium: body.Potassium,
                    Kalium: body.Kalium
                }
            })
            return result
        } catch (error) {
            console.error('SendAetherSoil module Error: ', error);
            return {
                status: false,
                error,
            }
        }

    }
    // Get semua data dari database
    GetAetherSoil = async () => {
        try {
            const result = await prisma.AetherSoil.findMany()
            return {
                status: true,
                data: result
            }
        } catch (error) {
            console.error('GetAetherSoil module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }
}

module.exports = new _aetherSoil()