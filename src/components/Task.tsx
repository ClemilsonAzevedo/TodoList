import { Trash } from "phosphor-react";
import style from "./Task.module.css";

export interface TaskProps {
	content: string;
	isComplete: boolean;
}

export function Task({ content, isComplete }: TaskProps) {
	const uniqueId = `checkbox-${content.replace(/\s+/g, "-").toLowerCase()}`;

	return (
		<div className={isComplete ? style.task : style.complete}>
			<div className={style.check}>
				<div className={style.round}>
					<input type="checkbox" id={uniqueId} className="checkbox" />
					<label htmlFor={uniqueId}></label>
				</div>
			</div>
			<p>{content}</p>
			<button type="button">
				<Trash size={24} />
			</button>
		</div>
	);
}
