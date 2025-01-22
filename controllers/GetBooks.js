const mongoose = require("mongoose")
const { BookSchema } = require("./BookSchema")

const GetBooks = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://root:idat&&2025@cluster0.xrd7l.mongodb.net/")
        const bookSchema = mongoose.model("books",BookSchema)
        const books = await bookSchema.find()
        res.status(200).json(books)
   

    } catch (error) {
        res.status(500).json({
            "msg":`Error, no se pudo conectar a la DB. ${error} `
        })
    }
}

module.exports = {
    GetBooks
}

