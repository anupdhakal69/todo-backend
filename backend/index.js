import express from "express"
import "dotenv/config"
// import cors from cors

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req,res) => {
    res.send("hilo hilo")
})

app.listen(port, () => {
    console.log(`Server is running on port, ${port}`);
})