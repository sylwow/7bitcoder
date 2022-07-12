import React, { useState } from "react";
import logo from "../../assets/7bitcoder-logo.svg";
import PositionService from "../../services/position.service";
import "./navigation.scss";

export default class Navigation extends React.Component {
  state = {
    shrink: false,
  };

  constructor(props) {
    super(props);
    PositionService.leftHeader.subscribe((shrink) =>
      this.changeNavigationSize(shrink)
    );
  }

  changeNavigationSize(shrink) {
    this.setState({ shrink });
  }

  render() {
    return (
      <div className={`navigation ${this.state.shrink ? "shrink" : ""}`}>
        <input id="navi-toggle" type="checkbox" class="navigation__checkbox" />
        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>
        <img src={logo} class="navigation__logo" alt="logo" />
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <span class="navigation__link active"> Natous</span>
            </li>
            <li class="navigation__item">
              <span class="navigation__link"> Your benefits</span>
            </li>
            <li class="navigation__item">
              <span href="#" class="navigation__link">
                {" "}
                Popular tours
              </span>
            </li>
            <li class="navigation__item">
              <span href="#" class="navigation__link">
                {" "}
                Stories
              </span>
            </li>
            <li class="navigation__item">
              <span href="#" class="navigation__link">
                {" "}
                Book now
              </span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
