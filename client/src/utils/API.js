import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/article");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/article/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/article", articleData);
  },
  getArticlesNYT: function (params) {
    let key = "84974ac78c4444a1b6b5bff7f57c637a";
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    return axios.get(url, {
      params: { 
        'api-key': key,
        'q': params.q,
        'begin_date': params.start,
        'end_date': params.end,
        'page': 5
      } 
    })
  }
  };
