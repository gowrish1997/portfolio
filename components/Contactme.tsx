import React from "react";
import { motion } from "framer-motion";
import { useForm, Resolver, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapIcon, MailIcon } from "@heroicons/react/outline";
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

const Contactme = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    window.location.href = `mailto:kotarigowrish@gmail.com?subject=${data.subject}&body=Hi, My name is ${data.name}, ${data.message} (${data.email})`;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col md:flex-row text-center md:text-left max-w-7xl justify-evenly items-center mx-auto"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center ">
          I have got just what yoy need.
          <span className="underline decoration-[#35C6F4]/50    ">
            Let&apos;s talk
          </span>
        </h4>
        <div className="space-y-10  ">
          <div className="flex items-center space-x-5 justify-center ">
            <PhoneIcon className="text-[#35C6F4] h-7 w-7 animate-pulse " />
            <p className="2xl ">+91 8310623228</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <MailIcon className="text-[#35C6F4] h-7 w-7 animate-pulse " />
            <p className="2xl ">kotarigowrish@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center ">
            <MapIcon className="text-[#35C6F4] h-7 w-7 animate-pulse " />
            <p className="2xl ">+91 8310623228</p>
          </div>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto "
          >
            <div className="flex space-x-2 ">
              <input
                {...register("name")}
                className="contactInput"
                type="text"
                placeholder="Name"
              />
              <input
                {...register("email")}
                className="contactInput"
                type="text"
                placeholder="Email"
              />
            </div>
            <input
              {...register("subject")}
              className="contactInput"
              type="text"
              placeholder="Subject"
            />
            <textarea
              {...register("message")}
              className="contactInput"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-[#35C6F4] py-5 px-10 rounded-md text-black font-bold text-lg "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contactme;
