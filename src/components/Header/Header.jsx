import reactImage from "../../assets/react-icon.png";
import "./Header.css";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
	return (
		<header>
			<img
				src={reactImage}
				alt="Stylized atom"
			/>
			<h1>React Start</h1>
			<p>Lets start studying {reactDescriptions[genRandomInt(2)]} concepts of React library!</p>
		</header>
	);
}
