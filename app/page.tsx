import Navbar from '@/components/navbar/navbar';
import { DATA } from './data/page.info';
import BlurFade from '@/components/magicui/blur-fade';
import Image from 'next/image';
import Marquee from '@/components/magicui/marquee';
import { inter } from './fonts/fonts';
import HeaderTitle from '@/components/header.title';
import { poppins } from '@/app/fonts/fonts';
import { h1 } from 'framer-motion/client';

const DURATION = 0.4;
export default function Home() {
  return (
    <main className='flex min-h-[100dvh] flex-col items-center w-full px-4 md:px-8'>
      <Navbar />
      <div className='w-full flex flex-col max-w-7xl mx-auto space-y-8  relative top-28'>
        <section id={'/'}>
          <div className='relative flex flex-col space-y-4 py-4'>
            <div className='flex flex-col gap-8 items-center mt-8 top-10 text-center max-w-3xl mx-auto'>
              <div
                className={`${poppins.className} text-5xl md:text-[64px] lg:text-[80px] w-full leading-tight bg-gradient-to-tr from-primary  to-secondary bg-clip-text font-medium text-transparent `}
              >
                {DATA.heroSection.title}
              </div>
              <p className='max-w-md text-base '>
                {DATA.heroSection.description}
              </p>
              <div className='border flex w-full py-2 px-2 rounded-full'>
                <input
                  type='text'
                  placeholder='name@gmail.com'
                  className='flex-1 pl-8 border-none outline-none bg-transparent'
                />
                <button className='bg-primary px-8 py-4 rounded-full'>
                  Notify
                </button>
              </div>
            </div>
            <div className='relative flex md:hidden  h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background-primary '>
              <Marquee className='[--duration:20s]'>
                {DATA.heroSection.images.map((image, index) => (
                  <Image
                    className='rounded-[40px]'
                    src={image}
                    alt='image'
                    width={300}
                    height={300}
                    key={index}
                  />
                ))}
              </Marquee>
              <div className='pointer-events-none absolute left-0 w-1/3 inset-y-0 bg-gradient-to-r from-background-primary'></div>
              <div className='pointer-events-none absolute right-0 w-1/3 inset-y-0 bg-gradient-to-l from-background-primary'></div>
            </div>
            <h1 className='text-base text-center pt-10 md:text-lg'>
              Aleady chosen by leader
            </h1>
            <div className='relative flex h-full bg-white w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background-primary '>
              <Marquee className='[--duration:20s]'>
                {DATA.heroSection.logos.map((log, index) => (
                  <h1 key={index} className='text-4xl'>
                    {log}
                  </h1>
                ))}
              </Marquee>
              <div className='pointer-events-none absolute left-0 w-1/3 inset-y-0 bg-gradient-to-r from-background-primary'></div>
              <div className='pointer-events-none absolute right-0 w-1/3 inset-y-0 bg-gradient-to-l from-background-primary'></div>
            </div>
          </div>
        </section>
        <section id={'feature'}>
          <div className=' relative top-28'>
            <h1>Feature</h1>
          </div>
        </section>
        <section id={'how-is-works'}>
          <div className='relative top-28'>How is work</div>
        </section>
        <section id={'testimonail'}>
          <div className='relative top-28'>Testmonail</div>
        </section>
        <section id={'faqs'}>
          <div className=' relative top-28'>Faqs</div>
        </section>
        <section id={'notify'}>
          <div className='relative top-28'>Notify</div>
        </section>
      </div>
    </main>
  );
}
