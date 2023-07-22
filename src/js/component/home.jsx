import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	return (
		<div className="contenedor">
		<div className="timer">
			<div className="box1">{props.counter1}</div>
			<div className="box2">{props.counter2}</div>
			<div className="box3">{props.counter3}</div>

			<div className="box4">{props.counter4}</div>
			<div className="box5">{props.counter5}</div>
			<div className="box6">{props.counter6}</div>
			<div className="reloj"><i class="far fa-clock"></i></div>
	
		</div>
		</div>
		
	);
};

export default Home;
