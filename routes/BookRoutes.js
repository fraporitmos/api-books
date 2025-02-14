const express = require("express")
const { PostBook } = require("../controllers/Book/PostBook")
const { UpdateBook } = require("../controllers/Book/UpdateBook")
const { DeleteBook } = require("../controllers/Book/DeleteBook")
const { GetBook } = require("../controllers/Book/GetBook")


const BooksRoutes = express.Router()
//Sufijo para mi endpoint
BooksRoutes.get("/book/:type",GetBook )
BooksRoutes.post("/book",PostBook )
BooksRoutes.put("/book",UpdateBook )
BooksRoutes.delete("/book",DeleteBook )

module.exports = BooksRoutes