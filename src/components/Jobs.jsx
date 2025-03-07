import React from "react";
import { jobPositions } from "../data";

export default function Jobs() {
  return (
    <section className="mt-25">
      <section className="flex flex-col items-center justify-center">
        <p className="rounded-full bg-[#fff1f1] px-3 py-2 font-semibold text-[#fc3737] uppercase">
          careers
        </p>
        <h2 className="mx-auto my-6 max-w-[25ch] text-center text-3xl leading-tight font-extrabold break-words whitespace-normal text-gray-900 md:max-w-[45ch] md:text-[2.7rem]">
          Open Job Position
        </h2>

        <p className="mx-auto max-w-[30ch] text-center font-semibold text-gray-800 md:max-w-[140ch]">
          We not only follow current platform development trends but also
          pioneer new ones, such as UI design with HTML/CSS and DirectX support.
          Collaborating with top software vendors like Microsoft and
          Embarcadero, we ensure our components integrate the latest
          technologies as they become available.
        </p>

        <p className="mx-auto mt-10 max-w-[30ch] text-center font-semibold text-gray-800 md:max-w-[120ch]">
          Our component architecture prioritizes consistency, integrity, and
          extensibility across all platforms. Our products meet modern
          application standards, including high-DPI multi-monitor support,
          adaptive touch-friendly UIs, accessibility features, and localization
          with right-to-left language support.
        </p>
      </section>
      <section className="mx-10 mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobPositions.map((job, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-3xl bg-white p-6 shadow-lg transition-transform hover:scale-105"
          >
            {/* Job Image */}
            <img
              src={job.imgSrc}
              alt={`${job.position} illustration`}
              className="w-full max-w-[320px] rounded-2xl"
            />

            {/* Job Info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                {job.position}
              </h3>
              <p className="mt-2 text-gray-800">
                Help our customers integrate our products into their
                applications.
              </p>
              <p className="mt-3 text-lg font-medium text-gray-900">
                <strong>Salary:</strong> <span>{job.salary}</span>
              </p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
