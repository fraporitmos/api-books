const express = require("express")
const BookRoutes = require("./routes/BookRoutes")
const app = express()
const cors = require('cors');

//Routes
app.use(cors());
app.use(express.json())
app.use("/",BookRoutes)
//Listen: El SO escucha y se al puerto y puede permitir el trafico es este puerto
app.listen(3030, ()=>{
    console.log("Api esta ejecutandose en el puerto 3030")
})

