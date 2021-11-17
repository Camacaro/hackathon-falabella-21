import path from 'path';
import multer from 'multer'

const pathUpload = path.resolve( __dirname , '../../uploads')

// Multer Upload Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pathUpload)
  },
  filename: (req, file, cb) => {
    `${file.fieldname}-${Date.now()}-${file.originalname}`
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`)
  }
});

// Filter for CSV file
const csvFilter = (req, file, cb) => {
  console.log('1. uploadFile')
  if (file.mimetype.includes("csv")) {
    cb(null, true);
  } else {
    cb("Please upload only csv file.", false);
  }
};

export const uploadCsv = multer({ storage, fileFilter: csvFilter });
