// import React, { useState } from "react";
import React from "react";
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	return (
		<div className="contenedor">
			<div className="timer">
				<div className="box"><i class="far fa-clock"></i></div>
				<div className="box">{props.counter6}</div>
				<div className="box">{props.counter5}</div>
				<div className="box">{props.counter4}</div>

				<div className="box">{props.counter3}</div>
				<div className="box">{props.counter2}</div>
				<div className="box">{props.counter1}</div>

			</div>
		</div>

	);
};

export default Home;
