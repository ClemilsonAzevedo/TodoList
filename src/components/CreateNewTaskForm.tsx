import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";
import style from './CreateNewTaskForm.module.css'

export interface CreateNewTaskFormProps {
	handleAddNewTask: (e: FormEvent) => void; // Recebe um evento de formulário
	handleNewTaskChange: (e: ChangeEvent<HTMLInputElement>) => void; // Recebe um evento de mudança no input
	newTaskText: string;
}

export function CreateNewTaskForm({
	handleAddNewTask,
	handleNewTaskChange,
	newTaskText,
}: CreateNewTaskFormProps) {
	const isInputTaskTextEmpty = newTaskText.length === 0;

	return (
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
	);
}
