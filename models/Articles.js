const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Article({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  urlLink: { type: String, required: true }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
