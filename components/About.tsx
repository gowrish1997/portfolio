import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";
import Terminal from "./Terminal";

type Props = { pageInfo: PageInfo };
const about = "Here  is  a  little  background".split("");

const About = ({ pageInfo }: Props) => {
  const [showTerminal, setShowTerminal] = React.useState(false);
  const [code, setCode] = React.useState("");
  const handleTerminalHandler = () => {
    setShowTerminal(!showTerminal);
  };
  const setCodeHandler = (code: string) => {
    setCode(code);
  };
  console.log(code);
  return (
    <div className="z-50 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
      >
        <div dangerouslySetInnerHTML={{ __html: code }}></div>
        <script>{code}</script>
        <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl ">
          about
        </h3>

        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 1.2,y:{repeat:'infinity',duration:3} }}
          src={urlFor(pageInfo.profilePic).url()}
          alt="about_img"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-64  md:h-96 xl:w-[500px] xl:h-[500px] "
        />
        <div className="space-y-10 px-0 md:px-10">
          <div className="text-4xl font-semibold flex flex-row items-center">
            {about.map((letter, index) => {
              if (about[index].trim() === "") {
                return <span key={index} className="mr-[5px] " />;
              } else {
                return (
                  <motion.h4
                    key={index}
                    initial={{ y: -100, rotate: 0 }}
                    whileInView={{ y: 0, rotate: 360 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.05 * index, duration: 0.05 }}
                    className=" "
                  >
                    {letter}
                  </motion.h4>
                );
              }
            })}
          </div>

          <p className="text-base">{pageInfo.backgroundInformation}</p>
        </div>
        {/* {!showTerminal && (
          <button
            className="text-[30px] px-[20px] py-[10px] bg-gradient-to-r from-[#09203f] to-[#537895] rounded-[8px] bg-red-500 z-50"
            onClick={handleTerminalHandler}
          >
            click here
          </button>
        )} */}
      </motion.div>

      {showTerminal && (
        <Terminal close={handleTerminalHandler} code={setCodeHandler} />
      )}
    </div>
  );
};

export default About;
