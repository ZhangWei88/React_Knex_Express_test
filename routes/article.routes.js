const express = require("express");
const router = express.Router();

const articleCtrl = require("../controllers/article.controller");

router.get("/test", articleCtrl.test);

//read a list of articles
router.get("/", articleCtrl.getAllArticles);

//get the article
router.get("/:id", articleCtrl.getArticle);

//post the article
router.post("/", articleCtrl.addArticle);

//put the article-- update
router.put("/:id", articleCtrl.updateArticle);

//delete the article
router.delete("/:id", articleCtrl.deleteArticle);
module.exports = router;
