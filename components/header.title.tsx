import React from 'react';

export default function HeaderTitle({ title }: { title: string }) {
  return (
    <h2 className=' absolute bottom-0 text-xs text-[#DDFF00] flex items-center '>
      <span className='bg-[#DDFF00] text-2xl flex h-4 w-4 rounded-full mr-2 items-center justify-center text-black text-center'>
        *
      </span>
      {title}
    </h2>
  );
}
