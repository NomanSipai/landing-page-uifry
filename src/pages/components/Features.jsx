import data from '../../utils/data.json';
import Image from 'next/image';

const Features = () => {
  return (
    <section className='relative pb-20 lg:pb-40' data-aos='fade-up'>
      <img
        src='/assets/hero-image/circle.svg'
        alt=''
        className='pointer-events-none top-1/2 left-full -translate-x-1/2 -translate-y-1/2 absolute z-[1]'
        data-aos='fade-up'
      />
      <img
        src='/assets/star-left.svg'
        alt=''
        className='pointer-events-none absolute bottom-0 left-0 z-[1]'
        data-aos='fade-up'
      />
      <div className='container px-4 mx-auto relative z-[2]'>
        <div className='flex items-center justify-center flex-wrap'>
          <div className='w-full lg:w-1/2 flex justify-center items-center relative px-4'>
            <img
              data-aos='fade-up'
              src='/assets/circle-bg.svg'
              alt='feature-bg'
              className='absolute top-0 left-0 w-full h-full z-[1] object-contain scale-150'
            />
            <Image
              data-aos-delay={500}
              data-aos='fade-up'
              src='/assets/features-image/mockup.png'
              width={249.25}
              height={504.32}
              className='relative z-[2]'
              alt='mockup_img'
            />
          </div>
          <div className='w-full lg:w-1/2 max-lg:mt-8'>
            <p className='uppercase text-[#FF5555] text-lg font-medium tracking-[0.3em]'>
              {data.features.subheadline}
            </p>
            <h5 className=' font-bold text-[48px] leading-none'>
              {data.features.headline}
            </h5>
            {data.features.ftlist.map((item) => (
              <>
                <div className='mt-10'>
                  <div className='flex my-3' data-aos='fade-up'>
                    <Image
                      src={item.image}
                      height={24}
                      width={24}
                      className='me-3'
                      alt='images'
                    />
                    <h6
                      className='text-[18px] font-semibold'
                      data-aos='fade-up'
                    >
                      {item.title}
                    </h6>
                  </div>
                  <p
                    className='text-[18px] font-medium text-gray-500'
                    data-aos='fade-up'
                  >
                    {item.description}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
