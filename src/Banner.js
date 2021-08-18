import React from "react";
import styled from "styled-components";

const Background = styled.section`
  background-color: black;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  background-image: url("https://startbootstrap.github.io/startbootstrap-agency/assets/img/header-bg.jpg");
  height: 500px;
`;

const Greeting = styled.h1`
  font-size: 4em;
  color: white;
  width: 15em;
  margin: 0 auto;
  padding: 0 0 40px 0;
  text-align: center;
  text-transform: uppercase;
  display: block;
`;

const Welcome = styled.h3`
  font-size: 2em;
  font-style: italic;
  color: white;
  text-align: center;
  margin: 0 auto;
  padding: 200px 0 15px 0;
  display: block;
`;

const buttonStyle = {
  width: "12em",
  margin: "0 auto",
  textAlign: "center",
  display: "block",
  textTransform: "uppercase",
  padding: "1em",
  backgroundColor: "#FEC801",
  color: "white",
  border: "none",
  borderRadius: "3px",
  fontWeight: "700",
};

export default function Banner() {
  return (
    <Background>
      <Welcome>Welcome To Our Studio!</Welcome>
      <Greeting>It's Nice to Meet You</Greeting>
      <button style={buttonStyle}>Tell Me More</button>
    </Background>
  );
}
