// Express boilerplate
const express = require("express")
const cors = require("cors")
const { createTodo, updateTodo } = require("./types")
const { TodoModel } = require("./db")

const app = express()

/* 
body {
   title: String,
   description: String
}
*/

app.use(express.json())
app.use(cors())

app.post("/todo", async (req, res) => {
	const createPayload = req.body
	const parsedPayload = createTodo.safeParse(createPayload)
	if (!parsedPayload.success) {
		return res.status(411).json({ msg: "Using wrong inputs" })
	}
	// Get ToDo from MongoDB
	await TodoModel.create({
		title: createPayload.title,
		description: createPayload.description,
		completed: false,
	})
	return res.status(200).json({ msg: "Todo created" })
})

app.put("/completed", async (req, res) => {
	const updatePayload = req.body
	const parsedPayload = updateTodo.safeParse(updatePayload)
	if (!parsedPayload.success) {
		return res.status(411).json({ msg: "Using wrong inputs" })
	}
	// Update ToDo in MongoDB
	await TodoModel.updateOne(
		{
			_id: updatePayload.id,
		},
		{
			completed: true,
		}
	)
	return res.status(200).json({ msg: "Todo updated" })
})

app.get("/todos", async (req, res) => {
	const todos = await TodoModel.find({})
	if (!todos) {
		return res.status(404).json({ msg: "No todos found" })
	}
	return res.status(200).json({ todos })
})

app.delete("/", (req, res) => {})

app.use((err, req, res, next) => {
	return res.status(500).json({ msg: "Server error" })
})

app.listen(3000, () => {
	console.log(`Server started on port 3000`)
})
