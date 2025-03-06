const sensorController = require('./controllers/sensorController')
const sensorDataController = require('./controllers/SensorDataController')
const sensorNowController = require('./controllers/dataCurrentNowController')
const systemController = require('./controllers/systemController')

const _routes = [
    ['sensor', sensorController],
    ['data', sensorDataController],
    ['value', sensorNowController],
    ['system', systemController]
]

const routes = (app) => {
    _routes.forEach(route => {
        const [url, controller] = route
        app.use(`/api/${url}`,controller)
    })
}

module.exports = routes