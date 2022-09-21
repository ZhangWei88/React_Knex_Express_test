exports.up = function (knex, Promise) {
  return knex.schema.createTable("articles", (tbl) => {
    tbl.increments("id").primary().unsigned();
    tbl.string("heading", 255).defaultTo("Untitled article");
    tbl.string("content", 10000).notNullable();
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
    tbl.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("articles");
};
