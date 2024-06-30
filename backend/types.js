const zod = require("zod")

/* 
   todo {
      title: String,
      desc: String
   }
   put {
      id: String
   }
*/

const createTodo = zod.object({
	title: zod.string(),
	description: zod.string(),
})

const updateTodo = zod.object({
	id: zod.string(),
})

module.exports = {
	createTodo,
	updateTodo,
}
