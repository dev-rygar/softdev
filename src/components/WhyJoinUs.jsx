import { companyPrinciples } from "../data";

export default function WhyJoinUs() {
  return (
    <section className="mt-10 flex flex-col p-2">
      <section className="flex flex-col items-center justify-center">
        <p className="rounded-full bg-[#fff1f1] px-3 py-2 font-bold text-[#fc3737] capitalize">
          Why join us
        </p>
        <h2 className="mx-auto my-6 max-w-[25ch] text-center text-3xl leading-tight font-extrabold break-words whitespace-normal text-gray-900 md:max-w-[45ch] md:text-[2.7rem]">
          Supporting You to Innovate and Grow
        </h2>

        <p className="mx-auto max-w-[60ch] text-center font-semibold text-gray-800 md:max-w-[70ch]">
          Our core management principles prioritize the well-being and comfort
          of our employees because we believe that only happy people can develop
          great products and provide exceptional service.
        </p>
      </section>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {companyPrinciples.map((principle) => (
          <div
            key={principle.title}
            className="bg-whiterounded-lg flex flex-col items-center p-4"
          >
            <img
              src={principle.imgSrc}
              alt={principle.title}
              className="h-[237px] w-[400px] rounded-3xl object-contain md:h-[300px] md:w-[450px] md:rounded-3xl"
            />
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              {principle.title}
            </h3>
            <p className="mt-2 max-w-[50ch] text-center font-medium break-words text-gray-800">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
      {/* 
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p>
          DevSoft is a closely-knit international community of talented
          programmers, designers, technical writers, support engineers, and
          editors – everyone who is essential for creating high-quality software
          products. We value transparency, mentorship, and every employee's
          input in shaping our future.
        </p>
        <p className="mt-4 font-semibold">
          If you are up for a challenging position in software development and
          ready to solve diverse and intricate tasks as part of our friendly and
          high-performing team, DevSoft has a place for you.
        </p>
      </div> */}
    </section>
  );
}
