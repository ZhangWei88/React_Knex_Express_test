const Article = require("../models/article.model");

const test = (req, res) => {
  return res.status(200).json("article routes working well...");
};

const addArticle = async (req, res) => {
  if (!req.body.content) {
    return res.status(400).json({ err: "Content field is required!" });
  }
  const newArticle = { heading: req.body.heading, content: req.body.content };
  try {
    const article = await Article.addArticle(newArticle);
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json({ err: "Error in inserting article" });
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ err });
  }
};

const getArticle = async (req, res) => {
  const articleId = req.params.id;
  try {
    const article = await Article.findById(articleId);
    if (!article) {
      res
        .status(404)
        .json({ err: "The article with specific id is not exists!" });
    } else {
      res.status(200).json(article);
    }
  } catch (err) {
    res.status(500).json({ err: "The article info could not be retrieved" });
  }
};

const updateArticle = async (req, res) => {
  const articleId = req.params.id;
  const newArticle = {
    heading: req.body.heading,
    content: req.body.content,
  };
  if (!newArticle.content) {
    res.status(400).json({ err: "Content field is required!" });
  }
  try {
    const updatedArticle = await Article.updateArticle(articleId, newArticle);
    res.status(200).json(updatedArticle);
  } catch (err) {
    res.status(500).json({ err: "Error in updating the article" });
  }
};

const deleteArticle = async (req, res) => {
  const articleId = req.params.id;
  try {
    const deletedArticle = await Article.removeArticle(articleId);
    res.status(200).json(deletedArticle);
  } catch (err) {
    res.status(500).json({ err: "Error in deleting article" });
  }
};
module.exports = {
  test,
  addArticle,
  deleteArticle,
  updateArticle,
  getAllArticles,
  getArticle,
};
