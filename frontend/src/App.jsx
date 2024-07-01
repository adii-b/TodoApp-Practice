import React from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
	return (
		<React.Fragment>
			<div>Hi</div>
			<CreateTodo />
			<Todos />
		</React.Fragment>
	)
}

export default App
