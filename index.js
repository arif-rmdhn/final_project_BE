const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const response = require('./helpers/response')

const app = express()
const port = process.env.PORT || 3000
const host = '0.0.0.0'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

process.env.TZ = "Asia/Jakarta"

// Welcome API
app.get('/', async (req, res) => {
   res.status(200).send({
      status: true,
      data: 'Welcome to API Todo List'
   })
})

// Routes API
routes(app)

// Global Error Handler
app.use(response.errorHandler)

// Menjalankan server dengan akses IP lokal
app.listen(port, host, () => {
   console.log(`Server is Running on http://${getLocalIP()}:${port}`)
})

// Fungsi untuk mendapatkan IP lokal
function getLocalIP() {
   const os = require('os')
   const interfaces = os.networkInterfaces()
   for (let iface in interfaces) {
      for (let alias of interfaces[iface]) {
         if (alias.family === 'IPv4' && !alias.internal) {
            return alias.address
         }
      }
   }
   return 'localhost'
}
