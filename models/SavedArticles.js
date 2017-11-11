const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saved = new Schema({
  title: { type: String, required: true, unique: true},
  url: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const SavedArticles = mongoose.model("SavedArticles", saved);

module.exports = SavedArticles;
