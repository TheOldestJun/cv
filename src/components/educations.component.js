import React, { Component } from "react";

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card brown lighten-3 z-depth-0">
          <div className="card-content">
            <h6 className="brown-text text-darken-4">
              <strong>
                <i className="fas fa-graduation-cap"></i>
                EDUCATION
              </strong>
            </h6>
            <hr />
            <div  className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="brown-text text-darken-4">
                    <strong>Bachelor in software ingeneering</strong>
                    <span>2002-2008</span>
                  </h6>
                  <p className="pt brown-text text-darken-4">
                    National Mining Univercity of Ukraine
                  </p>
                </blockquote>
              </div>
              <div className="col s12">
                <blockquote>
                  <h6 className="brown-text text-darken-4">
                    <strong>Master in software ingeneering</strong>
                    <span>2008-2010</span>
                  </h6>
                  <p className="pt brown-text text-darken-4">
                    National Mining Univercity of Ukraine
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
