import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm Vivek, a passionate frontend developer with three and half years of hands-on
          experience in crafting dynamic and engaging web experiences. My
          journey in the world of web development has been an exciting blend of
          creativity, innovation, and continuous learning. My expertise lies in
          harnessing the power of modern technologies to build seamless user
          interfaces. With a strong foundation in React.js, I've successfully
          translated intricate design concepts into fully functional web
          applications. My toolkit extends beyond React.js to encompass a range
          of tools and frameworks, including Tailwind CSS, Bootstrap, and
          Next.js. I'm adept at using these tools to create elegant,
          user-centric designs that prioritize both aesthetics and usability.
          Whether it's rapidly prototyping with Tailwind CSS, leveraging
          Bootstrap for its familiarity and speed, or building server-rendered
          applications with Next.js, I'm committed to choosing the right tools
          for the job to ensure optimal results.
        </p>

        <br />

        <p className="text-xl">
          Collaboration is at the heart of my approach. I have a proven track
          record of working closely with designers, backend developers, and
          stakeholders to transform ideas into reality. I'm excited to continue
          my journey of innovation, soaking in new experiences, and translating
          ideas into captivating digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
