const { Router } = require("express")
const m$nowSht = require("../modules/dataCurrentSht.module")
const m$nowSoil = require("../modules/dataCurrentSoil.module")
const response = require("../helpers/response")

const sensorNowController = Router()

/** Create new Regist sensor Soil
* @param  {Int} sensor_id
* 
* https:localhost:8000/api/
**/

sensorNowController.post("/sht/add", async (req, res) => {
    const add = await m$nowSht.createSensorData(req.body)
    response.sendResponse(res, add)
})

sensorNowController.get("/sht/alldata", async (req, res) => {
    const list = await m$nowSht.listSensorData()

    response.sendResponse(res, list)
})

sensorNowController.get("/sht/getvalue/:id", async (req, res) => {
    const get = await m$nowSht.GetValue(Number(req.params.id))

    response.sendResponse(res, get)
})

/** Kirim data baru

* 
* https:localhost:8000/api/
**/
sensorNowController.put("/sht/sendvalue", async (req, res) => {
    const add = await m$nowSht.sendData(req.body)
    response.sendResponse(res, add)
})

sensorNowController.delete("/sht/delete/:id", async (req, res) => {
    const del = await m$nowSht.deleteList(req.params.id)

    response.sendResponse(res, del)
})

//************** SOIL ************** */

/** Create new Regist sensor Soil
* @param  {Int} sensor_id
{
    "sensor_id":22012201,
    "humadity": 50,
    "temperature": 15,
    "conductivity": 60,
    "ph": 4,
    "tds": 2
}
* 
* https:localhost:8000/api/
**/

sensorNowController.post("/soil/add", async (req, res) => {
    const add = await m$nowSoil.createSensorData(req.body)
    response.sendResponse(res, add)
})

sensorNowController.get("/soil/alldata", async (req, res) => {
    const list = await m$nowSoil.listSensorData()

    response.sendResponse(res, list)
})

sensorNowController.get("/soil/getvalue/:id", async (req, res) => {
    const get = await m$nowSoil.GetValue(Number(req.params.id))

    response.sendResponse(res, get)
})

/** Kirim data baru
* @param  {Int} sensor_id
{
    "sensor_id":22012201,
    "humadity": 50,
    "temperature": 15,
    "conductivity": 60,
    "ph": 4,
    "tds": 2
}
* 
* https:localhost:8000/api/
**/
sensorNowController.put("/soil/sendvalue", async (req, res) => {
    const add = await m$nowSoil.sendData(req.body)
    response.sendResponse(res, add)
})

sensorNowController.delete("/soil/del/:id", async (req, res) => {
    const del = await m$nowSoil.deleteList(Number(req.params.id))

    response.sendResponse(res, del)
})

module.exports = sensorNowController;



