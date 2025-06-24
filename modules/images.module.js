const Joi = require("joi")
const prisma = require("../helpers/database")
const path = require('path')
const fs = require('fs').promises;
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

    GetImg = async (req, id) => { // Tambahkan parameter req
        try {
            // Validasi format tanggal (YYYYMMDD)
            if (!/^\d{8}$/.test(id)) {
                return {
                    status: false,
                    code: 400,
                    error: 'Format tanggal harus YYYYMMDD (contoh: 20230101)'
                };
            }

            const imageDir = path.resolve(__dirname, '..', 'images');

            // Cek apakah direktori ada
            try {
                await fs.access(imageDir);
            } catch (error) {
                return { status: false, error: 'Direktori gambar tidak ditemukan' };
            }

            const files = await fs.readdir(imageDir);

            // Filter dan mapping file gambar
            const images = files
                .filter(file =>
                    file.startsWith(`${id}-`) &&
                    ['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())
                )
                .map(file => ({
                    filename: file,
                    url: `${req.protocol}://${req.get('host')}/images/${file}`
                }));

            if (images.length === 0) {
                return {
                    status: false,
                    code: 404,
                    error: 'Tidak ada gambar ditemukan untuk tanggal ini'
                };
            }

            return {
                status: true,
                code: 200,
                data: {
                    date: id,
                    images: images
                }
            };

        } catch (error) {
            console.error('GetImg module Error: ', error);
            return {
                status: false,
                code: 500,
                error: 'Internal Server Error'
            };
        }
    };
}

module.exports = new _image();