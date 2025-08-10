import React from "react";

export default function ProjectPage() {
  return (
    <div>
      <section className="">
        <div className="flex items-center justify-center bg-[url('/images/hero/hero1.webp')] bg-cover">
          <div className="flex h-full w-full items-center bg-[#1F1F1F]/85 px-6 py-40">
            <div className="">
              <div className="lg:w-3/4">
                <div className="border-primary border-l-8 pl-7">
                  <h1 className="text-3xl font-bold text-white lg:text-6xl">
                    Monarch HQ Project
                  </h1>
                </div>
                <p className="mt-7 text-start text-xl text-white lg:w-9/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis egestas pellentesque libero dolor in diam consequat ut.
                  Mi nibh amet viverra id aliquet neque odio.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-base text-white">Date: 12 April 2018</p>
              <p className="text-base text-white">Client: Monarch Group</p>
              <p className="text-base text-white">
                Project Type: Building Renovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
