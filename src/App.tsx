import { Header } from "./components/Header";
import { NewTaskInputForm } from "./components/NewTaskInpuForm";
import { Tasks } from "./components/Tasks";
import "./global.css";

export function App() {
	return (
		<main>
			<Header />
			<NewTaskInputForm />
		</main>
	);
}
