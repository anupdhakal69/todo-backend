import express from "express"
import { Todo } from "../models/todoModels.js"

const router = express.Router()
 
router.get("/", async (req,res) => { 

    try {
       const getTasks = await Todo.find({})
       res.send(getTasks)
        
    } catch (error) {
        res.send(`Read Error: ${error.message}`)
        console.log("Read Error:",error.message);
    }
})

router.post("/add", async (req,res) => {
 
    const {task} = req.body

    try {
        const addTask = await Todo.create({task})
        res.status(201).send(addTask)

    } catch (error) {
        res.status(500).send(`Add error: ${error.message}`)
        console.log("Add Error:",error.message);
        
    }
})

router.delete("/delete/:id", async (req,res) => {

    const {id} = req.params

    try {
        const deleteTask = await Todo.findByIdAndDelete(id)
        res.send(deleteTask)

    } catch (error) {
        res.send(`Delete Error: ${error.message}`)
        console.log("Delete Error:",error.message);
    }

})

// router.patch("/update/:id", async (req,res) => {

//     const {id} = req.params
//     const {task} = req.body

//     try {
//         const updateTask = await Todo.findByIdAndUpdate(id)
        
//     } catch (error) {
//         res.send(`Delete Error: ${error.message}`)
//         console.log("Delete Error:",error.message);
//     }

// })

export default router