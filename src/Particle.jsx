import React from 'react';
import Particles from 'react-tsparticles';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 2,
      random: true,
    },
    opacity: {
      value: 1,
      random: true,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.2,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
    },
  },
};

const StarryNight = () => {
  return (
    <div>
      <Particles params={particlesOptions} />
    </div>
  );
};

export default StarryNight;