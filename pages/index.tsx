import About from "@/components/About";
import Contactme from "@/components/Contactme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { ArrowUpIcon } from "@heroicons/react/solid";
import { GetStaticProps } from "next";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

type Props = {
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  experience: Experience[];

  pageInfo: PageInfo;
};

export default function Home({
  pageInfo,
  experience,
  skills,
  socials,
  projects,
}: Props) {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <main
      className={`bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-50 scrollbar scrollbar-thumb-[#35C6F4] scrollbar-track-gray-400/20   `}
    >
      {/* <motion.div
        className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        /> */}
      <Header socials={socials} />
      <section id="hero" className="snap-start relative ">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experience={experience} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contactme />
      </section>
      =
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center ">
            {/* <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer "
              src="/profile.jpeg"
              alt="footer"
            ></img> */}
            <ArrowUpIcon className="text-[#35C6F4] h-7 w-7 animate-pulse " />
          </div>
        </footer>
      </Link>
    </main>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const experience = await fetchExperience();
  const skills = await fetchSkills();

  const socials = await fetchSocials();
  const projects = await fetchProjects();

  return {
    props: { pageInfo, experience, skills, socials, projects },
  };
};
