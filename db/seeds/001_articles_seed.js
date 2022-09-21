exports.seed = function (knex) {
  return knex("articles")
    .del()
    .then(function () {
      return knex("articles").insert([
        {
          heading: "heading1",
          content: "This is content1",
        },
        {
          heading: "heading2",
          content: "This is content2",
        },
        {
          heading: "heading3",
          content: "This is content3",
        },
        {
          heading: "heading4",
          content: "This is content4",
        },
      ]);
    });
};
