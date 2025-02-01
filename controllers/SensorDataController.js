const { Router } = require("express")
const m$dataSht = require("../modules/sensorSht.module")
const m$dataSoil = require("../modules/sensorSoil.module")
const response = require("../helpers/response")

const SensordataController = Router()

/** Add data Soil
* @param  {Int} sensor_id
* @param {Float} humadity
* @param {Float} temperature
* @param {Float} conductivity
* @param {Float} ph
* @param {Float} tds
*

{
    "sensor_id":22012201,
    "humadity": 50,
    "temperature": 15,
    "conductivity": 60,
    "ph": 4,
    "tds": 2
}

*/

SensordataController.post("/soil/add", async (req, res) => {
    const add = await m$dataSoil.addDataSensor(req.body)

    response.sendResponse(res, add)
})

SensordataController.get("/soil/alldata/:id", async (req, res) => {
    const list = await m$dataSoil.getAllData(Number(req.params.id))

    response.sendResponse(res, list)
})

SensordataController.delete("/soil/destroy/:id", async (req, res) => {
    const destroy = await m$dataSoil.destroAll(req.params.id)

    response.sendResponse(res, destroy)
})

/********* SHT ********************/

/** Add data
* @param  {Int} sensor_id
* @param {Float} humadity
* @param {Float} temperature
* 
* https:localhost:8000/api/
*/

SensordataController.post("/sht/add", async (req, res) => {
    const add = await m$dataSht.addDataSensor(req.body)

    response.sendResponse(res, add)
})

SensordataController.get("/sht/alldata/:id", async (req, res) => {
    const list = await m$dataSht.getAllData(Number(req.params.id))

    response.sendResponse(res, list)
})

SensordataController.delete("/sht/destroy/:id", async (req, res) => {
    const destroy = await m$dataSht.destroAll(req.params.id)

    response.sendResponse(res, destroy)
})

module.exports = SensordataController;