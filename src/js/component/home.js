import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [task, setTask] = useState([
		"Walk dog",
		"Wash clothes",
		"Clean house"
	]);
	const [userInput, setUserInput] = useState("");

	const handleKeyUp = () => {
		if (event.keyCode === 13) {
		} else {
			
		}
	};

	return (
		<div className="container">
			<h1 className="todo-title"> Todos</h1>
			<div className="todo-list">
				<input
					className="tasks"
					type="text"
					onChange={e => setUserInput(e.target.value)}
					value={userInput}
					onKeyUp={handleKeyUp}
				/>

				<ul className="list-group">
					{task.map((value, index) => {
						return (
							<li className="list-group-item" key={index}>
								{value}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
