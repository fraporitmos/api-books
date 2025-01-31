const mongoose = require("mongoose");
const { BookSchema } = require("../Schemas/BookSchema")

const DeleteBook = async (req, res) => {
  const { _id } = req.body;
  try {
    await mongoose.connect(
      "mongodb+srv://root:idat&&2025@cluster0.xrd7l.mongodb.net/"
    );
    const bookSchema = mongoose.model("books", BookSchema);

    const bookDeleted = await bookSchema.findByIdAndDelete(_id);
    if (bookDeleted) {
      res.status(200).json({
        msg: "Libro eliminado.",
        book: bookDeleted,
      });
    } else {
      res.status(500).json({
        msg: `Error, no se pudo eliminar el libro`,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: `Error, no se pudo conectar a la DB. ${error} `,
    });
  }
};

module.exports = {
  DeleteBook,
};
