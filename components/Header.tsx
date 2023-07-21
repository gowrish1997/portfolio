import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 p-5 flex flex-row items-start justify-between max-w-7xl  mx-auto z-20 xl:items-center ">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        {socials.map((social,index) => {
          return (
            <SocialIcon
            key={index}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          );
        })}
        {/* <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/jaketrent"
          fgColor="gray"
          bgColor="transparent"
        /> */}
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 justify-center cursor-pointer "
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          className="cursor-pointer "
          url="https://twitter.com/jaketrent"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <Link href="#contact">
          <button className="font-[900] uppercase hidden  md:inline-flex test-sm text-red-400 ">
            Get in Touch
          </button>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
