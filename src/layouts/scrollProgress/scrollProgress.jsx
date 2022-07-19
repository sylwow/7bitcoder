import React from "react";
import PositionService from "../../services/position.service";
import "./scrollProgress.scss";

export default class ScrollProgress extends React.Component {
  state = {
    progress: 0,
  };

  constructor(props) {
    super(props);
    this.subscribe();
  }

  subscribe() {
    PositionService.positionPercnet$.subscribe(
      (percent) => (this.#progress = percent)
    );
  }

  set #progress(percent) {
    this.setState({ progress: percent });
  }

  render() {
    let inputStyle = {
      width: this.state.progress + "%",
    };
    return (
      <div className={`progress ${this.props.className}`}>
        <div style={inputStyle}></div>
      </div>
    );
  }
}
