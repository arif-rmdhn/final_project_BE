const { Router } = require("express")
const m$data = require("../modules/sensorData.module")
const response = require("../helpers/response")

const SensordataController = Router()

/** Add data
* @param  {Int} sensor_id
* @param {Float} data_value
* 
* https:localhost:8000/api/
*/

SensordataController.post("/add", async (req, res) => {
    const add = await m$data.addDataSensor(req.body)

    response.sendResponse(res, add)
})

SensordataController.get("/alldata/:id", async (req, res) => {
    const list = await m$data.getAllData(req.params.id)
    
    response.sendResponse(res, list)
})


module.exports = SensordataController;