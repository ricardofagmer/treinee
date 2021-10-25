
exports.up = knex => knex.schema.createTable('endereco', table => {
    table.increments('id')
    table.text('logradouro')
    table.text('bairro')
    table.text('cep')
    table.text('telefone')

    table.timestamp('created_at').defaulTo(knex.fn.now())
    table.timestamp('updated_at').defaulTo(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('endereco');