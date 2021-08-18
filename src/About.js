import React from "react";
import styled from "styled-components";

const AboutTitle = styled.h2`
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
  marginBottom: "4em",
};

const row = {
  display: "flex",
};

const divRight = {
  textAlign: "right",
  flex: "1",
  margin: "2em",
};
const divLeft = {
  textAlign: "left",
  flex: "1",
  margin: "2em",
};

const imgdiv = {
  flex: "1",
  textAlign: "right",
  margin: "2em",
};
const imgdivLeft = {
  flex: "1",
  textAlign: "left",
  margin: "2em",
};

const imageRight = {
  justifyContent: "right",
  textAlign: "right",
  border: "solid 3px gray",
  borderRadius: "50%",
  maxWidth: "15%",
  verticalAlign: "middle",
};
const imageLeft = {
  textAlign: "left",
  border: "solid 3px gray",
  borderRadius: "50%",
  maxWidth: "15%",
};

export default function About() {
  return (
    <div>
      <AboutTitle>About</AboutTitle>
      <h5 style={h5Style}>Lorem ipsum dolor sit amet consectetur.</h5>
      <div style={row}>
        <div style={divRight}>
          <h4>2009-2011</h4>
          <h4>Our Humble Beginnings</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
            voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
            recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium
            consectetur!
          </p>
        </div>
        <div style={imgdivLeft}>
          <img
            alt="board"
            style={imageLeft}
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/1.jpg"
          />
        </div>
      </div>
      <div style={row}>
        <div style={imgdiv}>
          <img
            alt="kid"
            style={imageRight}
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/2.jpg"
          />
        </div>
        <div style={divLeft}>
          <h4>March 2011</h4>
          <h4>An Agency is Born</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
            voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
            recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium
            consectetur!
          </p>
        </div>
      </div>
      <div style={row}>
        <div style={divRight}>
          <h4>December 2015</h4>
          <h4>Transition to Full Service</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
            voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
            recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium
            consectetur!
          </p>
        </div>
        <div style={imgdivLeft}>
          <img
            alt="people at desk"
            style={imageLeft}
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/3.jpg"
          />
        </div>
      </div>
      <div style={row}>
        <div style={imgdiv}>
          <img
            alt="office"
            style={imageLeft}
            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/4.jpg"
          />
        </div>
        <div style={divLeft}>
          <h4>July 2020</h4>
          <h4>Phase Two Expansion</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
            voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
            recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium
            consectetur!
          </p>
        </div>
      </div>
    </div>
  );
}
