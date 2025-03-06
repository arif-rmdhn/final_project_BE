const { Router } = require("express")
const m$sys = require("../modules/system.module")
const response = require("../helpers/response")

const systemController = Router()

systemController.put("/update", async (req, res) => {
    const update = await m$sys.updateSystem(req.body)

    response.sendResponse(res, update)
}),
    
systemController.post("/create", async (req, res) => {
    const update = await m$sys.createSystem(req.body)

    response.sendResponse(res, update)
})
systemController.get("/get", async (req, res) => {
    const update = await m$sys.systemGet()

    response.sendResponse(res, update)
})

module.exports = systemController;