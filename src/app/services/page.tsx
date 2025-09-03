import Contact from "@/components/organism/Contact";
import Image from "next/image";
import React from "react";

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-[url('/images/hero/hero6.webp')] bg-cover">
        <div className="flex h-full w-full flex-col items-center bg-[#1F1F1F]/85 md:flex-row">
          <div className="md:flex-1">
            <div className="flex items-center justify-center px-6 py-10">
              <div className="lg:w-3/4">
                <div className="border-primary border-l-8 pl-7">
                  <h1 className="w-3/5 text-3xl font-bold text-white lg:text-[40px]">
                    Our Construction Services
                  </h1>
                </div>
                <p className="mt-7 text-start text-xl text-white lg:w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis egestas pellentesque libero dolor in diam consequat ut.
                </p>
                <button className="bg-primary mt-14 cursor-pointer px-12 py-4 text-sm font-semibold text-white">
                  Get A Free Quote
                </button>
              </div>
            </div>
          </div>
          <div className="p-9">
            <div className="w-full">
              <h1 className="text-primary text-3xl font-bold">What We Do</h1>
              <div className="mt-3 w-8/12 space-y-8">
                <div className="flex items-center gap-4">
                  <Image
                    src={`/icons/ic-building.svg`}
                    width={54}
                    height={54}
                    alt="icon"
                  />
                  <div className="">
                    <p className="text-base font-bold text-white">
                      Building Construction
                    </p>
                    <p className="mt-2 text-sm text-white">
                      Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                      lectus erat
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={`/icons/ic-repairs.svg`}
                    width={54}
                    height={54}
                    alt="icon"
                  />
                  <div className="">
                    <p className="text-base font-bold text-white">
                      Building Repairs
                    </p>
                    <p className="mt-2 text-sm text-white">
                      Lorem ipsum dolor sit consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src={`/icons/ic-design.svg`}
                    width={54}
                    height={54}
                    alt="icon"
                  />
                  <div className="">
                    <p className="text-base font-bold text-white">
                      Custom Design
                    </p>
                    <p className="mt-2 text-sm text-white">
                      Lorem ipsum dolor sit consectetur adipiscing elit. Nullam
                      lectus erat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-9 shadow-xl lg:px-16">
        <div className="flex items-center justify-between bg-white">
          <h2 className="font-bold text-black lg:text-3xl xl:text-[40px]">
            Get a Quote For Your Project
          </h2>
          <button className="border-primary text-primary border-4 px-6 py-2 text-sm font-semibold lg:text-base xl:px-10 xl:py-4">
            Free Quote
          </button>
        </div>
      </section>
      <section className="bg-[#F7F7F7]">
        <div className="p-20">
          <div className="">
            <h1 className="text-4xl font-bold text-black">
              Building Construction
            </h1>
            <hr className="border-primary my-4 w-12 border-4" />
          </div>
          <div className="mt-9 text-base text-black">
            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum.{" "}
            </p>
            <div className="container mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-secondary flex w-full items-center justify-center py-6">
            <button className="border-4 border-white px-6 py-2 text-sm font-semibold text-white uppercase lg:text-base xl:px-10 xl:py-4">
              LEARN MORE
            </button>
          </div>
          <div className="bg-primary flex w-full items-center justify-center py-6">
            <button className="border-4 border-white px-6 py-2 text-sm font-semibold text-white uppercase lg:text-base xl:px-10 xl:py-4">
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7F7]">
        <div className="p-20">
          <div className="">
            <h1 className="text-4xl font-bold text-black">
              Repairs & Installations
            </h1>
            <hr className="border-primary my-4 w-12 border-4" />
          </div>
          <div className="mt-9 text-base text-black">
            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum.{" "}
            </p>
            <div className="container mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-secondary flex w-full items-center justify-center py-6">
            <button className="border-4 border-white px-6 py-2 text-sm font-semibold text-white uppercase lg:text-base xl:px-10 xl:py-4">
              LEARN MORE
            </button>
          </div>
          <div className="bg-primary flex w-full items-center justify-center py-6">
            <button className="border-4 border-white px-6 py-2 text-sm font-semibold text-white uppercase lg:text-base xl:px-10 xl:py-4">
              GET A QUOTE
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7F7]">
        <div className="p-20">
          <div className="">
            <h1 className="text-4xl font-bold text-black">
              Custom Design Projects
            </h1>
            <hr className="border-primary my-4 w-12 border-4" />
          </div>
          <div className="mt-9 text-base text-black">
            <p>
              Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
              Proin cursus, dolor a mollis consectetur, risus dolor fermentum
              massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
              tortor ultrices bibendum.{" "}
            </p>
            <div className="container mx-auto mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
              <ul className="list-inside list-disc space-y-2">
                <li>Lectus erat consectetur</li>
                <li>Eu sapien eget</li>
                <li>Rhoncus consectetur</li>
                <li>Proin cursus</li>
                <li>Dolor a mollis consectetur</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-secondary flex w-full items-center justify-center py-6">
            <button className="border-4 border-white px-6 py-2 text-sm font-semibold text-white uppercase lg:text-base xl:px-10 xl:py-4">
              LEARN MORE
            </button>
          </div>
          <div className="bg-primary flex w-full items-center justify-center py-6">
            <button className="border-4 border-white px-6 py-2 text-sm font-semibold text-white uppercase lg:text-base xl:px-10 xl:py-4">
              GET A QUOTE
            </button>
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
