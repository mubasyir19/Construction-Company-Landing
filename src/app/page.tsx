import Contact from "@/components/organism/Contact";
import FAQComponents from "@/components/organism/FAQ";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="flex flex-col md:flex-row">
        <div className="bg-[url('/images/hero/hero1.webp')] bg-cover md:flex-1">
          <div className="flex h-full w-full items-center justify-center bg-[#1F1F1F]/85 px-6 py-10">
            <div className="lg:w-3/4">
              <div className="border-primary border-l-8 pl-7">
                <h1 className="text-3xl font-bold text-white lg:text-6xl">
                  Construction
                </h1>
              </div>
              <p className="mt-7 text-start text-xl text-white lg:w-9/12">
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
      <section className="container mx-auto px-6 py-9 lg:px-16">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-black lg:text-3xl xl:text-[40px]">
            Get a Quote For Your Project
          </h2>
          <button className="border-primary text-primary border-4 px-6 py-2 text-sm font-semibold lg:text-base xl:px-10 xl:py-4">
            Free Quote
          </button>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <div className="hide w-1/4 bg-[url('/images/portfolio/portfolio6.webp')] bg-cover bg-left md:block"></div>
        <div className="lg:flex-1">
          <div className="">
            <div className="px-6 py-28 lg:px-40">
              <div className="">
                <h1 className="text-4xl font-bold text-black">
                  No Project Too Big Or Too Small
                </h1>
                <hr className="border-primary my-4 w-12 border-4" />
              </div>
              <div className="mt-9 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20">
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
      <section className="container mx-auto py-24">
        <div className="text-center">
          <h2 className="text-secondary text-[40px] font-bold">
            Latest Projects
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
      <section className="flex flex-col lg:flex-row">
        <div className="bg-secondary flex w-full items-center justify-center bg-left px-9 py-20 md:w-1/4">
          <div className="">
            <h2 className="text-[40px] font-bold text-white">
              We&apos;ve Been Building For Over 10 Years
            </h2>
            <hr className="border-primary my-4 w-12 border-4" />
            <p className="mt-16 text-sm leading-7 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus.
            </p>
            <button className="border-primary text-primary mt-9 cursor-pointer border-4 px-10 py-2 text-sm font-semibold uppercase">
              About Us
            </button>
          </div>
        </div>
        <div className="lg:flex-1">
          <div className="flex h-full flex-col">
            <div className="min-h-[400px] w-full flex-1 bg-[url('/images/sections/section1.webp')] bg-cover bg-center"></div>
            <div className="flex flex-col lg:flex-row">
              <div className="bg-primary flex w-full items-center justify-start p-6">
                <div>
                  <h4 className="text-3xl font-bold text-black">
                    Call for a Quote
                  </h4>
                  <p className="text-2xl font-medium text-black">
                    (346) 234-6973
                  </p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center p-6">
                <button className="cursor-pointer border-4 border-black px-10 py-2 text-sm font-semibold text-black uppercase">
                  Online Estimate form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-secondary w-full py-24">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="bg-light-secondary w-full pr-14 md:w-1/3">
            <div className="">
              <h2 className="text-[40px] font-bold text-black">
                Let&apos;s Build Something Together
              </h2>
              <hr className="border-primary my-4 w-12 border-4" />
              <p className="text-typography mt-8 text-sm leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
                dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
                ut quam sed mauris proin feugiat.
              </p>
              <button className="border-primary text-primary mt-9 cursor-pointer border-4 px-10 py-2 text-sm font-semibold uppercase">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="flex-1 bg-white px-6 py-4">
            <FAQComponents />
          </div>
        </div>
      </section>
      <section className="bg-light-secondary py-24">
        <div className="container mx-auto w-3/4">
          <div className="text-center">
            <h2 className="text-secondary text-[40px] font-bold">
              Client Testimonials
            </h2>
            <hr className="border-primary mx-auto my-4 w-12 border-4" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-14">
            <div id="testimonial" className="bg-white px-8 py-10">
              <div className="flex items-center justify-center gap-3">
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
              </div>
              <div className="mt-10">
                <p className="text-typography mt-10 text-sm leading-7">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.”
                </p>
              </div>
              <div className="mt-6">
                <p className="text-base font-medium">John Smith</p>
              </div>
            </div>
            <div id="testimonial" className="bg-white px-8 py-10">
              <div className="flex items-center justify-center gap-3">
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
              </div>
              <div className="mt-10">
                <p className="text-typography mt-10 text-sm leading-7">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.”
                </p>
              </div>
              <div className="mt-6">
                <p className="text-base font-medium">John Smith</p>
              </div>
            </div>
            <div id="testimonial" className="bg-white px-8 py-10">
              <div className="flex items-center justify-center gap-3">
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
                <StarIcon className="text-primary size-6" />
              </div>
              <div className="mt-10">
                <p className="text-typography mt-10 text-sm leading-7">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien, dignissim tristique tellus sed faucibus nullam.”
                </p>
              </div>
              <div className="mt-6">
                <p className="text-base font-medium">John Smith</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light-secondary py-24">
        <div className="container mx-auto">
          <Image
            src={`/images/clients.png`}
            width={1048}
            height={240}
            alt="clients"
            className="mx-auto h-auto w-3/4"
          />
        </div>
      </section>
      <Contact />
    </div>
  );
}
