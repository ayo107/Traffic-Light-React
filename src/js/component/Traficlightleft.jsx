import React, { useState } from "react";

//create your first component
export function Traficlightleft() {
	const [color, setColor] = useState("");

	return (
		<div id="padreleft">
			<div id="hijoleft">
				<button
					onClick={() => {
						setColor("red");
					}}
					className={
						"boton " + (color == "red" ? color : "redapagado")
					}></button>
				<button
					onClick={() => {
						setColor("yellow");
					}}
					className={
						"boton " + (color == "yellow" ? color : "yellowapagado")
					}></button>
				<button
					onClick={() => {
						setColor("green");
					}}
					className={
						"boton " + (color == "green" ? color : "greenapagado")
					}></button>
			</div>
		</div>
	);
}
