const multer = require("multer");
const { v4 } = require("uuid");

// const upload = multer({ dest: "public/" });

// Disk Storage
const storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, 'public/')
    },
    filename: function (req, file, next) {
        const fileExtention = file.mimetype.split("/")[1];

        const fileName = v4() + "." + fileExtention;
        next(null, fileName)
    }
})


const upload = multer({ storage });

module.exports = upload;