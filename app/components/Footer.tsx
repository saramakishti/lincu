import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer
      id='footer'
      className='bg-gray-100 text-gray-700 py-4 px-4 md:px-16'
    >
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0'>
        <div className='flex flex-col items-start md:w-1/4 space-y-4'>
          <div className='flex items-center space-x-4'>
            <div className='text-2xl font-bold flex gap-4'>
              <Image
                src='/assets/small_logo.svg'
                width={20}
                height={20}
                alt='small-logo'
              />
              <span>LinCu</span>
            </div>
          </div>
          <p>
            Empowering people to master German effortlessly for career growth
            and personal enrichment.
          </p>
          <p>Copyright &copy;2024</p>
        </div>
        <div className='flex flex-col md:flex-row md:w-2/4 justify-between md:space-x-16 space-y-6 md:space-y-0'>
          <div>
            <h4 className='font-bold mb-2'>LinCu</h4>
            <ul className='space-y-2'>
              <li>
                <a href='/#meet-the-team' className='hover:underline'>
                  About us
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold mb-2'>Products</h4>
            <ul className='space-y-2'>
              <li>
                <a href='/#pricing-plans' className='hover:underline'>
                  LinCu Basic
                </a>
              </li>
              <li>
                <a href='/#pricing-plans' className='hover:underline'>
                  LinCu Premium
                </a>
              </li>
              {/* <li>
                <a href='/#pricing-plans' className='hover:underline'>
                  LinCu Enterprise
                </a>
              </li> */}
            </ul>
          </div>
          <div>
            <h4 className='font-bold mb-2'>Support</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/contact' className='hover:underline'>
                  Contact
                </Link>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Privacy
                </a>
              </li>
              <li>
                <a href='#' className='hover:underline'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
