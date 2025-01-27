import React from "react";

const JoinUs = () => {
  return (
    <section className="mx-auto max-w-7xl px-8">
      <div className="space-y-12">
        <div className="items-center justify-center space-y-2 text-center">
          <p className="bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-sm font-semibold uppercase text-transparent">
            Join IEEE in 3 easy steps today
          </p>
          <h2 className="text-3xl font-extrabold">How Joining Works?</h2>
        </div>
        <div className="flex items-center justify-between gap-x-10">
          {DATA.map((item) => (
            <div
              key={item.index}
              className="shadow-custom space-y-2 rounded-xl bg-white/30 p-6"
            >
              <h2 className="text-xl font-bold">
                <span className="font mr-3.5 text-[28px] text-blue-700">
                  {item.number}
                </span>
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

const DATA = [
  {
    title: "Select a writing tool",
    description:
      "Choose from a wide array of AI tools to write social media ads, hero sections, blog posts...",
    number: " 1",
  },
  {
    title: "Select a writing tool",
    description:
      "Choose from a wide array of AI tools to write social media ads, hero sections, blog posts...",
    number: " 2",
  },
  {
    title: "Select a writing tool",
    description:
      "Choose from a wide array of AI tools to write social media ads, hero sections, blog posts...",
    number: " 3",
  },
];
