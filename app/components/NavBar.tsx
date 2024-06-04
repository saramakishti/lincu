import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
  return (
    <nav className='bg-secondary py-4 px-16'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-lg font-bold flex gap-5'>
          {/* <Image
            src='/assets/small_logo.svg'
            width={20}
            height={20}
            alt='small-logo'
          /> */}
          <Link href='/'>LinCu</Link>
        </div>
        <div className='flex items-center space-x-4'>
          <a href='#how-it-works' className='text-white hover:text-primary'>
            How it works
          </a>
          <a href='#pricing-plans' className='text-white hover:text-primary'>
            Pricing Plans
          </a>
          <a href='#meet-the-team' className='text-white hover:text-primary'>
            About Us
          </a>
          <Link
            href='/signin'
            className='bg-primary text-white py-2 px-4 rounded-full hover:bg-tertiary transition duration-300'
          >
            Sign In/Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
