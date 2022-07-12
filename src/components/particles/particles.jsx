import React from "react";
import ParticlesLib from "react-tsparticles";
import { loadFull } from "tsparticles";
import { options } from "./particles-options";

export class Particles extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine) {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  }

  render() {
    return <ParticlesLib options={options} init={this.customInit} />;
  }
}
