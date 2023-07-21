import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex  flex-col text-left md:flex-row justify-evenly items-center mx-auto z-0 "
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory overflow-y-hidden z-20 scrollbar-thumb-[#35C6F4] scrollbar-track-gray-400/20 scrollbar-thin  ">
        {projects.map((data, index) => {
          return (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen  ">
              <a href={data.linkToBuild} target="_blank">
                <motion.img
                  initial={{ y: -300, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  src={urlFor(data.image).url()}
                  className="w-[250px] h-[250px] object-contain"
                />
              </a>

              <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
                <h4 className="text-4xl font-semibold text-center ">
                  <span className="underline decoration-[#F7ABOA]/50    ">
                    Case study {index + 1} of {projects.length}:
                  </span>{" "}
                  <a href={data.linkToBuild} target="_blank">
                    {data.title}
                  </a>{" "}
                </h4>
                <div className="flex item-center space-x-2 justify-center ">
                  {data.technologies?.map((tech) => (
                    <img
                      key={tech._id}
                      src={urlFor(tech.image).url()}
                      className="w-10 h-10"
                      alt="skill"
                    />
                  ))}
                </div>
                <p className="text-lg text-center md:text-left ">
                  {data.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#35C6F4]/40 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
};

export default Projects;
