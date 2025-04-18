import { Router } from 'express';
import companyRoutes from './companyRoutes';

const routes = Router();

routes.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'API funcionando correctamente' });
});

// Registrar rutas individuales
routes.use('/company', companyRoutes);

// Aquí podrías agregar más rutas: usuarioRoutes, productoRoutes, etc.
// routes.use('/usuarios', usuarioRoutes);

export default routes;
