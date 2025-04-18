import 'reflect-metadata';
import express from 'express';
import routes from './interfaces/http/routes/routes';
import { errorHandler } from './interfaces/http/middlewares/errorHandler';

const app = express();
app.use(express.json());


app.use('/api', routes);
app.use(errorHandler);
export { app };

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
