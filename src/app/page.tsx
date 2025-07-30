import Contact from "@/components/organism/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="flex">
        <div className="flex-1 bg-[url('/images/hero/hero1.webp')] bg-cover">
          <div className="flex h-full w-full items-center justify-center bg-[#1F1F1F]/85">
            <div className="w-3/4">
              <div className="border-primary border-l-8 pl-7">
                <h1 className="text-6xl font-bold text-white">Construction</h1>
              </div>
              <p className="mt-7 w-9/12 text-start text-xl text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                egestas pellentesque libero dolor in diam consequat ut. Mi nibh
                amet viverra id aliquet neque odio.
              </p>
              <button className="bg-primary mt-14 cursor-pointer px-12 py-4 text-sm font-semibold text-white">
                View Our Work
              </button>
            </div>
          </div>
        </div>
        <div className="bg-primary p-9">
          <div className="mx-auto w-11/12">
            <h1 className="text-secondary text-3xl font-bold">Our Services</h1>
            <div className="mt-3 w-3/4 space-y-8">
              <div className="flex items-center gap-4">
                <Image
                  src={`/icons/ic-construction.svg`}
                  width={54}
                  height={54}
                  alt="icon"
                />
                <div className="">
                  <p className="text-secondary text-base font-bold">
                    Building Construction
                  </p>
                  <p className="mt-2 text-sm text-white">
                    Lorem ipsum dolor sit consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={`/icons/ic-work.svg`}
                  width={54}
                  height={54}
                  alt="icon"
                />
                <div className="">
                  <p className="text-secondary text-base font-bold">
                    Foundation Work
                  </p>
                  <p className="mt-2 text-sm text-white">
                    Lorem ipsum dolor sit consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={`/icons/ic-management.svg`}
                  width={54}
                  height={54}
                  alt="icon"
                />
                <div className="">
                  <p className="text-secondary text-base font-bold">
                    Site Management
                  </p>
                  <p className="mt-2 text-sm text-white">
                    Lorem ipsum dolor sit consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-16 py-9">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-black lg:text-3xl xl:text-[40px]">
            Get a Quote For Your Project
          </h2>
          <button className="border-primary text-primary border-4 px-6 py-2 text-sm font-semibold lg:text-base xl:px-10 xl:py-4">
            Free Quote
          </button>
        </div>
      </section>
      <section className="flex">
        <div className="w-1/4 bg-[url('/images/portfolio/portfolio6.webp')] bg-cover bg-left"></div>
        <div className="flex-1">
          <div className="">
            <div className="px-40 py-28">
              <div className="">
                <h1 className="text-4xl font-bold text-black">
                  No Project Too Big Or Too Small
                </h1>
                <hr className="border-primary my-4 w-12 border-4" />
              </div>
              <div className="mt-9 grid grid-cols-1 gap-20 md:grid-cols-2">
                <div className="space-y-10">
                  <p className="text-typography text-sm leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>
                  <p className="text-typography text-sm leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                  </p>
                </div>
                <div className="">
                  <p className="text-typography text-sm leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien, dignissim tristique tellus sed faucibus nullam.
                    Tincidunt mauris ut quam sed mauris proin feugiat.
                    Scelerisque lorem posuere iaculis nunc amet phasellus.
                  </p>
                  <button className="mt-10 cursor-pointer border-4 border-black px-10 py-2 text-sm font-semibold text-black uppercase">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </section>
      <section className="@container mx-auto py-24">
        <div className="text-center">
          <h2 className="text-secondary text-[40px] font-bold">
            Latest Projects
          </h2>
          <hr className="border-primary mx-auto my-4 w-12 border-4" />
        </div>
        <div className="mt-9">
          <div className="mx-auto grid w-3/5 grid-cols-1 gap-14 md:grid-cols-3">
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
                  Project Title
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
                src={"/images/portfolio/portfolio3.webp"}
                width={293}
                height={182}
                alt="thumbnail"
                className="w-full"
              />
              <div className="border-typography mt-5 border px-6 py-4">
                <p className="text-secondary mt-6 text-base font-bold">
                  Project Title
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
                  Project Title
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
      <h1>HomePage</h1>
      <Contact />
    </div>
  );
}
