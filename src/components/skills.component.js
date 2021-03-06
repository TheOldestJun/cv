import React, { Component } from "react";
import goIt from "../img/goIT.png";
import ukrCfg from "../img/cyfrogram.jpg";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className='card teal lighten-1 z-depth-0'>
          <div className='card-content'>
            <h6 className='white-text'>
              <i class='fas fa-briefcase'></i>
              <strong className='ml'>PROFESSIONAL SKILLS</strong>
            </h6>
            <hr />
            <div className='row pt'>
              <div className='col m6 s12'>
                <p className='white-text text-lighten-2'>HTML - Junior</p>
                <div className='progress white'>
                  <div
                    className='determinate teal lighten-3'
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className='col m6 s12'>
                <p className='white-text text-lighten-2'>CSS - Junior</p>
                <div className='progress white'>
                  <div
                    className='determinate teal lighten-3'
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='row pt'>
              <div className='col m6 s12'>
                <p className='white-text text-lighten-2'>Vanilla JS - Middle</p>
                <div className='progress white'>
                  <div
                    className='determinate teal lighten-3'
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className='col m6 s12'>
                <p className='white-text text-lighten-2'>React.JS - Junior</p>
                <div className='progress white'>
                  <div
                    className='determinate teal lighten-3'
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='row pt'>
              <div className='col m6 s12'>
                <p className='white-text text-lighten-2'>Next.JS - Junior</p>
                <div className='progress white'>
                  <div
                    className='determinate teal lighten-3'
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div className='col m6 s12'>
                <p className='white-text text-lighten-2'>Node - Junior</p>
                <div className='progress white'>
                  <div
                    className='determinate teal lighten-3'
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className='row pt'>
              <div className='col m6 s12'>
                <p className='white-text text-lighten-2'>SQL - Strong Junior</p>
                <div className='progress white'>
                  <div
                    className='determinate teal lighten-3'
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
              <div className='col m6 s12'>
                <p className='white-text text-lighten-2'>
                  English - Intermediate
                </p>
                <div className='progress white'>
                  <div
                    className='determinate teal lighten-3'
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card teal lighten-1 z-depth-0'>
          <div className='card-content'>
            <h6 className='white-text'>
              <i class='fas fa-briefcase'></i>
              <strong className='ml'>SERTIFICATES</strong>
            </h6>
            <hr />
            <div className='row pt'>
              <div className='col m6 s12'>
                <a href={goIt} target='blank'>
                  <img
                    src={goIt}
                    alt='GoIt sertificate'
                    className='col s12 m12 l12'
                  />
                </a>
              </div>
              <div className='col m6 s12'>
                <a href={ukrCfg} target='blank'>
                  <img
                    src={ukrCfg}
                    alt='Cyfrogram certificate'
                    className='col s12 m12 l12'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
