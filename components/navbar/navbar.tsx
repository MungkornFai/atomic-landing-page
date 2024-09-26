'use client';
import { DATA } from '@/app/data/page.info';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import BlurFade from '../magicui/blur-fade';

export default function Navbar() {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => {
    setClick((prev) => !prev);
  };
  return (
    <BlurFade
      delay={0.4}
      yOffset={-6}
      className='w-full fixed top-0 z-30 px-4 md:px-8'
    >
      <nav className='w-full md:flex justify-between  items-center mt-8 relative '>
        <div className='flex justify-between items-center'>
          <Link href={'/'}>
            <Image src='/logo.png' alt='logo' width={50} height={50} />
          </Link>
          <div
            className='w-12 h-10 grid border place-items-center rounded-3xl bg-background-secondary/50 md:hidden'
            onClick={handleClick}
          >
            {click ? (
              <Cross1Icon className='h-7 w-7' />
            ) : (
              <HamburgerMenuIcon className='h-7 w-7' />
            )}
          </div>
        </div>
        {/* mobile navbar */}
        {click && (
          <BlurFade
            delay={0.01}
            className='absolute w-full flex justify-center top-16 z-50 md:hidden'
          >
            <ul className='w-4/5 flex flex-col border bg-background-secondary/90 backdrop-blur-xg items-center  rounded-3xl py-8  gap-2 px-2 '>
              {DATA.navbar.map((item) => (
                <li key={item.id} className='text-lg py-2  w-full text-center'>
                  <Link
                    onClick={handleClick}
                    href={item.href}
                    className='text-foreground/90 transition ease-in-out  hover:text-foreground'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </BlurFade>
        )}
        {/* desktop navbar */}
        <div className='hidden md:flex border backdrop-blur-sm  bg-background-secondary/50 py-4 px-8 gap-4 rounded-full'>
          {DATA.navbar.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className='text-base text-foreground hover:text-white transition ease-in-out'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <button className='hidden md:block bg-background-secondary hover:bg-background-secondary/50 transition duration-0 active:scale-95 ease-linear py-4 px-8 rounded-full text-white border'>
          Notify me
        </button>
      </nav>
    </BlurFade>
  );
}
