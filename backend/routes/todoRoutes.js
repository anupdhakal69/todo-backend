import express from "express"

const router = express.Router()

router.get("/hello",(req,res) => {
    res.json({
        "name":"dhurmus",
        "age":52,
        "study":"nothing"
    })
})

export default router