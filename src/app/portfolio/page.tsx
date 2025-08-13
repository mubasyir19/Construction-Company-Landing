import Contact from "@/components/organism/Contact";
import Image from "next/image";
import React from "react";

export default function PortfolioPage() {
  return (
    <div>
      <section className="bg-[url('/images/hero/hero4.webp')] bg-cover">
        <div className="flex h-full w-full flex-col items-center bg-[#1F1F1F]/85 px-6 py-40 md:flex-row">
          <div className="md:flex-3/4">
            <div className="flex items-center justify-center px-6 py-10">
              <div className="lg:w-3/4">
                <div className="border-primary border-l-8 pl-7">
                  <h1 className="text-3xl font-bold text-white lg:text-6xl">
                    Our Constraction <br /> Projects
                  </h1>
                </div>
                <p className="mt-7 text-start text-xl text-white lg:w-9/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  quis egestas pellentesque libero dolor in diam consequat ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-24 lg:px-52">
        <div className="grid grid-cols-1 gap-14 px-6 md:grid-cols-3">
          <div id="project">
            <Image
              src={"/images/portfolio/portfolio1.webp"}
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
              </button>
            </div>
          </div>
          <div id="project">
            <Image
              src={"/images/portfolio/portfolio2.webp"}
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
              </button>
            </div>
          </div>
          <div id="project">
            <Image
              src={"/images/portfolio/portfolio3.webp"}
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
              </button>
            </div>
          </div>
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
              </button>
            </div>
          </div>
          <div id="project">
            <Image
              src={"/images/portfolio/portfolio7.webp"}
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
              </button>
            </div>
          </div>
          <div id="project">
            <Image
              src={"/images/portfolio/portfolio8.webp"}
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
              </button>
            </div>
          </div>
          <div id="project">
            <Image
              src={"/images/portfolio/portfolio9.webp"}
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
                euismod bibendum adipiscing et orci, fermentum.
              </p>
              <button className="border-typography text-typography mt-20 border px-5 py-2 text-xs font-bold uppercase">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-16">
        <h1 className="mx-auto w-3/4 text-center text-3xl font-bold text-black lg:w-1/2 lg:text-5xl lg:leading-16">
          Have a Project in Mind? <br /> Let’s Get Building!
        </h1>
      </section>
      <Contact />
    </div>
  );
}
