import Image from 'next/image';
import Link from 'next/link';

import NavBar from './components/NavBar';
import PricingPlans from './components/PricingPlans';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import MeetTheTeam from './components/MeetTheTeam';
import HowItWorks from './components/HowItWorks';

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <PricingPlans />
      <MeetTheTeam />
      <Newsletter />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className='bg-tertiary flex items-center h-screen'>
      <div className='container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-16'>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className='w-full h-3/4 flex items-center justify-center mb-8 md:mb-0'>
            <Image
              width={500}
              height={500}
              src='/assets/karl-nobg.png'
              alt='Mascot'
              className='object-contain'
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col items-start justify-center space-y-8 text-left px-4 md:px-8 mt-8 md:mt-0'>
          <div className='space-y-4'>
            <div className='flex flex-wrap gap-2'>
              <div className='bg-fifth text-white font-bold p-4 rounded-lg text-2xl md:text-4xl'>
                Learn
              </div>
              <div className='bg-primary text-black font-bold p-4 rounded-lg text-2xl md:text-4xl'>
                the
              </div>
              <div className='bg-secondary text-white font-bold p-4 rounded-lg text-2xl md:text-4xl'>
                Language,
              </div>
            </div>
            <div className='flex flex-wrap gap-2'>
              <div className='bg-gray-100 text-tertiary font-bold p-4 rounded-lg text-2xl md:text-4xl'>
                Live
              </div>
              <div className='bg-fourth text-black font-bold p-4 rounded-lg text-2xl md:text-4xl'>
                the
              </div>
              <div className='bg-primary text-white font-bold p-4 rounded-lg text-2xl md:text-4xl'>
                Culture.
              </div>
            </div>
          </div>
          <p className='text-black text-base md:text-lg'>
            Empowering working professionals to master German effortlessly for
            career growth and personal enrichment.
          </p>
          <Link
            href='/signin'
            className='bg-secondary text-white py-2 px-4 md:px-6 rounded-full text-base md:text-lg hover:bg-primary transition duration-300'
          >
            Start Learning
          </Link>
        </div>
      </div>
    </section>
  );
}
