import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      {/* <h1>Check this out</h1> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.ibb.co/3pyDXF0/devpendency.png"
              text="Intuitive productivity tool for software developers on the go"
              // label="placeholder"
              link="https://github.com/Devpendency-App/devpendency-app/blob/Dev/README.md"
            />
            <CardItem
              src="https://i.ibb.co/VmYm5GN/command.png"
              text="Backend chat app for overworked software developers"
              // label="placeholder"
              link="https://github.com/Async-and-the-Awaits/Async-and-the-Awaits/blob/Dev/README.md"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://i.ibb.co/SnDSGWQ/weekend.png"
              text="Location-based outdoor weekend activity finder"
              // label="placeholder"
              link="http://weekend-warrior-app.herokuapp.com/"
            />
            <CardItem
              src="https://i.ibb.co/5B1wbf9/aquarium.png"
              text="Interactive stress relief application for an anxious world"
              // label="placeholder"
              link="https://seanjmurray.github.io/while-201-project/index.html"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
