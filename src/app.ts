import express from "express";
import routes from './routes'

const app = express();
      app.use(routes);
      app.listen(4000, () => console.log('Servidor rodando na porta 4000'));

      app.use((error: any, req: any, res: any, next: any) =>{
            res.status(error.status || 500)
            res.json( { error: error.message })
      })

      app.use((req: any, res: any, next: any) =>{
          const error = new Error();
          error.message = 'Error';
          error.stack = 'Not Found';

          next(error)
      });





  