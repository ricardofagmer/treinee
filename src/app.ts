import express from "express";
import routes from './routes'

const app = express();
      app.use(routes);
      app.listen(4000, () => console.log('Servidor rodando na porta 4000'));




  