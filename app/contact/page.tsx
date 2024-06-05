import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Image from 'next/image';

export default function Contact() {
  return (
    <main>
      <NavBar />
      <section className='py-12 bg-gray-100'>
        <div className='container mx-auto px-16'>
          <h1 className='text-4xl font-bold text-center mb-8'>Contact Us</h1>
          <div className='flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/2 mb-8 md:mb-0'>
              <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
              <p className='text-lg mb-4'>
                For any inquiries, please email us at:
              </p>
              <p className='text-lg font-semibold text-primary'>
                lincuberlin@gmail.com
              </p>
            </div>
            <div className='w-full md:w-1/2 mb-8 md:mb-0'>
              <h2 className='text-2xl font-bold mb-4'>Our Location</h2>
              <p className='text-lg mb-4'>We are located at TU Berlin:</p>
              <div className='w-full h-64'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1130.1613396119035!2d13.322731699447626!3d52.51139011112799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85164a0abdb9d%3A0x2c7cb74f958e5944!2sTU%20Berlin%2C%20EINS%20-%20Innovationsplattform%20und%20Coworkingspace!5e0!3m2!1sen!2sde!4v1717617270494!5m2!1sen!2sde'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  aria-hidden='false'
                ></iframe>
                <br />
                <small>
                  <a href='https://www.openstreetmap.org/?mlat=52.51288&mlon=13.32627#map=18/52.51288/13.32627'>
                    View Larger Map
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
