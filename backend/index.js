import express from "express"
import connectDB from "./config/mongodb.js"
import cors from "cors"
import router from "./routes/todoRoutes.js"

const app = express()
const port = process.env.PORT || 4000
connectDB()
app.use(cors())
app.use(express.json())
app.use(router)

app.get('/', (req,res) => {
    res.send("hilo hilo")
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})