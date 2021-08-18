import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App.js";
import Services from "./Services.js";
import Portfolio from "./Portfolio.js";
import About from "./About.js";
import Team from "./Team.js";
import Contact from "./Contact.js";

export default function router() {
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="#services" component={Services} />
    <Route path="#portfolio" component={Portfolio} />
    <Route path="#about" component={About} />
    <Route path="#team" component={Team} />
    <Route path="#contact" component={Contact} />
  </Switch>;
}
