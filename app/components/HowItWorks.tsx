import Image from 'next/image';
function HowItWorks() {
  return (
    <section id='how-it-works' className='py-16 px-16 bg-gray-100'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 flex justify-center mb-8'>
          <Image
            src='/assets/sample.png'
            width={300}
            height={300}
            alt='sample'
          />
        </div>
        <div className='lg:w-1/2 text-black mb-8 lg:mb-0'>
          <h2 className='text-4xl font-bold mb-8'>Not another language app</h2>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <div className='bg-secondary text-white rounded-full p-2 mr-4'></div>
              <span className='font-bold'>
                Pedagogy employed at Harvard and Princeton
              </span>
            </li>
            <li className='flex items-center'>
              <div className='bg-secondary text-white rounded-full p-2 mr-4'></div>
              <span className='font-bold'>
                Supported by linguistic researchers
              </span>
            </li>
            <li className='flex items-center'>
              <div className='bg-secondary text-white rounded-full p-2 mr-4'></div>
              <span className='font-bold'>
                Vocabulary centered approach, implemented by humans not
                algorithms
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
