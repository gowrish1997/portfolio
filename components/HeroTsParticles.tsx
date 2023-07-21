import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const pngs = [
  "/react.png",
  "/next.js.png",
  "/typescript.png",
  "/javascript.png",
  "/html-5.png",
  "/css-3.png",
  "/sass.png",
  "/tailwind.png",
  "/bootstrap.png",
  "/reactNative.png",
  "/redux.png",
  "/git.png",
  "/sanity.png",
];

const HeroTsParticles = () => {
  const [random1, setRandom1] = useState(0);
  const [random2, setRandom2] = useState(6);

  useEffect(() => {
    const timer = setInterval(() => {
      setRandom1(Math.floor(Math.random() * pngs.length));
      setRandom2(Math.floor(Math.random() * pngs.length));
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id="aboutparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute w-screen h-screen "
      options={{
        fullScreen: { enable: false },
        name: "Among Us",
        particles: {
          // groups: {
          //   z5000: {
          //     number: {
          //       value: 70,
          //     },
          //     zIndex: {
          //       value: 50,
          //     },
          //   },
          //   z7500: {
          //     number: {
          //       value: 30,
          //     },
          //     zIndex: {
          //       value: 75,
          //     },
          //   },
          //   z2500: {
          //     number: {
          //       value: 50,
          //     },
          //     zIndex: {
          //       value: 25,
          //     },
          //   },
          //   z1000: {
          //     number: {
          //       value: 40,
          //     },
          //     zIndex: {
          //       value: 10,
          //     },
          //   },
          // },
          number: {
            value: 40,
          },
          color: {
            value: "#fff",
            animation: {
              enable: false,
              speed: 20,
              sync: true,
            },
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
          },
          size: {
            value: 3,
          },
          move: {
            angle: {
              value: 10,
              offset: 0,
            },
            enable: true,
            speed: 5,
            direction: "right",
          },
          zIndex: {
            value: 5,
            opacityRate: 0.5,
          },
        },
        background: {
          color: "#000000",
          repeat: "no-repeat",
        },
        emitters: [
          {
            position: {
              y: 55,
              x: -5,
            },
            rate: {
              delay: 12,
              quantity: 1,
            },
            size: {
              width: 0,
              height: 0,
            },
            particles: {
              shape: {
                type: "images",
                options: {
                  images: {
                    src: pngs[random1],
                    width: 500,
                    height: 634,
                  },
                },
              },
              size: {
                value: 40,
              },
              move: {
                speed: 5,
                outModes: {
                  default: "none",
                  right: "destroy",
                },
                straight: true,
              },
              zIndex: {
                value: 0,
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: true,
                },
              },
            },
          },
          {
            position: {
              y: 10,
              x: -5,
            },
            rate: {
              delay: 12,
              quantity: 1,
            },
            size: {
              width: 0,
              height: 0,
            },
            particles: {
              shape: {
                type: "images",
                options: {
                  images: {
                    src: pngs[random2],
                    width: 500,
                    height: 634,
                  },
                },
              },
              size: {
                value: 40,
              },
              move: {
                speed: 5,
                outModes: {
                  default: "none",
                  right: "destroy",
                },
                straight: false,
              },
              zIndex: {
                value: 0,
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: true,
                },
              },
            },
          },
        ],
      }}
    />
  );
};
export default HeroTsParticles;
