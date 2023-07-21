import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";
import { fetchExperience } from "@/utils/fetchExperience";

const WorkExperience = () => {
  const [experience, setExperience] = useState<Experience[]>([]);
  useEffect(() => {
    const getExperience = async () => {
      const experience = await fetchExperience();
      setExperience(experience);
    };
    getExperience();
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center px-10 "
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Experience
      </h3>
      <div className="w-full px-10 flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin  scrollbar-thumb-[#35C6F4] scrollbar-track-gray-400/20  z-30  ">
        {experience.map((exp) => (
          <ExperienceCard key={exp._id} experience={exp} />
        ))}
        {/* <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard /> */}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
