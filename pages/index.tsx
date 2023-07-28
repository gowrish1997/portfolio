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

type Props = {
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  experience: Experience[];

  pageInfo: PageInfo;
};

export default function Home({
  skills,
  projects,
  socials,
  experience,
  pageInfo,
}: Props) {
  return (
    <main
      className={` text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-50 scrollbar scrollbar-thumb-[#35C6F4] scrollbar-track-gray-400/20   `}
      style={{
        backgroundImage:
          "radial-gradient( circle 815px at 23.4% -21.8%,  rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2% )",
      }}
    >
      {/* background-image: ;
      linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% ) */}
      {/* <motion.div
        className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        /> */}
      <Header socials={socials} />
      {pageInfo && (
        <section id="hero" className="snap-start relative ">
          <Hero pageInfo={pageInfo!} />{" "}
        </section>
      )}
      {pageInfo && (
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo!} />
        </section>
      )}
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
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center ">
            <div className="mouse w-[30px] h-[50px]  rounded-[30px] flex justify-center">
              <div className="w-[8px] h-[8px] bg-[#08f6e6] scroll rounded-full "></div>
            </div>
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

  return { props: { pageInfo, experience, skills, socials, projects } };
};
