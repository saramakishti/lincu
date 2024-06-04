import Link from 'next/link';

function Newsletter() {
  return (
    <section id='newsletter' className='py-16 bg-tertiary'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8'>
          <span className='bg-primary text-black p-2 rounded-lg'>
            Subscribe
          </span>{' '}
          <span>To Newsletter</span>
          <br />
          <div className='mt-2'>
            <span>To Get</span>{' '}
            <span className='bg-fourth text-black p-2 rounded-lg'>Updates</span>
          </div>
        </h2>
        <form className='flex flex-col items-center space-y-4'>
          <input
            type='email'
            placeholder='Enter Your Email'
            className='w-full md:w-1/3 p-4 rounded-full bg-black text-white placeholder-gray-400'
          />
          <Link
            href='/signin'
            className='bg-secondary text-white py-2 px-6 rounded-full text-lg hover:bg-primary transition duration-300'
          >
            Subscribe
          </Link>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
