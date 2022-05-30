import React, { useState } from "react";
import ReactDOM from "react-dom";
function purple() {
	return (
		<div id="hijo">
			<button
				onClick={() => {
					setColor("red");
				}}
				className={
					"boton " + (color === "red" ? color : "redapagado")
				}></button>
		</div>
	);
}
//create your first component
export function Traficlight() {
	const [color, setColor] = useState("null");
	const cambiarcolor = (color) => {
		setColor("red");
		setInterval(cambionaranja, 1000);
	};
	const cambionaranja = function displaynaranja() {
		setColor("yellow");
		setInterval(cambioverde, 2000);
	};
	const cambioverde = function displayverde() {
		setColor("green");
		setTimeout(function () {}, 300);
	};

	return (
		<>
			<div id="padre">
				<div id="hijo">
					<button
						onClick={() => {
							setColor("red");
						}}
						className={
							"boton " + (color === "red" ? color : "redapagado")
						}></button>
					<button
						onClick={() => {
							setColor("yellow");
						}}
						className={
							"boton " +
							(color === "yellow" ? color : "yellowapagado")
						}></button>
					<button
						onClick={() => {
							setColor("green");
						}}
						className={
							"boton " +
							(color === "green" ? color : "greenapagado")
						}></button>
				</div>
			</div>
			<div id="padreleft">
				<div id="hijoleft">
					<button
						onClick={() => {
							setColor("red");
						}}
						className={
							"boton " + (color === "red" ? color : "redapagado")
						}></button>
					<button
						onClick={() => {
							setColor("yellow");
						}}
						className={
							"boton " +
							(color === "yellow" ? color : "yellowapagado")
						}></button>
					<button
						onClick={() => {
							setColor("green");
						}}
						className={
							"boton " +
							(color === "green" ? color : "greenapagado")
						}></button>
				</div>
			</div>
			<div>
				<button onClick={cambiarcolor} className="botnauto">
					Auto TrafficLight
				</button>
				<button onClick={purple} className="botnauto">
					Extra Light
				</button>
			</div>
		</>
	);
}
