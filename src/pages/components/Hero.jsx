import data from "../../utils/data.json";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-20 lg:pb-40">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap ">
          <div className="w-full lg:w-1/2 pt-20 lg:pt-40 xl:pt-40 relative">
            {/* <img
              src='/assets/star-left.svg'
              alt='star'
              data-aos='fade-up'
              className='absolute right-full mr-0 top-36'
            />
            <img
              src='/assets/hero-image/circle.svg'
              alt='circle'
              data-aos='fade-up'
              className='absolute top-8 right-[5%] pointer-events-none'
            /> */}
            <div className="relative z-[1]">
              <div>
                <h4
                  data-aos="fade-up"
                  className="mt-10 leading-none text-5xl text-black lg:text-[64px] font-bold">
                  {data.hero.headline}
                </h4>
                <p
                  data-aos="fade-up"
                  className="text-[18px] mt-5 font-medium text-gray-600">
                  {data.hero.subheadline}
                </p>
              </div>
              <div className="flex mt-5 items-center">
                <button
                  data-aos="fade-up"
                  type="button"
                  className="text-white flex items-center bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-[18px] px-4 py-3 md:px-6 md:py-4 text-center ">
                  {data.hero.ctaButtons.primary.text}
                  <img
                    className="ms-2"
                    src="/assets/hero-image/vector.png"
                    alt="vector_img"
                  />
                </button>
                <button
                  data-aos="fade-up"
                  className="flex ms-8 text-[18px] font-medium px-3 py-3 md:py-4 text-black">
                  <img
                    src="/assets/hero-image/play.png"
                    className="me-3"
                    alt="play_img"
                  />
                  {data.hero.ctaButtons.secondary.text}
                </button>
              </div>
              <div>
                <img
                  src="/assets/hero-image/hero-img.png"
                  data-aos="fade-up"
                  alt="hero_img"
                />
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 pt-10 xl:pt-40 flex justify-center">
            <img
              data-aos="fade-up"
              className="absolute w-full h-full right-0 top-0 pointer-events-none max-lg:scale-125 scale-105"
              src="/assets/hero-image/iphone/hero-iphone-bg.svg"
              alt=""
            />
            <div className="relative max-lg:w-8/12 mx-auto">
              <img
                data-aos-delay={300}
                data-aos="fade-up"
                className="absolute -top-[10%] -left-[30%] z-[3]"
                src="/assets/hero-image/iphone/iPhone-13-first.png"
                alt=""
              />
              <img
                data-aos="fade-up"
                data-aos-delay={600}
                className="z-[1] absolute top-[10%] left-[30%]"
                src="/assets/hero-image/iphone/iPhone-13-Pro-third.png"
                alt=""
              />
              <img
                data-aos-delay={450}
                data-aos="fade-up"
                className="z-[2] relative"
                src="/assets/hero-image/iphone/iPhone-13-second.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
