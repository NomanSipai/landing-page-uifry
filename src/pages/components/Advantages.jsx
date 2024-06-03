import data from '../../utils/data.json';
import Image from 'next/image';

const Advantages = () => {
  return (
    <section className='relative'>
      <div className='container px-4 mx-auto relative z-[2]'>
        <div className='flex items-center justify-center flex-wrap'>
          <div className='w-full lg:w-1/2'>
            <p
              className='uppercase text-[#FF5555] text-[18px] font-medium tracking-[0.3em]'
              data-aos='fade-up'
            >
              {data.advantages.subheadline}
            </p>
            <h5
              className='font-bold text-[48px] leading-none'
              data-aos='fade-up'
            >
              {data.advantages.headline}
            </h5>
            <div className='mt-10' data-aos='fade-up'>
              <h6 className='text-[28px] font-semibold flex items-center mb-5'>
                <span className='bg-[#ff5555] flex justify-center items-center p-3 rounded-full me-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='white'
                    className='bi bi-bell'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6' />
                  </svg>
                </span>
                {data.advantages.title}
              </h6>
              <p className='text-[18px] font-medium text-gray-500'>
                {data.advantages.description}
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 max-lg:mt-8 px-4 flex justify-center items-center relative'>
            <img
              src='/assets/star-right.svg'
              alt='star'
              className='absolute right-0 top-0 z-[1]'
            />
            <Image
              src='/assets/advantages-image/iPhone-13-Pro2.png'
              alt='feature-bg'
              height={600}
              width={600}
              className='max-w-lg w-full mx-auto h-auto object-contain'
              data-aos='fade-up'
            />
          </div>
        </div>
        <div className='flex justify-center items-center flex-wrap'>
          <div className='w-full lg:w-1/2'>
            <Image
              src='/assets/advantages-image/iPhone-13-Pro.png'
              width={600}
              height={600}
              alt='mockup_img'
              className='w-full max-w-lg mx-auto'
              data-aos='fade-up'
            />
          </div>
          <div className='w-full lg:w-1/2' data-aos='fade-up'>
            <h6 className='text-[28px] font-semibold flex items-center mb-5'>
              <span className='bg-[#ff5555] p-3 flex justify-center items-center rounded-full me-4'>
                <Image
                  src='/assets/advantages-image/Icon.png'
                  height={24}
                  width={24}
                  alt='icon'
                />
              </span>
              {data.advantages.title2}
            </h6>
            <p className='text-[18px] font-medium text-gray-500'>
              {data.advantages.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
