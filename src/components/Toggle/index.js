import "./styles.css";

function Toggle({ isActive, setActive }) {
	return (
		<div className="toggleContainer">
			<div
				className={
					isActive
						? "toggleButton containerActive"
						: "toggleButton containerDefault"
				}
				onClick={() => {
					setActive(!isActive);
				}}
			>
				<div
					className={isActive ? "toggleCircle activeToggle" : "toggleCircle"}
				/>
			</div>
			<span className="toggleText">Show selected only</span>
		</div>
	);
}

export default Toggle;
