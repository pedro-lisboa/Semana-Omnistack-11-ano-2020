//Método up é responsável pela criação da tabela
//O que vai acontecer quando executar a migration
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

//Rollback caso dê algum problema e é preciso desfazer o que foi feito
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
