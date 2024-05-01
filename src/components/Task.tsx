import { Trash } from "phosphor-react";
import style from "./Task.module.css";

export function Task() {
	return (
		<div className={style.task}>
			<div className={style.check}>
				<div className={style.round}>
					<input type="checkbox" id="checkbox" />
					<label htmlFor="checkbox"></label>
				</div>
			</div>
			<p>
				Integer urna interdum massa libero auctor neque turpis turpis semper.
				Duis vel sed fames integer.
			</p>
			<button type="button">
        <Trash size={24} />
      </button>
		</div>
	);
}
