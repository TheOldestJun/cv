import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="card brown lighten-2 z-depth-0 mt">
          <div className="card-content contactInfo">
            <div className="brown-text text-darken-4 pt">
              <i className="fas fa-map-marked"></i>
              <a
                className="brown-text text-darken-4"
                href="https://maps.google.com/?ll=49.004466500363264, 33.63956422225579"
                target="blank"
              >
                Horishi Plavni, Poltava region, Ukraine
              </a>
              <br />
              <i className="fa fa-phone-square"></i>
              <a className="brown-text text-darken-4" href="tel:+380675303897">
                +38(067)530-38-97
              </a>
              <br />
              <i className="fas fa-envelope-square"></i>
              <a
                className="brown-text text-darken-4"
                href="mailto:s.v.pukha@gmail.com"
              >
                s.v.pukha@gmail.com
              </a>
              <br />
              <i className="fab fa-linkedin"></i>
              <a
                className="brown-text text-darken-4"
                href="https://www.linkedin.com/in/stanislavpukha/"
                target="blank"
              >
                www.linkedin.com/in/stanislavpukha/
              </a>
              <br />
              <i className="fab fa-github-square"></i>
              <a
                className="brown-text text-darken-4"
                href="https://github.com/TheOldestJun"
                target="blank"
              >
                github.com/TheOldestJun
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
