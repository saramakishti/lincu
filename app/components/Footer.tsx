import Image from 'next/image';

function Footer() {
  return (
    <footer id='footer' className='bg-gray-100 text-gray-700 py-4 px-16'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center md:space-y-0'>
        <div className='flex flex-col items-start md:w-1/4'>
          <div className='flex items-center space-x-4 mb-4'>
            <div className='text-2xl font-bold flex gap-4'>
              <Image
                src='/assets/small_logo.svg'
                width={20}
                height={20}
                alt='small-logo'
              />
              <span>LinCu</span>
            </div>
            <div className='flex space-x-4'>
              <a href='#' className='text-blue-500 hover:text-blue-600'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='text-black hover:text-gray-700'>
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a href='#' className='text-black hover:text-gray-700'>
                <i className='fab fa-github'></i>
              </a>
            </div>
          </div>
          <p className='mb-4'>
            Empowering working professionals to master German effortlessly for
            career growth and personal enrichment.
          </p>
          <p>Copyright &copy;2024</p>
        </div>
        <div className='flex flex-col md:flex-row md:w-3/4 justify-around md:space-y-0'>
          <div>
            <h4 className='font-bold mb-2'>LinCu</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#meet-the-team' className='hover:underline'>
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
                <a href='#pricing-plans' className='hover:underline'>
                  LinCu Basic
                </a>
              </li>
              <li>
                <a href='#pricing-plans' className='hover:underline'>
                  LinCu Premium
                </a>
              </li>
              <li>
                <a href='#pricing-plans' className='hover:underline'>
                  LinCu Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold mb-2'>Support</h4>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:underline'>
                  Contact
                </a>
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
