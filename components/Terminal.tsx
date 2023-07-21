import React, { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";

interface IProps {
  close: () => void;
  code: (code: string) => void;
}

const Terminal = ({ close, code }: IProps) => {
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [text, count] = useTypewriter({
    words: [
      `
      <div>
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl ">
      about
    </h3>
      <motion.img
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src='/react.png'
            alt="about_img"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64  md:h-96 xl:w-[500px] xl:h-[600px] "
          />
          <div className="space-y-10 px-0 md:px-10">
            <div className="text-4xl font-semibold flex flex-row items-center">
              {about.map((letter, index) => {
                if (about[index].trim() === "") {
                  return <span className="mr-[5px] " />;
                } else {
                  return (
                    <motion.h4
                      key={index}
                      initial={{ y: -200, rotate: 0 }}
                      whileInView={{ y: 0, rotate: 360 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.1 * index, duration: 0.1 }}
                      className=" "
                    >
                      hi
                    </motion.h4>
                  );
                }
              })}
            </div>
    
            <p className="text-base">hi</p>
          </div> 
          </div>
        `,
    ],
    loop: 1,
    delaySpeed: 0,
    typeSpeed: 0,
    onType: () => {
      code(text);
    },
    onLoopDone: () => {
      setShowCloseButton(true);
    },
  });
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex bg-white z-50 bg-gradient-to-r from-[#09203f] to-[#537895] opacity-90  ">
      <div className="h-[500px] w-[60%] bg-black rounded-[4px] m-auto overflow-y-auto p-[10px] ">
        <div>{text}</div>
        <br />
        {showCloseButton && (
          <button
            className="text-[14px] px-[10px] py-[5px] bg-gradient-to-r from-[#09203f] to-[#537895] rounded-[8px] mt-[20px] "
            onClick={close}
          >
            Enter
          </button>
        )}
      </div>
    </div>
  );
};

export default Terminal;
