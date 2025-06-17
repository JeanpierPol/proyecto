import path from 'path';
import moment from 'moment';
import fs from 'fs';

export const generateFilePath = (originalName) => {
  const ext = path.extname(originalName);
  const timestamp = moment().format('YYYYMMDD_HHmmss');
  const random = Math.floor(Math.random() * 10000);
  return `${timestamp}_${random}${ext}`;
};

export const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};
