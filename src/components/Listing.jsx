import React from 'react';
import Card from './Card';

const Listing = () => {
  const PopularCourses = [
    {
      type: 'animation',
      title: 'Animation',
      body: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    },
    {
      type: 'design',
      title: 'Design',
      body: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    },
    {
      type: 'photography',
      title: 'Photography',
      body: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    },
    {
      type: 'crypto',
      title: 'Crypto',
      body: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    },
    {
      type: 'business',
      title: 'Business',
      body: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    },
  ];

  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[433px] sm:mt-64 gap-x-8 gap-y-20'>
      <div className='primaryGradient text-white min-h-[128px] max-h-[322px] pt-6 px-[28px] sm:px-8 sm:pt-16 sm:pb-10 rounded-2xl'>
        <h3 className='heading-sm md:heading-md'>Check out our most popular courses!</h3>
      </div>
      {PopularCourses.map((course, index) => (
        <Card key={index} {...course} />
      ))}
    </main>
  );
};

export default Listing;
