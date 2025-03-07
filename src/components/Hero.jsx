import React from "react";
import heroImage from "../assets/image-gallery-1.jpg";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-5 mt-20 flex flex-col items-center justify-center md:mt-30 md:flex-row"
    >
      <div className="flex flex-col items-center justify-center">
        {/* Heading Section */}
        <h1 className="my-6 text-center text-4xl leading-tight font-extrabold text-gray-900 capitalize md:text-5xl">
          Powering Innovation with Software & Support
        </h1>
        <p className="my-6 max-w-3xl text-center text-lg text-gray-700 md:text-xl">
          At DevSoft, we craft cutting-edge UI components and data visualization
          tools tailored for .NET, HTML/JavaScript, and VCL platforms. Our
          expert support services empower businesses to build and sustain robust
          applications—no matter their complexity. With security, reliability,
          and precision at our core, we’ve earned the trust of{" "}
          <span className="font-bold text-[#ea1f1f]">
            <CountUp end={100000} duration={3} separator="," />+ customers
            worldwide.
          </span>
        </p>
        <button className="my-6 w-36 cursor-pointer rounded-2xl border-2 border-[#ea1f1f] bg-[#ea1f1f] px-2 py-2 text-gray-100 transition-all duration-200 ease-in-out hover:scale-110 hover:border-[#ff6767] hover:bg-[#ff6767] focus:ring-4 focus:ring-[#ff6767]/50 active:scale-95">
          Join Us
        </button>
      </div>
      <div className="m-4 px-1">
        {/* Image Section */}
        <img
          src={heroImage}
          alt="Image of devsoft team"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}
