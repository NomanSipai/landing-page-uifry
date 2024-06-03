import data from "../../utils/data.json";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="max-lg:mt-20">
      <div className="container px-4 mx-auto relative pb-10 lg:pb-20">
        <img
          src="/assets/star-left.svg"
          className="absolute bottom-0 left-0 z-[1]"
          alt=""
        />
        <p
          className="text-center uppercase tracking-[0.3em] text-[18px] font-medium mb-2"
          data-aos="fade-up">
          {data.testimonial.subheadline}
        </p>
        <h5
          className="text-center font-bold text-[48px] leading-none max-w-md mx-auto"
          data-aos="fade-up">
          {data.testimonial.headline}
        </h5>
        <div className="flex flex-wrap mt-10 lg:mt-20 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/assets/testimonial-image/main-image.png"
              width={439.37}
              height={416.89}
              className="w-full max-w-xl mx-auto"
              alt="testimonial_img"
              data-aos="fade-up"
            />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="mt-10">
              <h6
                className="text-[28px] font-semibold leading-none mb-5"
                data-aos="fade-up">
                {data.testimonial.title}
              </h6>
              <p
                className="text-[18px] font-medium text-gray-500 leading-relaxed"
                data-aos="fade-up">
                {data.advantages.description2}
              </p>
            </div>
            <div className="flex mt-5" data-aos="fade-up">
              <Image
                className="duration-25 transition-all hover:opacity-100 hover:scale-100 w-10 h-10 "
                src="/assets/testimonial-image/users/img1.png"
                width={40}
                height={40}
                alt="user"
              />
              <Image
                className="duration-25 transition-all hover:opacity-100 scale-75  opacity-55 hover:scale-100 w-10 h-10 "
                src="/assets/testimonial-image/users/img-2.png"
                width={40}
                height={40}
                alt="user"
              />
              <Image
                className="duration-25 transition-all hover:opacity-100 scale-75  opacity-55 hover:scale-100 w-10 h-10 "
                src="/assets/testimonial-image/users/img-3.png"
                width={40}
                height={40}
                alt="user"
              />
              <Image
                className="duration-25 transition-all hover:opacity-100 scale-75  opacity-55 hover:scale-100 w-10 h-10 "
                src="/assets/testimonial-image/users/img-4.png"
                width={40}
                height={40}
                alt="user"
              />
              <Image
                className="duration-25 transition-all hover:opacity-100 scale-75  opacity-55 hover:scale-100 w-10 h-10"
                src="/assets/testimonial-image/users/img-5.png"
                width={40}
                height={40}
                alt="user"
              />
            </div>
            <p className="mt-5 text-[18px] font-semibold" data-aos="fade-up">
              Nick Jonas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
