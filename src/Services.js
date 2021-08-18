import React from "react";
import styled from "styled-components";

const ServicesTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  color: black;
  display: block;
  width: 10em;
  margin: 20px auto;
`;

const h5Style = {
  textAlign: "center",
  fontStyle: "italic",
  color: "gray",
};

const row = {
  display: "flex",
  width: "80%",
  margin: "2em auto",
};

const column = {
  flex: "1",
  margin: ".5em",
  textAlign: "center",
};

const h4Style = {
  margin: "1em",
};

const pStyle = {
  color: "gray",
  fontSize: "smaller",
};

export default function Services() {
  return (
    <div>
      <ServicesTitle>Services</ServicesTitle>
      <h5 style={h5Style}>Lorem ipsum dolor sit amet consectetur.</h5>
      <div className="row" style={row}>
        <div className="column" style={column}>
          <img alt="ecommerce" />
          <h4 style={h4Style}>E-Commerce</h4>
          <p style={pStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="column" style={column}>
          <img alt="laptop" />
          <h4 style={h4Style}>Responsive Design</h4>
          <p style={pStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="column" style={column}>
          <img alt="web security" />
          <h4 style={h4Style}>Web Security</h4>
          <p style={pStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
      </div>
    </div>
  );
}
