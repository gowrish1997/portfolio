import { Skill } from "@/typings";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Eachkill from "./Skill";
import SkillsTsParticles from "./SkillTsParticles";

const Skills = ({ skills }: { skills: Skill[] }) => {
  const router = useRouter();

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
