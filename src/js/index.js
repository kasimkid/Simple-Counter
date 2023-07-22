//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

// let rest1 = 0;
// let rest2 = 0;
// let rest3 = 0;
// let rest4 = 0;
// let rest5 = 0;
// let rest6 = 0;




// rest1 = Math.floor(counter1 / 10)
// rest2 = Math.floor(counter2 / 100)
// rest3 = Math.floor(counter3 / 1000)
setInterval(() => {
    counter1 +=1  
if(counter1 > 9 ){
    counter2 +=1
    counter1 = 0
    

}
if (counter2 > 9){
    counter3 +=1
    counter2 = 0
}
if (counter3 > 9){
    counter4 +=1
    counter3 = 0
}
if (counter4> 9){
    counter5 +=1
    counter4 = 0
}
if (counter5 > 9){
    counter6 +=1
    counter5 = 0
}



    ReactDOM.render(<Home counter1 = {counter1} counter2 = {counter2} counter3 = {counter3} counter4 = {counter4} counter5 = {counter5} counter6 = {counter6} />, 
    document.querySelector("#app"));

   
}, 100);




