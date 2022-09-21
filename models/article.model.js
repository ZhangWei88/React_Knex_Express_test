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
  return db("articles").insert(article, "id");
};

//update article
const updateArticle = (id, article) => {
  return db("articles").where("id", id).update(article);
};

//remove article
const removeArticle = (id) => {
  return db("articles").where("id", id).del();
};

module.exports = {
  find,
  findById,
  addArticle,
  updateArticle,
  removeArticle,
};
