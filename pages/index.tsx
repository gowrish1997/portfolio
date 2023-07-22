import About from "@/components/About";
import Contactme from "@/components/Contactme";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { PageInfo, Social } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchSocials } from "@/utils/fetchSocials";
import { ArrowUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

// type Props = {
//   skills: Skill[];
//   projects: Project[];
//   socials: Social[];
//   experience: Experience[];

//   pageInfo: PageInfo;
// };

export default function Home() {
  const [socials, setSocials] = useState<Social[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>();
  useEffect(() => {
    const getSocials = async () => {
      const socials = await fetchSocials();
      const pageInfo = await fetchPageInfo();
      console.log(socials);
      console.log(pageInfo);
      setSocials(socials);
      setPageInfo(pageInfo);
    };
    getSocials();
  }, []);

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
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contactme />
      </section>
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

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo = await fetchPageInfo();
//   const experience = await fetchExperience();
//   const skills = await ();

//   const socials = await fetchSocials();
//   const projects = await fetchProjects();

//   return { props: { pageInfo, experience, skills, socials, projects } };
// };
