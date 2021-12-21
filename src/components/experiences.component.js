import React, { Component } from "react";

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card brown lighten-3 z-depth-0">
          <div className="card-content">
            <h6 className="brown-text text-darken-4">
              <i class="fas fa-code"></i>
              <strong className="ml">EXPERIENCE</strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="brown-text text-darken-4">
                    <strong>FULL STACK WEB DEVELOPER</strong>
                    <span>2020 - ...</span>
                  </h6>
                  <p className="pt brown-text text-darken-4">
                    Pet projects for education purposes only. Don't have any
                    commercial experience. Nowadays writing SRM system for
                    current job.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="brown-text text-darken-4">
                    <strong>SENIOR SUPPLY MANAGER</strong>
                    <span>2008 - ...</span>
                  </h6>
                  <p className="pt brown-text text-darken-4">
                    Carry out a full cycle of supplying an enterprise for 300
                    people. From applications to delivery of goods and
                    materials. Also coworking as an "anykey".
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
