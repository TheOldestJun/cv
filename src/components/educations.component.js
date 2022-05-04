import React, { Component } from "react";

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className='card teal lighten-3 z-depth-0'>
          <div className='card-content'>
            <h6 className='black-text text-darken-4'>
              <i className='fas fa-graduation-cap'></i>
              <strong className='ml'>EDUCATION</strong>
            </h6>
            <hr />
            <div className='row mt'>
              <div className='col s12'>
                <blockquote>
                  <h6 className='black-text text-darken-4'>
                    <strong>Bachelor in software engineering</strong>
                    <span>2002-2008</span>
                  </h6>
                  <p className='pt black-text text-darken-3'>
                    National Mining University of Ukraine
                  </p>
                </blockquote>
              </div>
              <div className='col s12'>
                <blockquote>
                  <h6 className='black-text text-darken-4'>
                    <strong>Master in software engineering</strong>
                    <span>2008-2010</span>
                  </h6>
                  <p className='pt black-text text-darken-3'>
                    National Mining University of Ukraine
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
