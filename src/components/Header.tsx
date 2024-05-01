import appLogo from "../assets/Logo.svg";
import style from "./Header.module.css";

export function Header() {
	return (
		<header className={style.header}>
			<img src={appLogo} alt="Logo of app" />
		</header>
	);
}
