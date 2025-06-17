export const generatePublicUrl = (req, res, next) => {
  if (req.file) {
    const { filename, fieldname } = req.file;
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    req.file.publicUrl = `${baseUrl}/uploads/${fieldname}/${filename}`;
  }

  if (req.files) {
    Object.entries(req.files).forEach(([field, files]) => {
      files.forEach(file => {
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        file.publicUrl = `${baseUrl}/uploads/${file.fieldname}/${file.filename}`;
      });
    });
  }

  next();
};
