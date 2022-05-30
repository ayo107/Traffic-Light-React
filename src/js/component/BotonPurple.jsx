import React from "react";
//Funcion para la luz lila
const purplelight = () => {
	return (
		<button
			onClick={() => {
				setColor("red");
			}}
			className={
				"boton " + (color === "red" ? color : "redapagado")
			}></button>
	);
};
export default purplelight;
