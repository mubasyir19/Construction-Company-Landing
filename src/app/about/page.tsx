import Contact from "@/components/organism/Contact";
import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[url('/images/hero/hero6.webp')] bg-cover">
        <div className="flex h-full w-full flex-col items-center bg-[#1F1F1F]/85 md:flex-row">
          <div className="md:flex-1">
            <div className="flex items-center justify-center px-6 py-10">
              <div className="lg:w-3/4">
                <div className="border-primary border-l-8 pl-7">
                  <h1 className="w-3/5 text-3xl font-bold text-white lg:text-6xl">
                    About Our Construction Company
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
      <section className="container mx-auto px-6 py-24 md:px-16 lg:px-40">
        <div className="text-center">
          <h2 className="text-secondary text-[40px] font-bold">About Us</h2>
          <hr className="border-primary mx-auto my-4 w-12 border-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
          <p className="text-typography text-sm leading-7">
            Lectus erat, consectetur eu sapien eget rhoncus consectetur sem.
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue, non feugiat ligula neque nec
            felis.
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus sed nibh dignissim, cursus tellus sit amet, ultrices
            mauris. Aliquam blandit est in eros elementum, quis vehicula est
            suscipit.
          </p>
          <p className="text-typography text-sm leading-7">
            Lorem ipsum dolor sit consectetur adipiscing elit. Nullam lectus
            erat, consectetur eu sapien eget rhoncus consectetur sem. <br />{" "}
            Proin cursus, dolor a mollis consectetur, risus dolor fermentum
            massa, a commodo elit dui sit amet risus. Maecenas ornare nisl a
            tortor ultrices bibendum. Nulla fermentum, metus quis sodales
            tristique, augue mauris molestie augue non feugiat ligula neque nec
            felis.
          </p>
        </div>
      </section>
      <section className="bg-light-secondary flex flex-col md:flex-row">
        <div className="px-16 py-20 md:w-1/4 lg:w-2/6">
          <h2 className="text-3xl font-bold text-black">Only The Best</h2>
          <div className="mt-5 space-y-5">
            <div className="flex items-start gap-5">
              <Image
                src={`/icons/ic-arrow.svg`}
                width={38}
                height={34}
                alt="arrow"
              />
              <div className="">
                <p className="text-lg font-medium text-black">
                  Eco Friendly Construction
                </p>
                <p className="mt-2 text-sm leading-7 text-black">
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <Image
                src={`/icons/ic-arrow.svg`}
                width={38}
                height={34}
                alt="arrow"
              />
              <div className="">
                <p className="text-lg font-medium text-black">
                  The Newest Technology Repairs
                </p>
                <p className="mt-2 text-sm leading-7 text-black">
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <Image
                src={`/icons/ic-arrow.svg`}
                width={38}
                height={34}
                alt="arrow"
              />
              <div className="">
                <p className="text-lg font-medium text-black">
                  High Quality Construction Management
                </p>
                <p className="mt-2 text-sm leading-7 text-black">
                  Donec sollicitudin molestie malesuada. Praesent sapien massa,
                  convallis a pellentesque nec, egestas non nisi.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="border-primary text-primary mt-12 border-4 px-6 py-2 text-sm font-semibold lg:text-base xl:px-10 xl:py-4">
              Free Quote
            </button>
          </div>
        </div>
        <div className="md:flex-1">
          <Image
            src={`/images/sections/section2.webp`}
            width={976}
            height={742}
            alt="section"
            className="h-3/4 w-full"
          />
          <div className="flex">
            <div className="bg-primary flex w-full items-center justify-center py-6">
              <div className="">
                <h2 className="text-secondary text-center text-[40px] font-bold">
                  12
                </h2>
                <p className="text-secondary text-center text-sm font-bold uppercase">
                  YEARS ESTABLISHED
                </p>
              </div>
            </div>
            <div className="bg-secondary flex w-full items-center justify-center py-6">
              <div className="">
                <h2 className="text-center text-[40px] font-bold text-white">
                  250
                </h2>
                <p className="text-center text-sm font-bold text-white uppercase">
                  COMPLETED PROJECTS
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-light-secondary flex w-full items-center justify-center py-6">
              <div className="">
                <h2 className="text-secondary text-center text-[40px] font-bold">
                  24
                </h2>
                <p className="text-secondary text-center text-sm font-bold uppercase">
                  Field Workers
                </p>
              </div>
            </div>
            <div className="bg-light-secondary flex w-full items-center justify-center py-6">
              <div className="">
                <h2 className="text-secondary text-center text-[40px] font-bold">
                  18
                </h2>
                <p className="text-secondary text-center text-sm font-bold uppercase">
                  Office Staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center px-6 py-24">
        <div className="mx-auto w-full md:w-1/2">
          <p className="text-center text-3xl">
            “Suspendisse neque erat, imperdiet ac non, sollicitudin accumsan
            lacus. Vestibulum ac ex rutrum, pellentesque purus et, lacinia mi.
            Nullam maximus lectus libero.”
          </p>
          <p className="text-typography mt-8 text-center text-sm font-medium uppercase">
            Jhon Smith - CEO
          </p>
        </div>
      </section>
      <Contact />
    </div>
  );
}
