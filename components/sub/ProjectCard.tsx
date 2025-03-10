"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";


interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border z-20 border-[#2A0E61]">
      
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      
        <div className="relative p-9">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noreferref noopener"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 bg-gradient-to-r from-purple-500 to-cyan-500 font-bold relative top-3 py-2 px-6 rounded-full transition cursor-pointer"
              >
                Visit
              </motion.button>
            </a>
        </div>
    </div>
  );
};

export default ProjectCard;