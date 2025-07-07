const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const categoryRouter = require('./routers/categoryRouter')
const todoRouter = require('./routers/todoRouter')
const cors = require('cors')
const app = express()


//listen
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo conected....."))
    .catch(err => console.log(err))

//const
const PORT = process.env.PORT || 5000

//CORS,upload ....
app.use(express.json())


// Cho phép tất cả các origin hoặc chỉ định domain cụ thể
app.use(cors({
    origin: '*', // hoặc cụ thể 'http://your-expo-ip:port''https://quanlyvumua.vercel.app', // Chỉ cho phép trang web của bạn truy cập
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//routers
app.use(categoryRouter)
app.use(todoRouter)
app.use("/", (req, res) => res.json({ status: "success", data: "Server running...." }))



app.listen(PORT, () => console.log(`Listen at port ${PORT}`))