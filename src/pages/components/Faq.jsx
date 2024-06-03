import data from '../../utils/data.json';
const Faq = () => {
  return (
    <>
      <section className='py-10 lg:py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-lg'>
            <p
              className='uppercase mb-2 text-[#FF5555] text-[18px] font-medium tracking-[0.2em]'
              data-aos='fade-up'
            >
              {data.faq.subheadline}
            </p>
            <h5
              className='font-bold text-[48px]  leading-none'
              data-aos='fade-up'
            >
              {data.faq.headline}
            </h5>
          </div>
          <div className='mt-8'>
            <div className='flex flex-wrap -m-4 items-center'>
              {data.faq.faqList.map((item, i) => (
                <div key={i} className='p-4 w-full lg:w-1/2'>
                  <div
                    data-aos='fade-up'
                    className={`rounded-md p-8 ${
                      item.light ? 'bg-[#FF5555]' : ''
                    }`}
                  >
                    <p
                      className={`text-[28px] font-semibold mb-2 ${
                        item.light ? 'text-white' : ''
                      }`}
                    >
                      {item.question}
                    </p>
                    <p
                      className={`text-[18px] ${
                        item.light ? 'text-white' : 'text-gray-500'
                      } font-medium`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
