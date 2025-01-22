const express = require("express")
const BooksRoutes = require("./routes/BooksRoutes")
const app = express()
const cors = require('cors');

//Routes
app.use(cors());
app.use(express.json())
app.use("/",BooksRoutes)
app.listen(3030, ()=>{
    console.log("Api esta ejecutandose en el puerto 3030")
})

