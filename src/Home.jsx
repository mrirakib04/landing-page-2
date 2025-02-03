// eslint-disable-next-line no-unused-vars
import React from "react";
import BannnerImg from "./assets/img/Hero-bg.png";
import BannnerHero from "./assets/img/Group.png";

const Home = () => {
  return (
    <div className="flex flex-col max-w-[1480px] mx-auto px-2">
      {/* header nav */}
      <nav className="w-full container mx-auto mt-5">
        <ul className="w-full flex items-center justify-between">
          <li>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              MRI. Rakib
            </h2>
          </li>
          <li>
            <a
              href=""
              className="sm:text-lg text-base font-medium transition hover:bg-black hover:text-white py-2 px-2 sm:px-3 border-2 border-black rounded-md"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="w-full bg-cover bg-center sm:py-10 py-5 mt-5 flex flex-col items-center"
        style={{ background: `url(${BannnerImg})` }}
      >
        <img src={BannnerHero} className="max-h-40" alt="" />
        <h3 className="md:text-5xl sm:text-3xl text-xl font-bold text-center mt-5">
          &apos;In the near future, I hope to <br /> become a Developer.&apos;
        </h3>
        <p className="sm:text-lg text-base text-center mt-5 max-w-5xl mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          accusamus ducimus numquam. Explicabo molestias alias accusantium
          tempore illo, accusamus omnis neque illum cumque quos sapiente!
        </p>
        <button className="text-lg font-medium text-white bg-black py-2 px-4 rounded-lg transition hover:bg-gray-700 mt-5 cursor-pointer">
          Contact With Me
        </button>
      </div>
    </div>
  );
};

export default Home;
