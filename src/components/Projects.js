import React from "react";
// import arrayDestruct from "../assets/projects/arrayDestruct.jpg";
// import installNode from "../assets/projects/installNode.jpg";
// import navbar from "../assets/projects/navbar.jpg";
// import reactParallax from "../assets/projects/reactParallax.jpg";
// import reactSmooth from "../assets/projects/reactSmooth.jpg";
// import reactWeather from "../assets/projects/reactWeather.jpg";
import unsplash from "../assets/projects/projects/unsplsh_img.png";
import getactyv from "../assets/projects/projects/getactyv.png";
import physio from "../assets/projects/projects/physio.png";
import gogolend from "../assets/projects/projects/gogolend.png";
import incash from "../assets/projects/projects/incash.png";
import incashbo from "../assets/projects/projects/incashbo.png";
// import { useNavigate } from "react-router-dom";

const Projects = () => {
  // const navigate = useNavigate();
  const portfolios = [
    {
      id: 1,
      src: unsplash,
      link: "https://vikpthk02.github.io/UnsplashClone/",
      code: "https://github.com/vikpthk02/UnsplashClone",
    },
    {
      id: 2,
      src: getactyv,
      link: "https://getactyv.com/",
      code: "",
    },
    {
      id: 3,
      src: physio,
      link: "https://web.getactyvphysio.com/",
      code: "",
    },
    {
      id: 1,
      src: gogolend,
      link: "https://www.gogolend.co/en-us",
      code: "",
    },
    {
      id: 2,
      src: incashbo,
      link: "https://admin-incash.stage456.xyz/en-us/",
      code: "",
    },
    {
      id: 3,
      src: incash,
      link: "https://landing-incash.stage456.xyz/en-us",
      code: "",
    },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => {
                    // navigate(link);
                    // window.open(link, "_blank")
                  }}
                >
                  Demo
                </button> */}
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;