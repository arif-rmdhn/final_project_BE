const Joi = require("joi")
const prisma = require("../helpers/database")
const path = require('path')
const validate = require("../helpers/validation")

class _image {
    UploudImage = async (body) => {
        try {
            const { filename } = body;
            const imageUrl = `/images/${filename}`;

            const image = await prisma.image_data.create({
                data: {
                    name_img: body.filename,
                    url: imageUrl
                }
            });

            return {
                status: true,
                data: image
            }
        } catch (error) {
            console.error('Images module Error: ', error);
            return {
                status: false,
                error,
            }
        }

    };

    GetImg = async (id) => {
        try {
            const imageDir = path.join(__dirname, 'images')
            const files = await fs.readdir(imageDir)
            const matchingFiles = files.filter(file =>
                file.startsWith(`${id}-`) &&
                ['.jpg', '.jpeg', '.png'].some(ext => file.endsWith(ext))
            );
            if (matchingFiles.length === 0) {
                return res.status(404).json({ status: false, error: 'Gambar tidak ditemukan' });
            }
            const fileName = matchingFiles[0];
            const filePath = path.join(imageDir, fileName);

            // Set header dan kirim file
            res.header('Content-Type', `image/${path.extname(fileName).substring(1)}`);
            res.header('Content-Disposition', `inline; filename="${fileName}"`);

            fs.createReadStream(filePath).pipe(res);
        } catch (error) {
            console.error('GetImages module Error: ', error);
            return {
                status: false,
                error,
            }
        }
    }
}

module.exports = new _image();