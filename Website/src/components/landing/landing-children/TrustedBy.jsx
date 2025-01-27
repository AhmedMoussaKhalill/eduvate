import React from "react";

const TrustedBy = () => {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">4.5</h2>
          <p>80k reviews</p>
        </div>
        <div className="h-7 w-1 rounded-full bg-blue-600"></div>
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">30M</h2>
          <p>Enrollments</p>
        </div>
        <div className="h-7 w-1 rounded-full bg-blue-600"></div>
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">2M+</h2>
          <p>Learners</p>
        </div>
        <div className="h-7 w-1 rounded-full bg-blue-600"></div>
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">1K+</h2>
          <p>Popular Courses</p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;



{/* <AnimationContainer delay={0.4}>
<div className="py-14">
  <div className="mx-auto px-4 md:px-8">
    <h2 className="font-heading text-center text-sm font-medium uppercase text-neutral-400">
      Trusted by the best in the industry
    </h2>
    <div className="mt-8">
      <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 md:gap-x-16">
        {COMPANIES.map((company) => (
          <li key={company.name}>
            <Image
              src={company.logo}
              alt={company.name}
              width={80}
              height={80}
              quality={100}
              className="h-auto w-28"
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
</AnimationContainer> */}