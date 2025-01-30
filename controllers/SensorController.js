const { Router } = require("express")
const m$sensor = require("../modules/sensor.module")
const response = require("../helpers/response")

const sensorController = Router()

/**  Create new Regist sensor
* @param  {Int} id_sensor
* @param {string} sensor_name
* @param {string} description
* 
* https:localhost:8000/api/
*/

sensorController.post("/create", async (req, res) => {
    const add = await m$sensor.createSensor(req, body)

    response.sendResponse(res, add)
})

sensorController.get("/list", async (req, res) => {
    const list = await m$sensor.listSensor()

    response.sendResponse(res, list)
})

sensorController.delete("/delete/:id", async (req, res) => {
    const destroy = await m$sensor.destroySensor(Number(req.params.id))

    response.sendResponse(res, destroy)
})

/**  Create new Regist sensor
* @param  {Int} id_sensor
* @param {string} sensor_name
* @param {string} description
* 
* https:localhost:8000/api/
*/
sensorController.put("/update", async (req, res) => {
    const update = await m$sensor.updateSensor(req, body)

    response.sendResponse(res, update)
})