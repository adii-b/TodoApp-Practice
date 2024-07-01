import React from "react"

export const Todos = () => {
	const [todos, setTodos] = React.useState([])
	console.log(todos)
	// const getData = async () => {
	// 	try {
	// 		const response = await fetch("http://localhost:3000/todos")
	// 		const data = await response.json()
	// 		console.log(data)
	// 		setTodos(data.todos)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	// This is wrong since it sends out infinite requests to the backend use useEffect instead
	// getData()

	React.useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch("http://localhost:3000/todos")
				const data = await response.json()
				setTodos(data.todos)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])

	return (
		<div>
			{todos.map((todo) => {
				return (
					<React.Fragment key={todo._id}>
						<h1>{todo.title}</h1>
						<h2>{todo.description}</h2>
						<button>
							{todo.completed ? "Completed" : "Mark as complete"}
						</button>
					</React.Fragment>
				)
			})}
		</div>
	)
}
