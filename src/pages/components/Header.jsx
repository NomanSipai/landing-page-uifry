import Image from 'next/image';
import data from '../../utils/data.json';
import { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setSidebar] = useState(false);
  return (
    <header data-aos='fade-up' className='absolute top-0 left-0 w-full z-50'>
      <img
        src='/assets/star-right.svg'
        alt='star'
        className='absolute right-4 top-16 z-[1]'
      />
      <nav className='container mx-auto mb-4 px-4 z-[2] relative'>
        <div className=' flex flex-wrap items-center justify-between mx-auto mt-4 lg:mt-10'>
          <div className='flex justify-center items-center'>
            <button
              onClick={() => setSidebar(window.innerWidth < 768)}
              data-collapse-toggle='navbar-cta'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-2'
              aria-controls='navbar-cta'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
            <a
              href='https://flowbite.com/'
              className='flex items-center space-x-3 rtl:space-x-reverse'
            >
              <Image
                src='/assets/logo.svg'
                alt='Logo'
                width={117}
                height={44}
                quality={100}
              />
            </a>
            <div
              className={`lg:items-center lg:ms-10 lg:justify-between w-full max-lg:bg-white max-lg:flex-col flex lg:w-auto lg:order-1 max-lg:fixed max-lg:h-screen max-lg:top-0 max-lg:bottom-0 max-lg:left-0 max-lg:w-full  z-50 ${
                isSidebarOpen ? '' : 'max-lg:hidden'
              }`}
            >
              <button
                onClick={() => setSidebar(false)}
                className={`py-2 px-4 lg:hidden text-4xl top-4 right-4 ms-auto bg-gray-200 ${
                  isSidebarOpen ? 'block' : 'max-lg:hidden'
                }`}
              >
                &times;
              </button>
              <ul className='flex flex-col lg:flex-row font-medium text-xl max-lg:p-4'>
                {data.header.left.map((item) => (
                  <li key={item.text}>
                    <a
                      href={item.link}
                      className='block py-2 active active:text-[#FF5555] hover:text-[#FF5555] px-3 text-black rounded lg:bg-transparent  lg:hover:text-[#FF5555] duration-[0.25] transition-all'
                      aria-current='page'
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse'>
            <button
              type='button'
              className='text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-md lg:text-lg xl:min-w-[180px] px-4 py-3 lg:px-8 lg:py-4 text-center dark:bg-gay-600 dark:hover:bg-gay-700 dark:focus:ring-blue-800'
            >
              {data.header.right.download.text}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
