import { Header } from "./components/Header";
import { NewTaskInputForm } from "./components/NewTaskInpuForm";
import { Tasks } from "./components/Tasks";
import "./global.css";
import style from "./App.module.css";

export function App() {
	return (
		<main>
			<Header />
			<NewTaskInputForm />
			<div className={style.tasks}>
				<Tasks />
			</div>
		</main>
	);
}
