import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../../application/errors/AppError';

// Middleware de manejo de errores
export const errorHandler = (
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  console.error(err); // Podés agregar aquí logging detallado del error

  // Verificamos si es una instancia de un error personalizado (ej. AppError)
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      error: err.message || 'Error interno del servidor',
    });
  }

  // Si es un error desconocido, enviamos un mensaje genérico
  res.status(500).json({
    error: 'Error desconocido',
  });
  next();
};


// import { NextFunction , Request , Response } from  "express" ; 
// import { AppError } from '../../../application/errors/AppError';

// export default (err: Error , req: Request, res: Response, next: NextFunction) => 
// { 
//   if (err instanceof AppError) {
//     return res.status(err.statusCode).json({ error: err.message });
//   }
  
//   console.error(err); 
//   return res.status(500).json({
//     error: 'Error interno del servidor',
//   });
// };

// // export errorHandler;