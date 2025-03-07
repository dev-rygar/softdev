import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const concernOptions = [
  { id: "job", title: "Job Offers / Careers" },
  { id: "client", title: "Client - Work With Us" },
];

export default function Footer() {
  return (
    <footer className="mt-25 flex flex-col">
      <div className="m-4 rounded-2xl bg-[#ea1f1f] p-6 md:flex md:flex-row md:justify-between">
        <section className="md:my-5 md:mr-15 md:ml-15 md:w-[40%] md:p-5">
          {/* Form Section */}
          <h2 className="text-center text-white">
            <span className="text-xl font-bold tracking-wide uppercase">
              De
              <span className="bg-linear-to-r from-[#fff1f1] to-[#ea1f1f] bg-clip-text text-transparent">
                v
              </span>
              soft
            </span>{" "}
            <span className="text-xs tracking-widest uppercase">
              Philippines
            </span>
          </h2>
          <form
            action=""
            className="flex w-full flex-col items-center justify-center"
          >
            <div className="w-full max-w-sm">
              <div className="mt-2 grid grid-cols-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6"
                />
                <EnvelopeIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-[#ea1f1f] sm:size-4"
                />
              </div>
              <fieldset className="my-4">
                <legend className="text-sm font-semibold text-white">
                  What's your concern?
                </legend>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-6">
                  {concernOptions.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        defaultChecked={option.id === "job"}
                        id={option.id}
                        name="concern-type"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                      />
                      <label
                        htmlFor={option.id}
                        className="ml-2 block text-sm font-medium text-gray-100"
                      >
                        {option.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <div className="w-full">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-100"
                >
                  Enter your concern
                </label>
                <div className="mt-1">
                  <textarea
                    id="comment"
                    name="comment"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
              </div>
              {/* Reversed Button */}
              <div className="mt-6 flex justify-center">
                <button className="w-36 rounded-2xl border-2 border-white bg-white px-2 py-2 font-bold text-[#ea1f1f] transition-all duration-200 ease-in-out hover:border-[#ea1f1f] hover:bg-[#ea1f1f] hover:text-white focus:ring-4 focus:ring-[#ea1f1f]/50 active:scale-95">
                  Join Us
                </button>
              </div>
            </div>
          </form>
        </section>
        <div className="flex flex-col justify-between p-6 text-white md:w-[50%]">
          <section className="mt-10">
            <h2 className="mb-5 text-2xl font-bold md:text-3xl">
              Seamless Solutions for Developers & Businesses
            </h2>
            <div className="mb-5">
              <h3 className="text-lg font-semibold md:text-xl">Location:</h3>
              <p className="text-sm font-light">
                Unit 801, Prestige tower, Ortigas Center, Pasig City, NCR,
                Philippines
              </p>
            </div>
            <div className="flex text-white">
              <h3 className="border-r-2 text-lg font-semibold md:text-xl">
                <a
                  href="https://facebook.com/DevSoftPhilippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2"
                >
                  Facebook
                </a>
              </h3>
              <h3 className="ml-2 text-lg font-semibold md:text-xl">
                <a
                  href="https://linkedin.com/company/devsoftph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  LinkedIn
                </a>
              </h3>
            </div>
          </section>
          <section>
            <div className="my-5 border-t-2">{/* horizontal line */}</div>
            <p className="mt-5 font-light">
              Copyright © 2025 Developer Soft and Technical Support Sea Inc.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}

// https://www.linkedin.com/company/devsoftph/
// https://www.facebook.com/DevSoftPhilippines

{
  /* <a
href="https://facebook.com/DevSoftPhilippines"
target="_blank"
rel="noopener noreferrer"
className="mr-2"
>
<FaFacebookF className="size-10 border-2 p-2 rounded-md" />
</a>
<a
href="https://linkedin.com/company/devsoftph/"
target="_blank"
rel="noopener noreferrer"
className=""
>
<FaLinkedinIn className="size-10 border-2 p-2 rounded-md" />
</a> */
}
