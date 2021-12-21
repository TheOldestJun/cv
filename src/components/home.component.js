import React, { Component } from "react";
import About from "./about.component.js";
import Contact from "./contact.component";
import Educations from "./educations.component.js";
import Experiences from "./experiences.component.js";
import Profile from "./profile.component.js";
import Skills from "./skills.component.js";
import Summary from "./summary.component.js";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="row">
          <About />
        </div>
        <div className="row sameHeight hide-on-med-and-down">
          <div className="col s12 m12 l8 brown lighten-3 same-height_child">
            <Summary />
            <Educations />
            <Experiences />
          </div>
          <div className="col s12  m12 l4 brown lighten-1 same-height_child">
            <Profile />
            <Contact />
            <Skills />
          </div>
        </div>
        <div className="row sameHeight hide-on-large-only">
          <div className="col s12 m12 l4 brown lighten-1 sameHeight_child">
            <Profile />
            <Contact />
            <Skills />
          </div>
          <div className="col s12 m12 l8 brown lighten-3 sameHeight_child">
            <Summary />
            <Educations />
            <Experiences />
          </div>
        </div>
      </section>
    );
  }
}
