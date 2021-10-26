
exports.up = knex => knex.schema.createTable('endereco', table => {
    table.increments('endereco_id').primary()
    table.text('logradouro')
    table.text('bairro')
    table.text('cep')
    table.text('telefone')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('endereco');