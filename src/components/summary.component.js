import React, { Component } from "react";

export default class Summary extends Component {
  render() {
    return (
      <div>
        <div className="card brown lighten-3 z-depth-0">
          <div className="card-content">
            <h6 className="no-pad mt-bottom brown-text text-darken-4">
              <i class="fas fa-id-card-alt"></i>
              <strong className="ml">ABOUT ME</strong>
            </h6>
            <hr />
            <p className="pt brown-text text-darken-4">
              Absorb new knowledge like a sponge. Have clear mathematical and
              analytical thinking. Always listen and <strong>hear</strong>{" "}
              mentors. Attentive to details. Easily solving conflict situations.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
