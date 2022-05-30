//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle

//include your index.scss file into the bundle

//import your own components
import { Traficlight } from "./Traficlight.jsx";

//render your react application
const Home = () => {
	return (
		<div>
			<Traficlight />
		</div>
	);
};
export default Home;
