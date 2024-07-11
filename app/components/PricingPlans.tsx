import Link from 'next/link';

function PricingPlans() {
  return (
    <section id='pricing-plans' className='py-16 px-16 bg-tertiary'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-12'>Pricing Plans</h2>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          <div className='bg-fifth text-white p-8 rounded-lg shadow-lg w-full md:w-1/3'>
            <h3 className='text-2xl font-bold mb-4'>A2</h3>
            <h4 className='text-xl font-semibold mb-4'>Basic</h4>
            <ul className='list-disc list-inside mb-8 space-y-2 text-left'>
              <li>Ads featured</li>
              <li>Training in the 1600 most common words</li>
              <li>Final lesson is personalized</li>
              <li>Free 7-day trial-period of subscription model</li>
            </ul>
            <Link
              href='/signin'
              className='bg-fourth text-black py-2 px-4 rounded-full font-bold hover:bg-tertiary transition duration-300'
            >
              FREE
            </Link>
          </div>
          <div className='bg-fifth text-white p-8 rounded-lg shadow-lg w-full md:w-1/3'>
            <h3 className='text-2xl font-bold mb-4'>B2</h3>
            <h4 className='text-xl font-semibold mb-4'>Premium</h4>
            <ul className='list-disc list-inside mb-8 space-y-2 text-left'>
              <li>No Ads</li>
              <li>More than 4000 words available</li>
              <li>All lessons are personalized</li>
              <li>Dedicated support team</li>
              <li>Potential annual option at a discount</li>
            </ul>
            <Link
              href='/signin'
              className='bg-fourth text-black py-2 px-4 rounded-full font-bold hover:bg-tertiary transition duration-300'
            >
              €9.99/month OR €99/year
            </Link>
          </div>
          {/* <div className='bg-fifth text-white p-8 rounded-lg shadow-lg w-full md:w-1/3'>
            <h3 className='text-2xl font-bold mb-4'>C1</h3>
            <h4 className='text-xl font-semibold mb-4'>Enterprise</h4>
            <ul className='list-disc list-inside mb-8 space-y-2 text-left'>
              <li>
                Enable new employees to obtain conversational German swiftly
              </li>
              <li>Option for online classes with trained professionals</li>
              <li>
                Progress updates available to firm + dedicated business support
                to users and firm
              </li>
              <li>Leadership board just for the company</li>
            </ul>
            <Link
              href='/signin'
              className='bg-fourth text-black py-2 px-4 rounded-full font-bold hover:bg-tertiary transition duration-300'
            >
              €150/year per user
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;
