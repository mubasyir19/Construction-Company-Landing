import FAQComponents from "@/components/organism/FAQ";
import React from "react";

export default function ContactPage() {
  return (
    <div>
      <section className="flex flex-col md:flex-row">
        <div className="bg-[url('/images/hero/hero1.webp')] bg-cover md:flex-1">
          <div className="flex h-full w-full items-center justify-center bg-[#1F1F1F]/85 px-6 py-10">
            <div className="lg:w-3/4">
              <div className="border-primary border-l-8 pl-7">
                <h1 className="text-3xl font-bold text-white lg:text-6xl">
                  Contact Us
                </h1>
              </div>
              <p className="mt-7 text-start text-xl text-white lg:w-9/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis
                egestas pellentesque libero dolor in diam consequat ut. Mi nibh
                amet viverra id aliquet neque odio.
              </p>
              <button className="bg-primary mt-14 cursor-pointer px-12 py-4 text-sm font-semibold text-white">
                Send A Message
              </button>
            </div>
          </div>
        </div>
        <div className="bg-primary p-9">
          <div className="mx-auto w-11/12">
            <h1 className="text-secondary text-3xl font-bold">Contact Us</h1>
            <div className="mt-3 w-3/4 space-y-8">
              <div className="flex items-center gap-4">
                <div className="">
                  <p className="text-secondary text-base font-bold">
                    Our Office
                  </p>
                  <p className="mt-2 text-sm text-black">
                    1234 Divi St. #1000, San Francisc, CA 93251
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="">
                  <p className="text-secondary text-base font-bold">
                    Open Office Hours
                  </p>
                  <p className="mt-2 text-sm text-black">M-F: 9am – 6pm</p>
                  <p className="mt-2 text-sm text-black">S-S: 10am – 4pm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="">
                  <p className="text-secondary text-base font-bold">
                    Get In Touch
                  </p>
                  <p className="mt-2 text-sm text-black">
                    constructioninc.com{" "}
                  </p>
                  <p className="mt-2 text-sm text-black">(346) 426-2351</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 px-6 py-14 md:flex-row md:justify-between xl:px-28">
        <div className="">
          <h2 className="text-primary text-4xl font-bold">
            Call: (541) 931-3526
          </h2>
          <h3 className="mt-3 text-2xl font-medium text-black">
            We Can&apos;t Wait to Make Your Ideas a Reality
          </h3>
        </div>
        <div className="">
          <button className="border-primary text-primary cursor-pointer border-4 px-10 py-2 text-sm font-semibold uppercase">
            Send Message
          </button>
        </div>
      </section>
      <section className="bg-[#F7F7F7] px-6 py-14 lg:px-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:gap-10">
          <div className="">
            <div className="">
              <h1 className="text-4xl font-bold text-black">Contact Us</h1>
              <hr className="border-primary my-4 w-12 border-4" />
            </div>
            <form className="mt-11 space-y-4">
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="placeholder:text-typography bg-white px-4 py-3 placeholder:text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="placeholder:text-typography bg-white px-4 py-3 placeholder:text-sm"
                />
              </div>
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                className="placeholder:text-typography w-full bg-white px-4 py-3 placeholder:text-sm"
              ></textarea>
              <div className="flex justify-end">
                <button className="cursor-pointer border-4 border-black px-10 py-2 text-sm font-semibold text-black uppercase">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white px-6">
            <FAQComponents />
          </div>
        </div>
      </section>
      <section className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101396.3838794004!2d-122.23775950273436!3d37.42205409999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sid!2sid!4v1756882429361!5m2!1sid!2sid"
          className="h-[500px] w-full lg:h-[450px]"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
