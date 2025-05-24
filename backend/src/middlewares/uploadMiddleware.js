import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateFilePath, ensureDir } from '../utils/generateFilePath.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = file.fieldname; 
    const uploadDir = path.join(__dirname, '../../uploads', folder);
    ensureDir(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const fileName = generateFilePath(file.originalname);
    cb(null, fileName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/gif'];
  if (!allowed.includes(file.mimetype)) {
    cb(new Error('Solo se permiten imágenes JPG, PNG o GIF'), false);
  } else {
    cb(null, true);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }
});
