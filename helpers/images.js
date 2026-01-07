const multer = require('multer');
const path = require('path');

// Fungsi untuk membuat nama file berdasarkan waktu
const generateTimestampName = (file) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return `${day}${month}${year}-${hours}${minutes}${seconds}-${milliseconds}${path.extname(file.originalname)}`;
};

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        const timestampName = generateTimestampName(file);
        cb(null, timestampName);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Maks 5MB
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const allowedExt = ['.jpg', '.jpeg', '.png'];

        // Cek MIME dan ekstensi
        if (file.mimetype.startsWith('image/') && allowedExt.includes(ext)) {
            cb(null, true);
        } else {
            cb(new Error('Format gambar tidak didukung. Gunakan JPG atau PNG.'), false);
        }
    }
});

module.exports = upload;