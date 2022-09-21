const db = require("../config/dbConfig");

//get all articles
const find = () => {
  return db("articles");
};

//get specific article by id
const findById = (id) => {
  return db("articles").where("id", id);
};

//add a article
const addArticle = (article) => {
  return db("articles").insert(article, {
    id: "id",
    heading: "heading",
    content: "content",
  });
};

//update article
const updateArticle = (id, article) => {
  return db("articles")
    .where("id", id)
    .update(article, { id: "id", heading: "heading", content: "content" });
};

//remove article
const removeArticle = (id) => {
  return db("articles")
    .where("id", id)
    .del({ id: "id", heading: "heading", content: "content" });
};

module.exports = {
  find,
  findById,
  addArticle,
  updateArticle,
  removeArticle,
};
