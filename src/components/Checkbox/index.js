import "./styles.css";

function Checkbox({ code, name, handleChange }) {
	return (
		<div key={code} className="checkboxContainer">
			<input
				className="checkboxInput"
				type="checkbox"
				onChange={handleChange}
			/>
			<label className="checkboxLabel">{name}</label>
		</div>
	);
}

export default Checkbox;
