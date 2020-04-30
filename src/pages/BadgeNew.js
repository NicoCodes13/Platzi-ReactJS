import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import NavBar from "../components/Navbar.js";
import Badge from "../components/Badge.js";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Nicolas"
                lastName="Castañeda"
                twitter="Nicocast13"
                jobTitlte="GameDeveloper"
                avatarURL="https://cdn0.iconfinder.com/data/icons/professional-avatar-5/48/manager_male_avatar_men_character_professions-512.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
