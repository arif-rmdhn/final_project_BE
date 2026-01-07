const { Router } = require("express")
const response = require("../helpers/response")
const m$img = require("../modules/images.module")
const uploud = require("../helpers/images")

const imagesController = Router()


/* Uploud Image
Formate body request:
{

  "file": "contoh.jpg"}

*/

imagesController.post("/uploud", uploud.single('file'), async (req, res) => {
    const up_img = await m$img.UploudImage(req.file)

    response.sendResponse(res, up_img)
})

imagesController.get("/list/:id", async (req, res) => {
    const data = await m$img.GetImg(req, req.params.id)

    response.sendResponse(res, data)

})

/* Delete Image

Formate body request:
{
  "filename": "contoh.jpg"
}


*/
imagesController.delete('/delete-image', async (req, res) => {
    const result = await m$img.DeleteImage(req.body);
    res.json(result);
});

module.exports = imagesController;