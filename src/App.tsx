import { Header } from "./components/Header";
import "./global.css";
import style from "./App.module.css";
import Clipboard from "./assets/Clipboard.svg";
import { PlusCircle } from "phosphor-react";
import { useState, FormEvent, ChangeEvent } from "react";
import { Task } from "./components/Task";

const allTasks = [
	{
		id: 1,
		content: "Finish the report",
		isComplete: false,
	},
	{
		id: 2,
		content: "Attend the meeting",
		isComplete: true,
	},
	{
		id: 3,
		content: "Buy groceries",
		isComplete: false,
	},
	{
		id: 4,
		content: "Clean the house",
		isComplete: true,
	},
	{
		id: 5,
		content: "Learn a new programming language",
		isComplete: false,
	},
];

export function App() {
	const [tasks, setTasks] = useState(["Minha primeira Task"]);
	const [newTaskText, setNewTaskText] = useState("");
	const isInputTaskTextEmpty = newTaskText.length === 0;

	function handleAddNewTask(e: FormEvent) {
		e.preventDefault();
		setTasks([...tasks, newTaskText]);
		setNewTaskText("");
	}

	function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
		e.target.setCustomValidity("");
		setNewTaskText(e.target.value);
	}

	return (
		<main>
			<Header />
			<form className={style.form} onSubmit={handleAddNewTask}>
				<div>
					<input
						required
						className={style.input}
						type="text"
						name="task"
						value={newTaskText}
						onChange={handleNewTaskChange}
						placeholder="Adicione uma nova tarefa"
					/>
					<button
						className={style.button}
						type="submit"
						disabled={isInputTaskTextEmpty}
					>
						Criar <PlusCircle size={16} />
					</button>
				</div>
			</form>

			<div className={style.tasksContainer}>
				<section className={style.tasks}>
					<header className={style.header}>
						<h3>
							Tarefas Criadas <span>{tasks.length}</span>
						</h3>
						<h3>
							Concluidas <span>0</span>
						</h3>
					</header>
					<div className={style.task}>
						{tasks.length === 0 ? (
							<div className={style.empty}>
								<img src={Clipboard} alt="" />
								<div>
									<p>
										<span>Você ainda não tem tarefas cadastradas</span>
										Crie tarefas e organize seus itens a fazer
									</p>
								</div>
							</div>
						) : (
							tasks.map((task) => {
								return <Task key={task} content={task} isComplete />;
							})
						)}
					</div>
				</section>
			</div>
		</main>
	);
}
