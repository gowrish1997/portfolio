import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Eachkill from "./Skill";
import { Experience, Skill } from "@/typings";
import SkillsTsParticles from "./SkillTsParticles";
import { useRouter } from "next/router";
import { fetchSkills } from "@/utils/fetchSkills";

const Skills = () => {
  const router = useRouter();
  const [skills, setSkills] = useState<Skill[]>([]);
  useEffect(() => {
    const getSkills = async () => {
      const skills = await fetchSkills();
      setSkills(skills);
    };
    getSkills();
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <SkillsTsParticles />
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm ">
        hover for a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-4 gap-5 z-30 ">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Eachkill key={skill._id} directionLeft={true} skill={skill} />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Eachkill key={skill._id} directionLeft={false} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
