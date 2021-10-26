import { knex } from "knex";

export class PessoaController {

    public async byId(req: any, res: any) {

        const { pessoa_id, page = 1 } = req.query;

        const query = knex('pessoa')
            .limit(5)
            .offset((page - 1) * 5);

        const countObj = knex('pessoa').count();

        if (pessoa_id) {
            query
                .where({ pessoa_id })
                .join('endereco', 'endreco.endereco_id', '=', 'pessoa.endereco_id')
                .select('pessoa,*', 'endereco.logradouro, endereco.bairro');

            countObj
                .where({ pessoa_id })
                .andWhere('deleted_at', null)
        }

        const [count] = await countObj;
        res.header('X-Total-count', count["count"]);


        const results = await query;

        return res.json(results);
    }

    public async delete(req: any, res: any, next: any) {
        try {
            const { id } = req.params;

           await knex('pessoa')
                .where({ id })
                .update('deleted_at',new Date());

            return res.send();

        } catch (error) {
            next(error);
        }
    }

}