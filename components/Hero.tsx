import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import HeroTsParticles from "./HeroTsParticles";

const menuItem = [
  { name: "About", link: "#about", direction: "left" },
  { name: "Experience", link: "#experience", direction: "left" },
  { name: "Skills", link: "#skills", direction: "right" },
  { name: "Projects", link: "#projects", direction: "right" },
];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 4,
    },
  },
};

type Props = { pageInfo: PageInfo };

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `"Hi, The name's ${pageInfo?.name}."`,
      "Guys-who-loves-tea.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-y-hidden ">
      <HeroTsParticles />

      <BackgroundCircle />
      <div className="w-32 h-32 relative ">
        <Image
          src={urlFor(pageInfo?.heroImage)?.url()}
          alt="profile"
          fill
          className="rounded-full mx-auto object-cover "
        />
      </div>
      <div className="z-20 flex flex-col items-center">
        <motion.div
          // initial="hidden"
          // animate="show"
          // variants={container}
          className="uppercase text-sm text-gray-500 tracking-[15px] flex flex-row justify-start items-center mx-auto "
        >
          {pageInfo?.role.split("").map((letter, index) => (
            <motion.h2
              key={index}
              initial={{ y: -200, rotate: 0 }}
              whileInView={{ y: 0, rotate: 360 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 * index }}
              className="uppercase text-sm text-gray-500 tracking-[15px] "
            >
              {letter}
            </motion.h2>
          ))}
        </motion.div>

        <h1 className="text-5xl lg:text-6xl font-semibold px-10 mt-[10px] ">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#35C6F4"></Cursor>
        </h1>
        <div className="pt-5 flex flex-row justify-start items-center gap-x-[10px] ">
          {menuItem.map((item, index) => (
            <motion.div
              key={index}
              initial={
                item.direction == "left"
                  ? { x: -200, opacity: 0 }
                  : { x: 200, opacity: 0 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2 }}
            >
              <Link href={item.link}>
                <button
                  className="herobutton "
                  style={{
                    backgroundImage:
                      "linear-gradient( 109.6deg,  rgba(15,2,2,1) 11.2%, rgba(36,163,190,1) 91.1% )",
                  }}
                >
                  {item.name}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
