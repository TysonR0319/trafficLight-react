import React, { useState, useEffect } from 'react';

//create your first component
const TrafficLight = () => {

	const[color, setColor] = useState("null")
	const[visible, toggleVisibility] = useState(false)

	const cycle = () => {
	if(color == "red"){
		setColor("green")
	}else if (color == "green"){
		setColor("yellow")
	} else {
		setColor("red")
	};
}



	return (
		<div className="container-fluid">
			<div className="pole"></div>
			<div className="wrap-circle">
				<div onClick={() => setColor("red")} className={(color == "red") ? "red selected": "red"}></div>
				<div onClick={() => setColor("yellow")} className={(color == "yellow") ? "yellow selected": "yellow"}></div>
				<div onClick={() => setColor("green")}className={(color == "green") ? "green selected": "green"}></div>
				<div onClick={() => setColor("purple")}className={(visible == true) ? "purple selected": "d-none"}></div>
				<button onClick={cycle} className="cycle-button"></button>
				<button onClick={() => toggleVisibility((visible)=> !visible)} className="toggle-button"></button>
			</div>
		</div>
	);
};

export default TrafficLight;
