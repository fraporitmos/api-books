const express = require("express")
const { GetBooks } = require("../controllers/GetBooks")

const BooksRoutes = express.Router()
BooksRoutes.get("/books",GetBooks )

module.exports = BooksRoutes