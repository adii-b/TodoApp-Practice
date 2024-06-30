const mongoose = require("mongoose")

/* 
Todo {
   title: String,
   description: String,
   completed: Boolean
}
*/

const Schema = mongoose.Schema

const Todo = new Schema({
	title: String,
	description: String,
	completed: Boolean,
})

const TodoModel = mongoose.model("Todo", Todo)

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/todo_app")
		console.log("Connected to MongoDB")
	} catch (err) {
		console.log("Failed to connect to MongoDB")
	}
}

connectDB()
module.exports = {
	TodoModel,
}
