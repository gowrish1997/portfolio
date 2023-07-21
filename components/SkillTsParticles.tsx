import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Cirle from "./Cirle";

const SkillsTsParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

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
      id="SkillTsParticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="absolute w-screen h-screen "
      options={{
        fullScreen: { enable: false },
        name: "Images",
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          move: {
            enable: true,
            speed: 2,
          },
          number: {
            density: {
              enable: true,
            },
            limit: 0,
            value: 20,
          },
          opacity: {
            value: 1,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: "random",
            value: {
              min: 0,
              max: 360,
            },
          },
          shape: {
            options: {
              image: [
                {
                  name: "react",
                },
                {
                  name: "next.js",
                },
                {
                  name: "javascript",
                },
                {
                  name: "typescript",
                },
                {
                  name: "HTML",
                },
                {
                  name: "CSS",
                },
                {
                  name: "tailwindcss",
                },
                {
                  name: "reactnative",
                },
                {
                  name: "redux",
                },
                {
                  name: "git",
                },
                {
                  name: "sanity",
                },
              ],
            },
            type: "image",
          },
          size: {
            value: 16,
          },
        },
        background: {
          color: "transparent",
        },
        preload: [
          {
            src: "/react.png",
            name: "react",
            width: 32,
            height: 32,
          },
          {
            src: "/nextjs.png",
            name: "next.js",
            width: 32,
            height: 32,
          },
          {
            src: "/javascript.png",
            name: "javascript",
            width: 32,
            height: 32,
          },
          {
            src: "/typescript.png",
            name: "typescript",
            width: 32,
            height: 32,
          },
          {
            src: "/html-5.png",
            name: "HTML",
            width: 32,
            height: 32,
          },
          {
            src: "/css-3.png",
            name: "CSS",
            width: 32,
            height: 32,
          },
          {
            src: "/tailwind.png",
            name: "tailwindcss",
            width: 32,
            height: 32,
          },
          {
            src: "/reactNative.png",
            name: "reactnative",
            width: 32,
            height: 32,
          },
          {
            src: "/redux.png",
            name: "redux",
            width: 32,
            height: 32,
          },
          {
            src: "/git.png",
            name: "git",
            width: 32,
            height: 32,
          },
          {
            src: "/sanity.png",
            name: "sanity",
            width: 32,
            height: 32,
          },
        ],
      }}
    />
  );
};
export default SkillsTsParticles;
