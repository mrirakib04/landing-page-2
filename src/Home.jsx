// eslint-disable-next-line no-unused-vars
import React from "react";
import BannnerImg from "./assets/img/Hero-bg.png";
import BannnerHero from "./assets/img/Group.png";
import groupImg1 from "./assets/img/Layer_1.png";
import groupImg2 from "./assets/img/Group 3.png";
import groupImg3 from "./assets/img/Group 4.png";
import SectionTitle from "./components/SectionTitle";

const Home = () => {
  return (
    <div className="flex flex-col items-center max-w-[1480px] mx-auto px-2">
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
      {/* why web development section */}
      <div className="px-2 mt-10 w-full">
        <div className="container mx-auto rounded-lg max-w-6xl bg-[#FDCCC5]/30 p-5 sm:py-10 flex flex-col items-center gap-5">
          <div className="mb-5 text-center">
            <h3 className="md:text-4xl sm:text-3xl text-xl font-bold text-center">
              Why Web Development??
            </h3>
            <p className="sm:text-lg text-base mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              quaerat dicta delectus, consequatur assumenda quos.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col items-center sm:flex-nowrap flex-wrap gap-5 p-5 rounded-lg bg-gradient-to-b sm:bg-gradient-to-r from-white via-white to-[#FDCCC5]/5">
            <div className="sm:w-[70%]">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                I will do Coding and Change The World
              </h4>
              <p className="md:text-lg text-sm mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                excepturi dolor suscipit quae tenetur omnis.
              </p>
              <button className="py-1 md:text-lg text-sm px-4 border-2 rounded-md border-black/70">
                Learn More
              </button>
            </div>
            <div className="sm:w-[30%]">
              <img src={groupImg1} alt="" className="sm:w-full max-w-40" />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center sm:flex-nowrap flex-wrap gap-5 p-5 rounded-lg bg-gradient-to-b sm:bg-gradient-to-r from-[#FDCCC5]/5 via-white to-white">
            <div className="sm:w-[30%]">
              <img src={groupImg2} alt="" className="sm:w-full max-w-40" />
            </div>
            <div className="sm:w-[70%]">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                I will help People by creating Modern Web System
              </h4>
              <p className="md:text-lg text-sm mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                excepturi dolor suscipit quae tenetur omnis.
              </p>
              <button className="py-1 md:text-lg text-sm px-4 border-2 rounded-md border-black/70">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-center sm:flex-nowrap flex-wrap gap-5 p-5 rounded-lg bg-gradient-to-b sm:bg-gradient-to-r from-white via-white to-[#FDCCC5]/5">
            <div className="sm:w-[70%]">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                I will do Coding as My Profession
              </h4>
              <p className="md:text-lg text-sm mb-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                excepturi dolor suscipit quae tenetur omnis.
              </p>
              <button className="py-1 md:text-lg text-sm px-4 border-2 rounded-md border-black/70">
                Learn More
              </button>
            </div>
            <div className="sm:w-[30%]">
              <img src={groupImg3} alt="" className="sm:w-full max-w-40" />
            </div>
          </div>
        </div>
      </div>
      {/* my inspiration section */}
      <div className="flex flex-col items-center gap-5 sm:mt-10 mt-5">
        <SectionTitle
          title="My Inspiration"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, obcaecati! Quisquam placeat totam debitis veniam voluptas non, corporis porro accusamus."
        ></SectionTitle>
        <iframe
          src="https://www.youtube.com/embed/DGHn2uOAVCE?si=VvQQl0J0TQDuFsKT"
          className="max-w-5xl w-full border-2 rounded-lg p-2"
          height={400}
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
