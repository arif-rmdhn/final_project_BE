const { Router } = require("express")
const response = require("../helpers/response")
const m$img = require("../modules/images.module")
const uploud = require("../helpers/images")

const imagesController = Router()

imagesController.post("/uploud", uploud.single('file'), async (req, res) => {
    const up_img = await m$img.UploudImage(req.file)

    response.sendResponse(res, up_img)
})

module.exports = imagesController;