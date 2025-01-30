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

SensordataController.post("/add", async (req, res) => {
    const add = await m$now.createSensorData(req.body)
    response.sendResponse(res, add)
})

SensordataController.get("/alldata", async (req, res) => {
    const list = await m$now.listSensorData()

    response.sendResponse(res, list)
})

SensordataController.get("/getvalue/:id", async (req, res) => {
    const get = await m$now.GetValue(req.params.id)

    response.sendResponse(res, get)
})

/** Create new Regist sensor
* @param  {Int} sensor_id
* @param {Float} data_value
* 
* https:localhost:8000/api/
**/
SensordataController.put("/sendvalue", async (req, res) => {
    const add = await m$now.sendData(req.body)

    response.sendResponse(res, add)
})

SensordataController.delete("/delete/:id", async (req, res) => {
    const del = await m$now.deleteList(req.params.id)

    response.sendResponse(res, del)
})

module.exports = sensorNowController



