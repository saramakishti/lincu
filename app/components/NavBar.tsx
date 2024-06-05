'use client';
import { useState } from 'react';
import Link from 'next/link';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-secondary py-4 px-4 md:px-16'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-lg font-bold flex gap-5'>
          <Link href='/'>LinCu</Link>
        </div>
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
        <div className='hidden md:flex md:w-auto'>
          <ul className='flex flex-col md:flex-row md:items-center mt-4 md:mt-0 md:space-x-4'>
            <li>
              <a
                href='/#how-it-works'
                className='text-white hover:text-primary block px-4 py-2'
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href='/#pricing-plans'
                className='text-white hover:text-primary block px-4 py-2'
              >
                Pricing Plans
              </a>
            </li>
            <li>
              <a
                href='/#meet-the-team'
                className='text-white hover:text-primary block px-4 py-2'
              >
                About Us
              </a>
            </li>
            <li>
              <Link
                href='/signin'
                className='bg-primary text-white py-2 px-4 rounded-full hover:bg-tertiary transition duration-300 block text-center md:inline-block'
              >
                Sign In/Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col space-y-2 mt-4'>
            <li>
              <a
                href='/#how-it-works'
                className='text-white hover:text-primary block px-4 py-2'
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href='/#pricing-plans'
                className='text-white hover:text-primary block px-4 py-2'
              >
                Pricing Plans
              </a>
            </li>
            <li>
              <a
                href='/#meet-the-team'
                className='text-white hover:text-primary block px-4 py-2'
              >
                About Us
              </a>
            </li>
            <li>
              <Link
                href='/signin'
                className='bg-primary text-white py-2 px-4 rounded-full hover:bg-tertiary transition duration-300 block text-center'
              >
                Sign In/Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
