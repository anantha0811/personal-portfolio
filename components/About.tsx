"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInVIew } from "@/lib/Hooks";

export default function About() {
  const { ref } = useSectionInVIew("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-bold">software developer</span> with a{" "}
        <span className="italic">code-whisperer's</span> intuition and a
        builder's passion. From Java's robust logic to the nimble dance of
        Javascript frameworks, I've traversed a tapestry of languages and tools,
        weaving them into solutions that hum with efficiency and elegance. But
        beyond the bits and bytes, I'm a creative soul who finds solace in the
        rhythm of poetry and the thrill of exploring uncharted paths. Whether
        scaling the peaks of technical challenges or getting lost in a good
        book, I'm driven by a relentless curiosity and a desire to leave my mark
        on the world, one line of code, one adventure, one poem at a time.
      </p>
      <p>
        So, if you're looking for a <span className="italic">developer</span>{" "}
        who can bridge the gap between{" "}
        <span className="underline">logic and lyricism</span>, a{" "}
        <span className="italic">collaborator</span> who thrives on challenges
        and celebrates discovery, then let's chat. I'm eager to hear your story
        and see how my skills can help turn your vision into reality.
      </p>
    </motion.section>
  );
}
