import Image from "next/image";
import data from "../../utils/data.json";

const About = () => {
  return (
    <>
      <section className="pt-20 lg:pt-40">
        <div className="container mx-auto relative z-[2] px-3">
          <img
            src="/assets/hero-image/circle.svg"
            alt="circle"
            className="absolute z-[1] bottom-full right-full translate-x-1/2 translate-y-[55%]"
            data-aos="fade-up"
          />
          <div className="relative z-[2] bg-black py-16 lg:py-40 px-10 lg:px-20 rounded-md">
            <img
              src="/assets/about-image/about.png"
              className="absolute h-full pointer-events-none top-0 right-0 object-contain object-right-top"
              alt=""
              data-aos="fade-up"
            />
            <h5 className="text-[48px] font-bold text-white" data-aos="fade-up">
              {data.about.section.title}
            </h5>

            <p
              className="text-[18px] mt-4 text-slate-200 font-normal"
              data-aos="fade-up">
              {data.about.section.description}
            </p>
            <button
              className="bg-white hover:bg-slate-200 mt-4 flex justify-center items-center py-3 px-6 leading-normal rounded-sm text-[18px] font-medium"
              data-aos="fade-up">
              {data.about.section.button.text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="32"
                fill="currentColor"
                className="bi bi-apple ms-3"
                viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
              </svg>
            </button>
          </div>
          <div>
            <img src="/assets/about-image/1.png" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </section>
      <footer className="py-10 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="-m-4 flex flex-wrap">
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
              <a className="flex items-center">
                <Image
                  height={34.41}
                  width={117}
                  src="/assets/logo.svg"
                  alt="Logo"
                  data-aos="fade-up"
                />
              </a>
              <ul className="mt-7 me-24 w-full">
                <li className="flex items-center" data-aos="fade-up">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#FF5555"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                  </svg>
                  <span
                    className="ms-2 text-[16px] font-medium"
                    data-aos="fade-up">
                    {data.footer.navItem1.email}
                  </span>
                </li>
                <li className="flex items-center mt-3" data-aos="fade-up">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="#FF5555"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                  <span
                    className="ms-1 text-[16px] font-medium"
                    data-aos="fade-up">
                    {data.footer.navItem1.phone}
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
              <h2
                className="mb-2 lg:mb-6 text-3xl font-medium text-gray-900 uppercase"
                data-aos="fade-up">
                {data.footer.navItem2.headline}
              </h2>
              <ul className=" text-[16px] font-medium">
                {data.footer.navItem2.links.map((item, i) => (
                  <li className="mb-4" key={i} data-aos="fade-up">
                    <a className="hover:underline">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
              <h2
                className="mb-2 lg:mb-6 text-[32px] font-medium text-gray-900 uppercase "
                data-aos="fade-up">
                {data.footer.navItem3.headline}
              </h2>
              <ul className=" text-[16px] font-medium">
                {data.footer.navItem3.legal.map((item, i) => (
                  <li className="mb-4" key={i} data-aos="fade-up">
                    <a className="hover:underline">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
              <h2
                className="mb-2 lg:mb-6 text-[32px] font-medium text-gray-900 uppercase "
                data-aos="fade-up">
                {data.footer.navItem4.headline}
              </h2>
              <ul className=" text-[16px] font-medium">
                {data.footer.navItem3.legal.map((item, i) => (
                  <li className="mb-4" key={i} data-aos="fade-up">
                    <a className="hover:underline">{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full p-4 flex-1">
              <h2
                className="mb-2 lg:mb-6 text-[32px] font-medium text-gray-900 uppercase "
                data-aos="fade-up">
                {data.footer.navItem5.headline}
              </h2>
              <ul className=" text-[16px] font-medium">
                <li className="mb-4" data-aos="fade-up">
                  <a className="hover:underline">
                    {data.footer.navItem5.newsletter.text}
                  </a>
                </li>
                <li className="flex flex-wrap">
                  <input
                    className="p-5 text-[16px]"
                    type="text"
                    placeholder="Your email"
                    data-aos="fade-up"
                  />
                  <button
                    type="button"
                    data-aos="fade-up"
                    className="text-white px-5 py-5 me-5 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-[18px] text-center">
                    {data.footer.navItem5.newsletter.btnText}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-200 sm:mx-auto mb-6  lg:mb-8 mt-12 lg:mt-20" />
          <div
            className="sm:flex sm:items-center sm:justify-center"
            data-aos="fade-up">
            <span className="text-[16px] font-medium sm:text-center">
              Copyright 2022
              <a
                href="https://flowbite.com/"
                className="hover:underline inline-block mx-1">
                Uifry.Com
              </a>
              All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
