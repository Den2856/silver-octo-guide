import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-3  md:flex-row gap-10 px-10">
        <ProjectCard
          src="/projects/1.png"
          link="https://den2856.github.io/legendary-palm-tree/jadoo/public/index.html"
          title="Jadoo: Travel with Ease."
          description="Explore the world effortlessly with Jadoo – your ultimate travel companion for seamless bookings and unforgettable trips."
        />
        <ProjectCard
          src="/projects/2.png"
          link="https://den2856.github.io/cuddly-potato/public/index.html"
          title="Grow Trees, Change Earth"
          description="Join GrowTree's mission to plant trees and help the environment, making a lasting impact on our planet's future."
        />
        <ProjectCard
          src="/projects/3.png"
          link="https://den2856.github.io/verbose-train/public/index.html"
          title="Freight Transport Services"
          description="Reliable freight transport across Russia, Europe, and America with full service including packaging, insurance, and timely delivery."
        />
        
        <ProjectCard
          src="/projects/4.png"
          link="https://den2856.github.io/fuzzy-fishstick/public/index.html"
          title="Aperture Studios Photography"
          description="Capturing breathtaking moments with expert photography and filmmaking services. Discover stunning visuals and creative storytelling."
        />
        <ProjectCard
          src="/projects/5.png"
          link="https://den2856.github.io/turbo-waffle/public/index.html"
          title="Eco Tours in Armenia"
          description="Explore Armenia’s breathtaking landscapes through mountain routes, national parks, and protected areas. Experience nature like never before."
        />
        <ProjectCard
          src="/projects/6.png"
          link="https://den2856.github.io/legendary-lamp/public/index.html"
          title="Wave Surf School"
          description="Learn to surf in the Canary Islands with expert instructors, perfect waves, and unforgettable experiences. Join us for your next adventure!"
        />

        <ProjectCard
          src="/projects/7.png"
          link="https://den2856.github.io/ideal-meme/public/index.html"
          title="Good Food, Good Mood"
          description="Enjoy global cuisine made from fresh, seasonal ingredients at our neighborhood restaurant, creating a delightful dining experience every time."
        />
        <ProjectCard
          src="/projects/8.png"
          link="https://den2856.github.io/improved-sniffle/public/index.html"
          title="Yota Mobile Plans"
          description="Get unlimited social media and 100GB of internet for only 299 ₽ per month. Stay connected with Yota’s affordable mobile services."
        />
        <ProjectCard
          src="/projects/9.png"
          link="https://den2856.github.io/ideal-spoon/public/index.html"
          title="Reliable & Quality Services"
          description="With over 10 years of experience, we provide high-quality standards and on-time delivery, ensuring your project’s success."
        />

        <ProjectCard
          src="/projects/10.png"
          link="https://den2856.github.io/bug-free-adventure/public/index.html"
          title="Modern Architecture Designs"
          description="Explore innovative and stunning architectural designs that blend modern aesthetics with functionality, creating spaces for the future."
        />
        <ProjectCard
          src="/projects/11.png"
          link="https://den2856.github.io/shiny-memory/public/templates/blog/index.html"
          title="Loki - Watch Online"
          description="Watch the thrilling Marvel series Loki featuring Tom Hiddleston. Follow the god of mischief on his time-traveling adventures after Avengers: Endgame."
        />

        
      </div>
    </div>
  );
};

export default Projects;