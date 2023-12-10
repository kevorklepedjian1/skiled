
import React from 'react';
import { withDefaultProps, withImageSource } from './Hocs';

const Card = withDefaultProps(
  withImageSource(({ src, title, body }) => {
    return (
      <div className='relative flex flex-col min-h-[260px] max-h-[322px] px-8 pt-16 pb-10 bg-white shadow-2xl rounded-2xl'>
        <div className='absolute top-[-28px]'>
          <img src={src} alt='' />
        </div>
       
        <div className='min-h-full flex flex-col gap-6'>
          <h4 className='heading-sm text-darkBlue'>{title}</h4>
          <p className='body-md text-gray'>{body}</p>
          <a href='#' className='body-md self-baseline text-pink font-bold hover:text-lightPink'>
            Get Started
          </a>
        </div>
      </div>
    );
  }),
  {
    type: 'animation',
    title: 'Animation',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  }
);

export default Card;
