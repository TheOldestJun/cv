import React, { Component } from "react";
import me from '../img/me.jpg'

export default class Profile extends Component {
  render() {
    return(
    <div>
      <div className="avatarimg">
        <img className="circle responsive-img" src={me} alt="Stanislav Pukha" />
      </div>
    </div>
    )
  }
}
