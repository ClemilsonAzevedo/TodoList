import { Trash } from "phosphor-react";
import style from "./Task.module.css";

export interface TaskProps {
	id: number;
	content: string;
	isComplete: boolean;
	handleTaskCompletion: (id: number) => void;
	handleDeleteTask: (id: number) => void;
}

export function Task({
	handleDeleteTask,
	id,
	content,
	isComplete,
	handleTaskCompletion,
}: TaskProps) {
	return (
		<div key={id} className={style.task}>
			<div className={style.check}>
				<div className={style.round}>
					<input
						type="checkbox"
						id={`task-${id}`}
						checked={isComplete}
						onChange={() => handleTaskCompletion(id)}
					/>
					<label htmlFor={`task-${id}`}></label>
				</div>
			</div>

			<p className={isComplete ? style.complete : ""}>{content}</p>

			<button type="button" onClick={() => handleDeleteTask(id)}>
				<Trash size={24} />
			</button>
		</div>
	);
}
