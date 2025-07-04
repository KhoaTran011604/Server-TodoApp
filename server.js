const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const categoryRouter = require('./routers/categoryRouter')
const todoRouter = require('./routers/todoRouter')
const cors = require('cors')
const app = express()

//const
const PORT = process.env.PORT || 5000

//CORS,upload ....
app.use(express.json())

//routers
app.use(categoryRouter)
app.use(todoRouter)
app.use("/", (req, res) => res.json({ status: "success", data: "Server running...." }))


//listen
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo conected....."))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Listen at port ${PORT}`))