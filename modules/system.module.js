const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

class _system {
    updateSystem = async (body) => {
        try {
            const schema = Joi.object({
                id: Joi.number().required(),
                stat: Joi.number().required()
            }).options({ abortEarly: false })

            validate(schema, body)

            const update_status = await prisma.system_off.update({
                where: {
                    id: body.id
                },
                data: {
                    stat: body.stat
                }
            })

            return {
                status: true,
                data: update_status
            }
        } catch (error) {
            console.error('updateSystem system module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    createSystem = async (body) => {
        try {
            const schema = Joi.object({
                stat: Joi.number().required()
            }).options({ abortEarly: false })

            validate(schema, body)

            const create_status = await prisma.system_off.create({
                data: {
                    stat: body.stat
                }

            })

            return {
                status: true,
                data: create_status
            }
        } catch (error) {
            console.error('createSystem system module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }

    systemGet = async () => {
        try {
            const data = await prisma.system_off.findMany({
                select: {
                    stat: true
                }
            })

            return {
                status: true,
                data: data
            }
        } catch (error) {
            console.error('systemGet sensor module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }


}

module.exports = new _system();