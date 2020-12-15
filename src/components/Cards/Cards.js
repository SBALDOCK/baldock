import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check this out</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://i.ibb.co/3pyDXF0/devpendency.png"
              text="The Devpendency App"
              label="placeholder"
              link="https://github.com/Devpendency-App/devpendency-app"
            />
            <CardItem
              src="https://i.ibb.co/VmYm5GN/command.png"
              text="Command Love Interface"
              label="placeholder"
              link="https://github.com/Async-and-the-Awaits/Async-and-the-Awaits"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://i.ibb.co/SnDSGWQ/weekend.png"
              text="Weekend Warrior"
              label="placeholder"
              link="http://weekend-warrior-app.herokuapp.com/"
            />
            <CardItem
              src="https://i.ibb.co/5B1wbf9/aquarium.png"
              text="Zen Aquarium"
              label="placeholder"
              link="https://seanjmurray.github.io/while-201-project/index.html"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

// https://i.ibb.co/3pyDXF0/devpendency.png

export default Cards;
