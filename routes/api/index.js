const router = require("express").Router();
const bookRoutes = require("./books");
const articlesRoutes = require("./articles");

// Book routes
router.use("/books", bookRoutes);
router.use("/article", articlesRoutes);

module.exports = router;
