import Image from 'next/image';
export default function SignIn() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4'>
      <h1 className='text-3xl md:text-4xl mb-8 text-center'>Coming Soon!</h1>
      <h4 className='text-center'>
        Excited about what we are working on? Check our{' '}
        <a
          className='text-primary cursor-pointer'
          href='https://www.figma.com/proto/4hLYGvyU7kvDWT4nL9rOJD/LinCu?t=bV2hqFvehTKeQpQ0-1'
          target='_blank'
          rel='noopener noreferrer'
        >
          initial prototype here!
        </a>
      </h4>
      <h4>or scan this QR code:</h4>
      <br />
      <Image src='/assets/figma.png' width={300} height={300} alt='figma' />
      <br />
      <a href='/'>Go back</a>
    </div>
  );
}
