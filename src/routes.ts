import express from "express";
import { EnderecoController } from "./controllers/EnderecoController";

const routes = express.Router();

routes.get('/enderecos',  new EnderecoController().index);
routes.get('/', (req: express.Request, res: express.Response) => res.send('Servidor rodando na porta 4000'));


export default routes