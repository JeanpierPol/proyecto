import multer from 'multer';

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';

  res.status(statusCode).json({
    error: true,
    message
  });
};

export const multerError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'El archivo es demasiado grande. Máximo permitido: 5MB' });
    }
    return res.status(400).json({ error: 'Error al subir archivo: ' + err.message });
  }

  if (err.message === 'Solo se permiten imágenes JPG/PNG') {
    return res.status(400).json({ error: err.message });
  }

  next(err);
};
