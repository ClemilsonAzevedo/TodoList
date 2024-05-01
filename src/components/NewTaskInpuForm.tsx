import { PlusCircle } from "phosphor-react";
import style from "./NewTaskInputForm.module.css";

export function NewTaskInputForm() {
	return (
		<form className={style.form}>
			<div>
				<input
					className={style.input}
					type="text"
					placeholder="Adicione uma nova tarefa"
				/>
				<button className={style.button} type="submit">
					Criar <PlusCircle size={16} />
				</button>
			</div>
		</form>
	);
}
