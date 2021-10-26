const knex = require('../database');

export class EnderecoController {

    public async index(req: any, res: any) {
        const results = await knex('endereco')

        return res.json(results);
    }
 

    public async create(req: any, res: any, next: any) {
        try {
            await knex('endereco').insert(req.body);
            return res.status(201).send()

        } catch (err: any) {
            next(err)
        }
    }

    public async update(req: any, res: any, next: any) {
        try {
            const { id } = req.params;

            await knex('endereco')
                .update(req.body)
                .where({ id });

            return res.send();

        } catch (error) {
            next(error)
        }
    }

    public async delete(req: any, res: any, next: any) {
        try {
            const { id } = req.params;

            await knex('endereco')
                .where({ id })
                .del();

            return res.send();

        } catch (error) {
            next(error);
        }
    }
}

