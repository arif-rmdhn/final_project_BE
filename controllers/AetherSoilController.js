const {Router} = require('express');
const m$aetherSoil = require('../modules/AetherSoil.module');
const response = require('../helpers/response');

const aetherSoilController = Router();

/** Kirim data baru
*
{
    "Temperature": 25.5,
    "Humidity": 60.2,
    "Ph": 6.5,
    "EC": 1.2,
    "Nitrogen": 10.5,
    "Potassium": 5.3,
    "Kalium": 3.8    
}
* https:localhost:8000/api/aethersoil/send  
*/
aetherSoilController.post('/send', async (req, res) => {
    const add = await m$aetherSoil.SendAetherSoil(req.body);
    response.sendResponse(res, add);
});

/** Get semua data dari database
*
* https:localhost:8000/api/aethersoil/get  
*/
aetherSoilController.get('/get', async (req, res) => {
    const get = await m$aetherSoil.GetAetherSoil();
    response.sendResponse(res, get);
});

module.exports = aetherSoilController;