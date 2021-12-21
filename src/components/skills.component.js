import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card brown lighten-1 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <i class="fas fa-briefcase"></i>
              <strong className="ml">PROFESSIONAL SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">HTML</p>
                <div className="progress white">
                  <div
                    className="determinate brown lighten-3"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">CSS</p>
                <div className="progress white">
                  <div
                    className="determinate brown lighten-3"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">Vanilla JS</p>
                <div className="progress white">
                  <div
                    className="determinate brown lighten-3"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">React JS</p>
                <div className="progress white">
                  <div
                    className="determinate brown lighten-3"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">Express JS</p>
                <div className="progress white">
                  <div
                    className="determinate brown lighten-3"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-2">MondoDB</p>
                <div className="progress white">
                  <div
                    className="determinate brown lighten-3"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
