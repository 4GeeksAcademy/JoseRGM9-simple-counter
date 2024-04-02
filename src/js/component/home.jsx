import React from "react";
import ReactDOM from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SimpleCounter.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
		<div className="contenedorGrande">
			<SimpleCounter />
		</div>
		</div>
	);
};

export default Home;
