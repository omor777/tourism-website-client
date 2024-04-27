import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white/80">
        <div className="container footer py-16   mt-24">
          <aside>
            <h1 className="text-3xl font-bold">JourneyJoy</h1>
            <p className="max-w-sm mt-2 leading-6">
              Welcome to JourneyJoy, your ultimate guide to unforgettable
              adventures around the globe.We&apos;re passionate about helping
              travelers like you discover new destination.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="bg-gray-600 cursor-pointer p-3 rounded-full text-white">
                <FaFacebookF className="text-xl" />
              </p>
              <p className="bg-gray-600 cursor-pointer p-3 rounded-full text-white">
                <FaTwitter className="text-xl" />
              </p>
              <p className="bg-gray-600 cursor-pointer p-3 rounded-full text-white">
                <FaLinkedinIn className="text-xl" />
              </p>
              <p className="bg-gray-600 cursor-pointer p-3 rounded-full text-white">
                <FaInstagram className="text-xl" />
              </p>
            </div>
          </aside>
          <nav>
            <h6 className="text-lg font-bold">Explore</h6>
            <a className="link link-hover">Destinations</a>
            <a className="link link-hover"> Travel Guides</a>
            <a className="link link-hover"> Tours & Activities</a>
            <a className="link link-hover"> Blog</a>
          </nav>
          <nav>
            <h6 className="text-lg font-bold">Resources</h6>
            <a className="link link-hover"> Travel Blog</a>
            <a className="link link-hover"> Packing Tips</a>
            <a className="link link-hover"> Weather Forecasts</a>
            <a className="link link-hover"> Currency Converter</a>
          </nav>
          <nav>
            <h6 className="text-lg font-bold">Customer Support</h6>
            <a className="link link-hover">FAQs</a>
            <a className="link link-hover"> Travel Insurance</a>
            <a className="link link-hover"> Customer Reviews</a>
            <a className="link link-hover"> Cancelation Policy</a>
          </nav>
        </div>
        <div className="divider divider-neutral"></div>
        <div>
          <p className="text-center pb-8 pt-2">
            Copyright © 2024 JourneyJoy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
