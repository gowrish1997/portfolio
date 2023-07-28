import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = { experience: Experience };

const ExperienceCard = ({ experience }: Props) => {
  const cardRef = useRef<any>();
  const demoRef = useRef<any>();
  function setSheenPosition(xRatio: number, yRatio: number) {
    // This creates a "distance" up to 400px each direction to offset the sheen
    const xOffset = 1 - (xRatio - 0.5) * 800;
    const yOffset = 1 - (yRatio - 0.5) * 800;
    cardRef.current?.style.setProperty("--sheenX", `${xOffset}px`);
    cardRef.current?.style.setProperty("--sheenY", `${yOffset}px`);
  }

  useEffect(() => {
    (demoRef.current as any)?.addEventListener("mousemove", (e: any) => {
      const height = cardRef.current?.clientHeight;
      const width = cardRef.current?.clientWidth;

      const demoRefRec = (demoRef.current as any)?.getBoundingClientRect();

      const x = e.clientX - demoRefRec.left;
      const y = e.clientY - demoRefRec.top;

      const xAxisDegree = -(x - width! / 2) * 0.08;
      const yAxisDegree = -(y - height! / 2) * 0.08;

      (
        cardRef.current as any
      ).style.transform = `rotateY(${xAxisDegree}deg) rotateX(${yAxisDegree}deg)`;
      // Set the sheen position
      setSheenPosition(e.pageX / width!, e.pageY / width!);
    });
    demoRef.current.addEventListener("mouseleave", (e: any) => {
      cardRef.current.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
      cardRef.current.style.setProperty("--sheenX", `${0}px`);
      cardRef.current.style.setProperty("--sheenY", `${0}px`);
      // Set the sheen position
    });

    return () => {
      demoRef.current.removeEventListener("mousemove", (e: any) => {});
      demoRef.current.removeEventListener("mouseleave", (e: any) => {});
    };
  }, []);
  return (
    <div className="perspective-container" ref={demoRef}>
      <article
        className="experience-card flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] snap-center p-10 hover:opacity-70 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
        style={{
          backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)",
        }}
        ref={cardRef}
      >
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
    </div>
  );
};

export default ExperienceCard;
