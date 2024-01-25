"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInVIew } from "@/lib/Hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { ref } = useSectionInVIew("Home", 0.4);
  const { setActiveSection, setTimeLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://i.ibb.co/r01Mcpq/profile.jpg"
              alt="Profile picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-28 w-28 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I am Anantha Krishnan B.</span> I'm a{" "}
        <span className="font-bold">Software developer</span> with a knack of
        turning{" "}
        <span className=" italic">
          ideas into pixels & logic into solutions.
        </span>{" "}
        My passion?{" "}
        <span className="underline">
          Building beautiful, functional apps and software.
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105
           hover:scale-[1.05] hover:bg-gray-950 active:scale-[1.02] transition shadow-xl"
          onClick={() => {
            setActiveSection("Contact");
            setTimeLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105
           hover:scale-[1.05]  active:scale-[1.02] transition cursor-pointer border-black/10  shadow-xl dark:bg-white/10"
          href="/Resume.pdf"
          download
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full shadow-xl cursor-pointer focus:scale-110
           hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/anantha-krishnan0811/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.20rem] rounded-full shadow-xl cursor-pointer focus:scale-110
          hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition dark:bg-white/10 dark:text-white/60"
          href="https://github.com/anantha0811"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
