import React from "react";

import "./styles/Badge.css";
import confLogo from "../images//badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://cdn0.iconfinder.com/data/icons/professional-avatar-5/48/manager_male_avatar_men_character_professions-512.png"
            alt="Avatar"
          />
          <h1>
            Nicolas <br /> Castaneda
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Game Daveloper</h3>
          <div>@Nicocast</div>
        </div>

        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
