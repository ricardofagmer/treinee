
exports.seed = function(knex) {
  return knex('endereco').del()
    .then(function () {
      return knex('endereco').insert([
        {endereco_id: 1, logradouro: 'Ciro da Rocha Leite 163'},
      ]);
    });
};
