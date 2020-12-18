import React from "react";
import "./Bio.css";

function Bio() {
  return (
    <div className="bio">
      <p className="about_me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna
        tellus, luctus sit amet leo id, malesuada sollicitudin mauris.
        Pellentesque augue dui, consectetur ut quam in, malesuada molestie
        neque. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Aenean libero metus, gravida quis velit
        sagittis, faucibus euismod orci. Fusce id ullamcorper dui. Aliquam vitae
        purus placerat, congue arcu eu, ultrices mauris. Integer quis lectus
        vitae nunc viverra luctus eget vel leo. Fusce quis pretium ante.
        Phasellus purus purus, vehicula in tortor et, malesuada condimentum
        mauris. Vivamus ultrices purus quis egestas pretium. Mauris at faucibus
        velit.
      </p>
      <p>
        I'd love to hear from you. Feel free to reach out and say hello, <br />{" "}
        send some music my way, or put me to work on your project.
      </p>
    </div>
  );
}

export default Bio;
