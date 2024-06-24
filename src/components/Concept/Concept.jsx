import "./Concept.css";

export default function Concept(props) {
	return (
		<li>
			<img
				src={props.img}
				alt="some text"
			/>
			<h3>{props.title}</h3>
			<p>{props.desc}</p>
		</li>
	);
}
