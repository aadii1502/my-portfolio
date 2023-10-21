import React from "react";
import first from '../assets/p-1.png'
import second from '../assets/p-2.png'
import third from '../assets/p-3.png'
import fourth from '../assets/p-4.png'
import fifth from '../assets/p-5.png'
import sixth from "../assets/p-6.jpg";

const Portfolio = () => {
  const port = [
    {
      id: 1,
      src: first,
    },
    {
      id: 2,
      src: second,
    },
    {
      id: 3,
      src: third,
    },
    {
      id: 4,
      src: fourth,
    },
    {
      id: 5,
      src: fifth,
    },
    {
      id: 6,
      src: sixth,
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-black to-blue-900 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 sm:px-0">
          {port.map(({ id, src }) => (
            <div key={id} className="shadow-md bg-gray-900 shadow-gray-600 rounded-xl">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-[50%] uppercase px-6 py-3 m-5 duration-600 hover:scale-110">
                  Demo
                </button>
                {/* <button className="w-[50%] px-6 py-3 m-5 duration-600 hover:scale-110">
                  Github
                </button> */}
                <button className="w-[50%] uppercase px-6 py-3 m-5 duration-600 hover:scale-110">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
