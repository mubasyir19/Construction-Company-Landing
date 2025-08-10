import Contact from "@/components/organism/Contact";
import Image from "next/image";
import React from "react";

export default function ProjectPage() {
  return (
    <div>
      <section className="bg-[url('/images/hero/hero1.webp')] bg-cover">
        <div className="flex h-full w-full flex-col items-center bg-[#1F1F1F]/85 px-6 py-40 md:flex-row">
          <div className="md:flex-3/4">
            <div className="flex items-center justify-center px-6 py-10">
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
          </div>
          <div className="flex flex-1/4 flex-col gap-3">
            <p className="text-base text-white">Date: 12 April 2018</p>
            <p className="text-base text-white">Client: Monarch Group</p>
            <p className="text-base text-white">
              Project Type: Building Renovation
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-24 md:px-16 lg:px-20 xl:px-44">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          <div className="">
            <div className="">
              <h1 className="text-4xl font-bold text-black">
                About This Project
              </h1>
              <hr className="border-primary my-4 w-12 border-4" />
            </div>
            <div className="">
              <p className="text-typography text-sm leading-7">
                Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
                Proin cursus, dolor a mollis consectetur, risus dolor fermentum
                massa, a commodo elit dui sit amet risus.
              </p>
              <ul className="flex list-inside list-disc flex-col space-y-2">
                <li className="text-typography text-sm">
                  Maecenas ornare nisl
                </li>
                <li className="text-typography text-sm">
                  A tortor ultrices bibendum
                </li>
                <li className="text-typography text-sm">Nulla fermentum</li>
                <li className="text-typography text-sm">Metus quis</li>
                <li className="text-typography text-sm">Sodales tristique</li>
              </ul>
            </div>
          </div>
          <div className="">
            <Image
              src={`/images/sections/section3.webp`}
              width={536}
              height={324}
              alt="section"
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="mt-24">
          <Image
            src={`/images/sections/section4.webp`}
            width={1096}
            height={568}
            alt="section"
            className="w-full"
          />
        </div>
        <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-2">
          <div className="">
            <Image
              src={`/images/sections/section5.webp`}
              width={536}
              height={324}
              alt="section"
              className="h-auto w-full"
            />
          </div>
          <div className="space-y-4">
            <p className="text-typography text-sm leading-7">
              Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
              erat, consectetur eu sapien eget rhoncus consectetur sem. Proin
              cursus, dolor a mollis consectetur, risus dolor fermentum massa, a
              commodo elit dui sit amet risus. Maecenas ornare nisl a tortor
              ultrices bibendum. Nulla fermentum, metus quis sodales tristique,
              augue mauris molestie augue non feugiat ligula neque nec felis.
            </p>
            <p className="text-typography text-sm leading-7">
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum. Nulla fermentum, metus quis sodales
              tristique, augue mauris molestie augue, non feugiat ligula neque
              nec felis.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light-secondary py-28">
        <div className="text-center">
          <h2 className="text-secondary text-[40px] font-bold">
            Related Projects
          </h2>
          <hr className="border-primary mx-auto my-4 w-12 border-4" />
        </div>
        <div className="mt-9">
          <div className="mx-auto grid w-3/4 grid-cols-1 gap-6 md:grid-cols-3 lg:gap-14 xl:w-3/5">
            <div id="project">
              <Image
                src={"/images/portfolio/portfolio4.webp"}
                width={293}
                height={182}
                alt="thumbnail"
                className="w-full"
              />
              <div className="border-typography mt-5 border px-6 py-4">
                <p className="text-secondary mt-6 text-base font-bold">
                  Service Title
                </p>
                <p className="text-typography mt-5 text-sm leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                  euismod bibendum adipiscing et orci, fermentum. Cras tristique
                  viverra gravida et sit egestas.
                </p>
                <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                  View Project
                </button>
              </div>
            </div>
            <div id="project">
              <Image
                src={"/images/portfolio/portfolio5.webp"}
                width={293}
                height={182}
                alt="thumbnail"
                className="w-full"
              />
              <div className="border-typography mt-5 border px-6 py-4">
                <p className="text-secondary mt-6 text-base font-bold">
                  Service Title
                </p>
                <p className="text-typography mt-5 text-sm leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                  euismod bibendum adipiscing et orci, fermentum. Cras tristique
                  viverra gravida et sit egestas.
                </p>
                <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                  View Project
                </button>
              </div>
            </div>
            <div id="project">
              <Image
                src={"/images/portfolio/portfolio6.webp"}
                width={293}
                height={182}
                alt="thumbnail"
                className="w-full"
              />
              <div className="border-typography mt-5 border px-6 py-4">
                <p className="text-secondary mt-6 text-base font-bold">
                  Service Title
                </p>
                <p className="text-typography mt-5 text-sm leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id et
                  euismod bibendum adipiscing et orci, fermentum. Cras tristique
                  viverra gravida et sit egestas.
                </p>
                <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                  View Project
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button className="mt-9 cursor-pointer border-4 border-black px-10 py-2 text-sm font-semibold text-black uppercase">
              View All
            </button>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
