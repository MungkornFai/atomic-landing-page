import React from 'react';

export default function HeaderTitle({ title }: { title: string }) {
  return (
    <div className='flex items-center justify-center bg-white '>
      <h1 className=''>*</h1> {title}
      <h1 className='text-[#DDFF00]/80 text-xl'></h1>
    </div>
  );
}
