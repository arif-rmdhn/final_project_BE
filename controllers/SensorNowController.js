const { Router } = require("express")
const m$now = require("../modules/sensorNow.module")
const response = require("../helpers/response")
const SensordataController = require("./SensorDataController")

const sensorNowController = Router()

/** Create new Regist sensor
* @param  {Int} sensor_id
* @param {Float} data_value
* 
* https:localhost:8000/api/
**/

sensorNowController.post("/add", async (req, res) => {
    const add = await m$now.createSensorData(req.body)
    response.sendResponse(res, add)
})

sensorNowController.get("/alldata", async (req, res) => {
    const list = await m$now.listSensorData()

    response.sendResponse(res, list)
})

sensorNowController.get("/getvalue/:id", async (req, res) => {
    const get = await m$now.GetValue(Number(req.params.id))

    response.sendResponse(res, get)
})

/**
* @param  {Int} sensor_id
* @param {Float} data_value
* 
* https:localhost:8000/api/
**/
sensorNowController.put("/sendvalue", async (req, res) => {
    const add = await m$now.sendData(req.body)
    response.sendResponse(res, add)
})

sensorNowController.delete("/delete/:id", async (req, res) => {
    const del = await m$now.deleteList(req.params.id)

    response.sendResponse(res, del)
})

module.exports = sensorNowController;



