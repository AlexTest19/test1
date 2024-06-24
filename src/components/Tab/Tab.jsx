export default function Tab({ children, onSelect, isSelected }) {
	function handleClick() {
		console.log("tab clicked!");
	}

	return (
		<li>
			<button
				className={isSelected ? "active" : ""}
				onClick={onSelect}
			>
				{children}
			</button>
		</li>
	);
}
