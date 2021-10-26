
exports.up = (knex, Promise) => {
    return knex.schema.createTable('Pessoa', table => {
        table.increments('id').primary();  
        table.text('nome')
        table.text('email')
        table.text('cpf')
        table.boolean('ativo')    
        table.timestamps()
            
       table.integer('endereco_id',11)
            .unsigned()
            .references('endereco_id')
            .inTable('endereco')
    })
   }

exports.down = knex => knex.schema.dropTable('pessoa')
