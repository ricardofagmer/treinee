
exports.up = knex => knex.schema.alterTable('pessoa', table => {
    table.timestamp('deleted_at');
})
  
exports.down = knex => knex.schema.alterTable('pessoa', table => table.dropColumn('deleted_at'));