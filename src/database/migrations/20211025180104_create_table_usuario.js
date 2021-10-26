exports.up = knex => knex.schema.createTable('usuario', table => {
    table.increments('id')
    table.text('login')
    table.text('senha')
    
    table.timestamp('removed_at')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
})
  

exports.down = knex => knex.schema.dropTable('usuario');