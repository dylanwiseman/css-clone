import React from "react";
import styled from "styled-components";

const PortfolioTitle = styled.h2`
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

const background = {
  backgroundColor: "lightgray",
};

const squares = [
  {
    id: 1,
    title: "Threads",
    subTitle: "Illustration",
    img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
  },
  {
    id: 2,
    title: "Explore",
    subTitle: "Graphic Design",
    img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
  },
  {
    id: 3,
    title: "Finish",
    subTitle: "Identity",
    img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
  },
];

const squares2 = [
  {
    id: 4,
    title: "Lines",
    subTitle: "Branding",
    img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg",
  },
  {
    id: 5,
    title: "Southwest",
    subTitle: "Web Design",
    img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg",
  },
  {
    id: 6,
    title: "Window",
    subTitle: "Photography",
    img: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg",
  },
];

const row = {
  display: "flex",
  width: "70%",
  margin: "2em auto",
  flexWrap: "wrap",
};

const column = {
  display: "block",
  flex: "1",
  margin: ".5em",
  textAlign: "center",
};

const image = {
  maxWidth: "100%",
};

const titleBack = {
  margin: "0",
  backgroundColor: "white",
};

let array = squares.map((square) => {
  return (
    <div key={square.id} style={column}>
      <div style={titleBack}>
        <img style={image} src={square.img} alt={square.title} />
        <h4>{square.title}</h4>
        <h5>{square.subTitle}</h5>
      </div>
    </div>
  );
});
let array2 = squares2.map((square) => {
  return (
    <div key={square.id} style={column}>
      <div style={titleBack}>
        <img style={image} src={square.img} alt={square.title} />
        <h4>{square.title}</h4>
        <h5>{square.subTitle}</h5>
      </div>
    </div>
  );
});

export default function Portfolio() {
  return (
    <div style={background}>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <h5 style={h5Style}>Lorem ipsum dolor sit amet consectetur.</h5>
      <div style={row}>{array}</div>
      <div style={row}>{array2}</div>
    </div>
  );
}
