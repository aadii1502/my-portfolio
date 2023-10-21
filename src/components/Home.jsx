import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from 'react-typed';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-blue-900"
    >
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          
          < h2 className=' text-2xl sm:text-5xl font-bold bg-gradient-to-r from-blue-700 via-purple-500 to-white bg-clip-text text-transparent'>Hello Folks , I design fun-filled and playful <Typed strings={['Instances!', 'Realities!','Experiences!']} typeSpeed={120} backSpeed={140} loop/>
            {/* <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">I'm a Web Developer</p> */}
          </h2>
          <p className="text-gray-400 text-lg py-4 max-w-lg">
            I have 1 year of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and FireBase.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-bold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r  from-blue-700 to-purple-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          {/* <img
            src="https://images.unsplash.com/photo-1692871480784-4fd78f25459f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
            alt="my profile"
            className="rounded-2xl absolute mx-10 w-2/3 md:w-full"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
