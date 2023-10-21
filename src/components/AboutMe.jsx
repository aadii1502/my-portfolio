import React from "react";

const AboutMe = () => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-blue-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am an accomplished web developer with a proven track record of creating outstanding digital experiences. With a keen eye for design and a deep understanding of web technologies, I consistently deliver websites that not only look visually striking but also function seamlessly. My proficiency in front-end technologies like HTML, CSS, and JavaScript, coupled with my expertise in popular frameworks and libraries, allows me to build user-friendly and responsive web applications. 
        </p>

        <br />

        <p className="text-xl">
        With a commitment to optimizing website performance and adhering to accessibility standards, I consistently produce websites that cater to a diverse audience and load quickly, providing visitors with a memorable and user-friendly experience. 
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
