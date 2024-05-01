import { Header } from "./components/Header";
import "./global.css";
import style from "./App.module.css";
import Clipboard from "./assets/Clipboard.svg";
import { PlusCircle, Trash } from "phosphor-react";
import { useState, FormEvent, ChangeEvent } from "react";
import taskStyle from "./components/Task.module.css";

export interface TaskProps {
	id: number;
	content: string;
	isComplete: boolean;
}

export function App() {
	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const [newTaskText, setNewTaskText] = useState("");
	const isInputTaskTextEmpty = newTaskText.length === 0;

	function handleAddNewTask(e: FormEvent) {
		e.preventDefault();
		const newTask: TaskProps = {
			id: tasks.length + 1,
			content: newTaskText,
			isComplete: false,
		};
		setTasks([...tasks, newTask]);
		setNewTaskText("");
	}

	function handleDeleteTask(id: number) {
		const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
		setTasks(tasksWithoutDeletedOne);
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
							Concluidas{" "}
							<span>{tasks.filter((task) => task.isComplete).length}</span>
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
								<div key={task.id} className={taskStyle.task}>
									<div className={taskStyle.check}>
										<div className={taskStyle.round}>
											<input
												type="checkbox"
												id={`checkbox-${task.id}`}
												className="checkbox"
											/>
											<label htmlFor={`checkbox-${task.id}`}></label>
										</div>
									</div>
									<p>{task.content}</p>
									<button
										type="button"
										onClick={() => handleDeleteTask(task.id)}
									>
										<Trash size={24} />
									</button>
								</div>
							))
						)}
					</div>
				</section>
			</div>
		</main>
	);
}
