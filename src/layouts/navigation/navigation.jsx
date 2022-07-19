import React from "react";
import { map } from "rxjs";
import logo from "../../assets/images/7bitcoder-logo.svg";
import PositionService from "../../services/position.service";
import "./navigation.scss";
import ScrollProgress from "../scrollProgress/scrollProgress";

export default class Navigation extends React.Component {
  state = {
    shrink: false,
    elements: [
      { name: "Natous", active: false },
      { name: "Natous2", active: false },
      { name: "Natous3", active: false },
      { name: "Natous4", active: false },
      { name: "Natous5", active: false },
    ],
  };

  constructor(props) {
    super(props);
    this.subscribe();
  }

  subscribe() {
    PositionService.positionPercnet$
      .pipe(map((pos) => pos < 0.05))
      .subscribe((isOnTop) => this.changeNavigationSize(!isOnTop));
  }

  changeNavigationSize(shrink) {
    this.setState({ shrink });
  }

  navigate(element) {
    this.selectNavigationElement(element);
  }

  selectNavigationElement(element) {
    this.setState(({ elements: oldElements }) => {
      const newElements = [...oldElements].map((e) => ({
        ...e,
        active: false,
      }));
      const selected = newElements.find((e) => e.name === element.name);
      selected.active = true;
      return { elements: newElements };
    });
  }

  render() {
    return (
      <div className={`navigation ${this.state.shrink ? "shrink" : ""}`}>
        <input
          id="navi-toggle"
          type="checkbox"
          className="navigation__checkbox"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <img src={logo} className="navigation__logo" alt="logo" />
        <nav className="navigation__nav">
          <ul className="navigation__list">
            {this.state.elements.map((e) => (
              <li key={e.name} className="navigation__item">
                <span
                  className={`navigation__link ${e.active ? "active" : ""}`}
                  onClick={() => this.navigate(e)}
                >
                  {e.name}
                </span>
              </li>
            ))}
          </ul>
        </nav>
        <ScrollProgress className="scroll-progress" />
      </div>
    );
  }
}
