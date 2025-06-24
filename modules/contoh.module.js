const Joi = require("joi")
const prisma = require("../helpers/database")
const validate = require("../helpers/validation")

exports.uploadImage = async (req, res) => {
  try {
    const { filename, originalname } = req.file;
    const imageUrl = `/uploads/${filename}`;
    
    const image = await prisma.image.create({
      data: { name: originalname, url: imageUrl }
    });
    
    res.status(201).json({
      status: true,
      message: 'Gambar berhasil diunggah',
      data: image
    });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await prisma.image.findMany();
    res.json({ status: true, data: images });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};


app.get('/uploads/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const imageDir = path.join(__dirname, 'images');
    
    // Baca semua file di direktori
    const files = await fs.readdir(imageDir);
    
    // Filter file yang sesuai dengan pola tanggal
    const matchingFiles = files.filter(file => 
      file.startsWith(`${id}-`) && 
      ['.jpg', '.jpeg', '.png'].some(ext => file.endsWith(ext))
    );

    if (matchingFiles.length === 0) {
      return res.status(404).json({ status: false, error: 'Gambar tidak ditemukan' });
    }

    // Ambil file pertama yang sesuai
    const fileName = matchingFiles[0];
    const filePath = path.join(imageDir, fileName);
    
    // Set header dan kirim file
    res.header('Content-Type', `image/${path.extname(fileName).substring(1)}`);
    res.header('Content-Disposition', `inline; filename="${fileName}"`);
    
    fs.createReadStream(filePath).pipe(res);
    
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
});