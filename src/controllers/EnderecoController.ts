const knex = require('../database');

export class EnderecoController {

   public async index(req: any, res: any) {
        const results = await knex('endereco')

        return res.json(results);
    }
}
