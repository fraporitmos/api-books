const mongoose = require("mongoose");
const { BookSchema } = require("../Schemas/BookSchema")

const UpdateBook = async (req, res) => {
  const {
    _id,
    name,
    author,
    editorial,
    description,
    price,
    img,
    discount,
    type,
  } = req.body;
  try {
    await mongoose.connect(
      "mongodb+srv://root:idat&&2025@cluster0.xrd7l.mongodb.net/"
    );
    const bookSchema = mongoose.model("books", BookSchema);
    const existBook = await bookSchema.findById(_id);
    if (existBook) {
      const bookUpdated = await bookSchema.findByIdAndUpdate(
        _id,
        { name, author, editorial, description, price, img, discount, type },
        { new: true }
      );
      if (bookUpdated) {
        res.status(200).json({
          msg: "Libro actualizado.",
          book: bookUpdated,
        });
      } else {
        res.status(500).json({
          msg: `Error, no se pudo actualizar el libro`,
        });
      }
    } else {
      res.status(200).json({
        msg: "No existe",
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: `Error, no se pudo conectar a la DB. ${error} `,
    });
  }
};

module.exports = {
  UpdateBook,
};
