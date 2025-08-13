import Contact from "@/components/organism/Contact";
import Image from "next/image";
import React from "react";

export default function BlogPage() {
  return (
    <div className="bg-light-secondary">
      <section className="bg-[url('/images/hero/hero3.webp')] bg-cover">
        <div className="flex h-full w-full flex-col items-center bg-[#1F1F1F]/85 px-6 py-40 md:flex-row">
          <div className="md:flex-3/4">
            <div className="flex items-center justify-center px-6 py-10">
              <div className="lg:w-3/4">
                <div className="border-primary border-l-8 pl-7">
                  <h1 className="text-3xl font-bold text-white lg:text-6xl">
                    News
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-24 lg:px-52">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          <div id="blog">
            <Image
              src={"/images/blog/blog1.webp"}
              width={293}
              height={182}
              alt="thumbnail"
              className="w-full"
            />
            <div className="bg-white px-6 py-4">
              <p className="text-typography mt-6 text-base font-bold lg:text-lg">
                Nunc Volutpat Venenatis
              </p>
              <p className="text-sm text-[#C9C9C9]">May 9, 2014 | Category</p>
              <p className="text-typography mt-5 line-clamp-3 text-sm leading-7">
                Nulla a odio sed magna congue condimentum. Pellentesque
                convallis enim nec libero vulputate, et rhoncus urna placerat.
                Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus
                augue, at mollis tellus ex non nisi.
              </p>
            </div>
          </div>
          <div id="blog">
            <Image
              src={"/images/blog/blog2.webp"}
              width={293}
              height={182}
              alt="thumbnail"
              className="w-full"
            />
            <div className="bg-white px-6 py-4">
              <p className="text-typography mt-6 text-base font-bold lg:text-lg">
                Vestibulum Nisl Felis
              </p>
              <p className="text-sm text-[#C9C9C9]">May 9, 2014 | Category</p>
              <p className="text-typography mt-5 line-clamp-3 text-sm leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenatis aliquet.
              </p>
            </div>
          </div>
          <div id="blog">
            <Image
              src={"/images/blog/blog3.webp"}
              width={293}
              height={182}
              alt="thumbnail"
              className="w-full"
            />
            <div className="bg-white px-6 py-4">
              <p className="text-typography mt-6 text-base font-bold lg:text-lg">
                Proin Eu Augue Efficitur
              </p>
              <p className="text-sm text-[#C9C9C9]">May 9, 2014 | Category</p>
              <p className="text-typography mt-5 line-clamp-3 text-sm leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenatis aliquet.
              </p>
            </div>
          </div>
          <div id="blog">
            <Image
              src={"/images/blog/blog4.webp"}
              width={293}
              height={182}
              alt="thumbnail"
              className="w-full"
            />
            <div className="bg-white px-6 py-4">
              <p className="text-typography mt-6 text-base font-bold lg:text-lg">
                Nunc Volutpat Venenatis
              </p>
              <p className="text-sm text-[#C9C9C9]">May 9, 2014 | Category</p>
              <p className="text-typography mt-5 line-clamp-3 text-sm leading-7">
                Nulla a odio sed magna congue condimentum. Pellentesque
                convallis enim nec libero vulputate, et rhoncus urna placerat.
                Phasellus mattis, diam vel vehicula facilisis, erat leo dapibus
                augue, at mollis tellus ex non nisi. Maecenas urna sapien,
                dignissim a augue vitae, porttitor luctus urna. Morbi
                scelerisque semper congue.
              </p>
            </div>
          </div>
          <div id="blog">
            <Image
              src={"/images/blog/blog5.webp"}
              width={293}
              height={182}
              alt="thumbnail"
              className="w-full"
            />
            <div className="bg-white px-6 py-4">
              <p className="text-typography mt-6 text-base font-bold lg:text-lg">
                Donec Sit Amet Nibh
              </p>
              <p className="text-sm text-[#C9C9C9]">May 9, 2014 | Category</p>
              <p className="text-typography mt-5 line-clamp-3 text-sm leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenatis aliquet.
              </p>
            </div>
          </div>
          <div id="blog">
            <Image
              src={"/images/blog/blog6.webp"}
              width={293}
              height={182}
              alt="thumbnail"
              className="w-full"
            />
            <div className="bg-white px-6 py-4">
              <p className="text-typography mt-6 text-base font-bold lg:text-lg">
                Maecenas Fringilla Augue
              </p>
              <p className="text-sm text-[#C9C9C9]">May 9, 2014 | Category</p>
              <p className="text-typography mt-5 line-clamp-3 text-sm leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                aliquam justo et nibh venenatis aliquet.Donec quis felis
                imperdiet, vestibulum est ut, pulvinar dolor.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
