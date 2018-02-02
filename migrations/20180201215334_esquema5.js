exports.up = function(knex, Promise) {
    return knex.schema.table('contato', function(t) {
        t.string('telefone').notNullable().defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('contato', function(t) {
        t.dropColumn('telefone');
    });
};