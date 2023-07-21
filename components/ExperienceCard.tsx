import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
  console.log(experience);
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={urlFor(experience.companyImage).url()}
        alt="maz"
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center"
      />
      <div className="px-0 md:px-10  ">
        <h4 className="text-4xl font-ligh  ">{experience.jobTitle}</h4>
        <p className=" font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 ">
          {experience.technologies &&
            experience?.technologies?.map((tech) => (
              <img
                key={tech._id}
                src={urlFor(tech?.image).url()}
                className="rounded-full h-10 w-10 object-fit"
              />
            ))}
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          {" "}
          {new Date(experience.dateStarted).toDateString()} ...
          {experience.isCurrentlyWorkingHere
            ? "present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
