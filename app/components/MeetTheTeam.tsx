import Image from 'next/image';

function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Mari Robles',
      title: 'CEO',
      imageUrl: '/assets/female_placeholder.png',
      description: 'Lorem ipsum dolor!',
    },
    {
      name: 'Aleksandra Frydrychowska',
      title: 'COO',
      imageUrl: '/assets/female_placeholder.png',
      description: 'Lorem ipsum dolor!',
    },
    {
      name: 'Tim Thomas',
      title: 'CFO',
      imageUrl: '/assets/male_placeholder.png',
      description: 'Lorem ipsum dolor!',
    },
    {
      name: 'Fabian Hespeler',
      title: 'CSO',
      imageUrl: '/assets/male_placeholder.png',
      description: 'Lorem ipsum dolor!',
    },
    {
      name: 'Robin Scholtz',
      title: 'CTO',
      imageUrl: '/assets/male_placeholder.png',
      description: 'Lorem ipsum dolor!',
    },
    {
      name: 'Sara Pervana',
      title: 'CPO',
      imageUrl: '/assets/female_placeholder.png',
      description: 'MSc. Information Systems Managment',
    },
  ];

  return (
    <section id='meet-the-team' className='py-16 px-16 bg-gray-100'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-8'>Meet the team!</h2>
        <p className='mb-12'>
          Meet the experts who make language learning engaging and effective.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-lg'>
              <div className='flex flex-col items-center'>
                <Image
                  width={100}
                  height={100}
                  src={member.imageUrl}
                  alt={member.name}
                  className='w-32 h-32 rounded-full mb-4'
                />
                <h3 className='text-xl font-bold mb-1'>{member.name}</h3>
                <h4 className='text-gray-500 mb-4'>{member.title}</h4>
                <p className='text-gray-600 mb-4'>{member.description}</p>
                <div className='flex space-x-4'>
                  <a href='#' className='text-gray-400 hover:text-gray-500'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a href='#' className='text-gray-400 hover:text-gray-500'>
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                  <a href='#' className='text-gray-400 hover:text-gray-500'>
                    <i className='fab fa-behance'></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;