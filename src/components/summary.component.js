import React, { Component } from "react";

export default class Summary extends Component {
  render() {
    return (
      <div>
        <div className='card teal lighten-3 z-depth-0'>
          <div className='card-content'>
            <h6 className='no-pad mt-bottom black-text text-darken-4'>
              <i class='fas fa-id-card-alt'></i>
              <strong className='ml'>ABOUT ME</strong>
            </h6>
            <hr />
            <p className='pt black-text text-darken-4'>
              Absorb new knowledge like a sponge. Have clear mathematical and
              analytical thinking. Always listen and <strong>hear</strong>{" "}
              mentors. Attentive to details. Easily solving conflict situations.
              Have some basic understanding of Kanban and SCRUM methodologies
              used in Agile teams.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
