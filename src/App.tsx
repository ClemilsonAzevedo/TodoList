import { useState, ChangeEvent, FormEvent } from "react";
import Clipboard from "./assets/Clipboard.svg";
import "./global.css";
import style from "./App.module.css";
import { Header } from "./components/Header";
import { CreateNewTaskForm } from "./components/CreateNewTaskForm";
import { Task } from "./components/Task";

interface TaskProps {
	id: number;
	content: string;
	isComplete: boolean;
}

export function App() {
	const [newTaskText, setNewTaskText] = useState("");
	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const [taskIdCounter, setTaskIdCounter] = useState(1);

	function handleAddNewTask(e: FormEvent) {
		e.preventDefault();
		const newTask = {
			id: taskIdCounter,
			content: newTaskText,
			isComplete: false,
		};
		setTasks([...tasks, newTask]);
		setTaskIdCounter(taskIdCounter + 1);
		setNewTaskText("");
	}

	function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
		e.target.setCustomValidity("");
		setNewTaskText(e.target.value);
	}

	function handleDeleteTask(id: number) {
		const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
		setTasks(tasksWithoutDeletedOne);
	}

	function handleTaskCompletion(id: number) {
		const updatedTasks = tasks.map((task) =>
			task.id === id ? { ...task, isComplete: !task.isComplete } : task,
		);
		setTasks(updatedTasks);
	}

	return (
		<main>
			<Header />
			<CreateNewTaskForm
				handleAddNewTask={handleAddNewTask}
				handleNewTaskChange={handleNewTaskChange}
				newTaskText={newTaskText}
			/>

			<div className={style.tasksContainer}>
				<section className={style.tasks}>
					<header className={style.header}>
						<h3>
							Tarefas Criadas <span>{tasks.length}</span>
						</h3>
						<h3>
							Concluidas{" "}
							<span>
								{tasks.filter((task) => task.isComplete).length} de{" "}
								{tasks.length}
							</span>
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
							tasks.map((task) => (
								<Task
									key={task.id}
									id={task.id}
									isComplete={task.isComplete}
									content={task.content}
									handleTaskCompletion={handleTaskCompletion}
									handleDeleteTask={handleDeleteTask}
								/>
							))
						)}
					</div>
				</section>
			</div>
		</main>
	);
}
