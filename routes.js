const sensorController = require('./controllers/sensorController')
const sensorDataController = require('./controllers/SensorDataController')
const sensorNowController = require('./controllers/SensorNowController')

const _routes = [
    ['sensor', sensorController],
    ['data', sensorDataController],
    ['value', sensorNowController]
]

const routes = (app) => {
    _routes.forEach(route => {
        const [url, controller] = route
        app.use(`/api/${url}`,controller)
    })
}

module.exports = routes