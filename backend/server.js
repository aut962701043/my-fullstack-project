import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import 'dotenv/config'
import orderRouter from "./routes/orderRoute.js"
import mongoose from "mongoose"



//app config
const app =express()
const port =process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())

//db conection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://mthirumal2005_db_user:UIpuXMmY8eoQ9Kz9@cluster0.i02zvqc.mongodb.net/
