import style from "./TaskGroup.module.css";
import Clipboard from "../assets/Clipboard.svg";
import { Task } from "./Task";

const task = [""];

export function Tasks() {
	return (
		<section className={style.container}>
			<header className={style.header}>
				<h3>
					Tarefas Criadas <span>{task.length}</span>
				</h3>
				<h3>
					Concluidas <span>0</span>
				</h3>
			</header>
			<div className={style.tasks}>
				{task.length === 0 ? (
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
					task.map((task) => {
						return <Task key={task} />;
					})
				)}
			</div>
		</section>
	);
}
