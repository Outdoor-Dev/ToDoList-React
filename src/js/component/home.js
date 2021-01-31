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

	const handleKeyUp = event => {
		if (event.keyCode === 13 && userInput !== "") {
			setTask(task.concat(userInput));
			setUserInput("");
		}
	};
	const itemDelete = index => {
		let updatedList = task.filter(
			(tasks, taskIndex) => index !== taskIndex
		);
		setTask(updatedList);
	};

	return (
		<div
			className="container  d-flex justify-content-center"
			style={{ width: 600 }}>
			<h1 className="todo-title text-white "> Things To Do</h1>
			<div
				className="todo-list mt-5 "
				style={{ width: 500, height: 900 }}>
				<input
					className="tasks mb-4 mt-5 "
					style={{ width: 300, height: 50 }}
					type="text"
					onChange={e => setUserInput(e.target.value)}
					value={userInput}
					onKeyUp={handleKeyUp}
				/>

				<ul className="list-group ">
					{task.map((value, index) => {
						return (
							<li
								className="list-group-item"
								key={index}
								style={{ width: 400, height: 90 }}>
								{value}

								<i
									className="far fa-trash-alt d-flex justify-content-end  "
									onClick={() => itemDelete(index)}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
