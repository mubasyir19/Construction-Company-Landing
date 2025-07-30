import Image from "next/image";
import Link from "next/link";
import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-primary p-14">
        <div className="">
          <h1 className="text-4xl font-bold text-black">Contact Us</h1>
          <hr className="border-secondary my-4 w-12 border-4" />
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
            <button className="cursor-pointer border-4 border-white px-10 py-2 text-sm font-semibold text-white uppercase">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <div className="bg-secondary flex justify-center gap-16 py-11">
          <Link href={`#`}>
            <Image
              src={`/icons/ic-facebook.svg`}
              width={24}
              height={24}
              alt="icon"
              className="size-6"
            />
          </Link>
          <Link href={`#`}>
            <Image
              src={`/icons/ic-twitter.svg`}
              width={24}
              height={24}
              alt="icon"
              className="size-6"
            />
          </Link>
          <Link href={`#`}>
            <Image
              src={`/icons/ic-linkedin.svg`}
              width={24}
              height={24}
              alt="icon"
              className="size-6"
            />
          </Link>
        </div>
        <div className="flex justify-center py-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <MapPinIcon className="text-secondary size-6" />
              <p className="text-base font-medium text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="text-secondary size-6" />
              <p className="text-base font-medium text-black">+00 123 456 78</p>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="text-secondary size-6" />
              <p className="text-base font-medium text-black">
                constractioninc@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
