import React, { Component } from "react";
 
class Main extends Component {
  render() {
    return (
        <div>
          <h1>Car repair services</h1>
          <ul className="header">
            <li><a href="/About">Home</a></li>
            <li><a href="/Services">Stuff</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
          <div className="content">
    <h2>WHEN YOU NEED COMPLETE CAR REPAIR FROM THE EXPERTS, TURN TO FIRESTONE</h2>
    <p>TYPES OF AUTO REPAIR SERVICES</p>
    <li>
Engine Repair: Regular engine maintenace can bring power and efficiency back to your car.</li>
<li> A/C Repair: When auto air conditioning systems break down, experts at Firestone Complete Auto Care are ready to get your A/C system back to where it should be</li>

             
          </div>
        </div>
    );
  }
}
 
export default Main;