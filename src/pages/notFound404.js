import React from 'react';
import { Heading } from 'react-web-skeleton';

export default function NotFound404 () {
  return (
    <div className='w-full h-full min-h-[360px] flex items-center justify-center'>
      <div className='text-center text-[#4B5565]'>
        <Heading
          className='text-9xl'
          size="xl"
          weight="semibold"
        >
          404
        </Heading>
        <Heading
          className='mb-2'
          size="s"
          weight="semibold"
        >
          Not Found
        </Heading>
        <Heading
          className='text-xl'
          size="s"
          weight="semibold"
        >
          The resource requested could not be found on this server!
        </Heading>
      </div>
    </div>
  );
}
