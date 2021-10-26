import express from "express";
import { EnderecoController } from "./controllers/EnderecoController";
import { PessoaController } from "./controllers/PessoaController";

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => res.send('Servidor rodando na porta 4000'));
routes.get('/enderecos',  new EnderecoController().index);
routes.post('/enderecos', new EnderecoController().create);
routes.patch('/enderecos/:id', new EnderecoController().update);
routes.delete('/enderecos/:id', new EnderecoController().delete);

routes.get('/pessoa/:id',  new PessoaController().byId);

export default routes