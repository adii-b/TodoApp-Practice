import React from "react"

export function CreateTodo() {
	const [title, setTitle] = React.useState("") // this is slightly non-optimal way cause it causes lot of re-renders
	const [description, setDescription] = React.useState("")
	const postData = async () => {
		// Please remember fetch syntax while posting data 🙂
		const response = await fetch("http://localhost:3000/todo", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: title,
				description: description,
			}),
		})
		const data = await response.json()
		alert("Todo added")
		console.log(data)
	}
	return (
		<div>
			<input
				type="text"
				name=""
				id=""
				placeholder="title"
				onChange={(e) => setTitle(e.target.value)}
			/>
			<br />
			<input
				type="text"
				name=""
				id=""
				placeholder="description"
				onChange={(e) => setDescription(e.target.value)}
			/>
			<br />
			<button onClick={postData}>Add Todo</button>
		</div>
	)
}
