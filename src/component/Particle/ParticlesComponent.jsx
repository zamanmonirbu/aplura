import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './ParticlesComponent.css'; // Custom CSS

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

 const options = useMemo(
  () => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
        repulse: {
          distance: 300,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#10375C", "#ff7f50", "#6a0dad"],
      },
      links: {
        color: "#ff6347",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 2,
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: {
          default: "out",
        },
        speed: 2, // Slower speed to make it smoother
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 100, // Keep a high number for continuous effect
      },
      opacity: {
        value: 0.7,
      },
      shape: {
        type: "triangle",
      },
      size: {
        value: { min: 3, max: 8 },
      },
      life: {
        duration: {
          sync: false,
          value: 5, // Duration of particles (in seconds)
        },
        count: 1, // 1 new particle created when one dies
      },
    },
    detectRetina: true,
  }),
  []
);


  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
