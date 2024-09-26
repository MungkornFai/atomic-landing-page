import Navbar from '@/components/navbar/navbar';
import { DATA } from './data/page.info';
import BlurFade from '@/components/magicui/blur-fade';
import Image from 'next/image';
import Marquee from '@/components/magicui/marquee';
import { poppins } from '@/app/fonts/fonts';
import Introduce from '@/components/introduce';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';

const DURATION = 0.2;
export default function Home() {
  return (
    <main className='flex min-h-[100dvh] flex-col items-center w-full px-4 md:px-8'>
      <Navbar />
      <div className='w-full flex flex-col max-w-7xl mx-auto space-y-2  relative top-28'>
        <section id={'/'}>
          <div className='relative flex flex-col space-y-4 '>
            <div className='flex flex-col gap-8 items-center mt-8 top-10 text-center max-w-3xl mx-auto'>
              <BlurFade delay={DURATION}>
                <div
                  className={`${poppins.className} text-5xl md:text-[64px] lg:text-[80px] w-full leading-tight bg-gradient-to-tr from-primary  to-secondary bg-clip-text font-medium text-transparent `}
                >
                  {DATA.heroSection.title}
                </div>
              </BlurFade>
              <BlurFade delay={DURATION * 1}>
                <p className='max-w-md text-base '>
                  {DATA.heroSection.description}
                </p>
              </BlurFade>
              <div className='border flex w-full py-2 px-2 rounded-full'>
                <input
                  type='text'
                  placeholder='name@gmail.com'
                  className='flex-1 pl-8 border-none outline-none bg-transparent'
                />
                <button className='bg-[#DDFF00] text-black px-8 py-4 rounded-full'>
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
            <div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background-primary '>
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
            <Introduce>
              <BlurFade delay={DURATION} inView>
                <h1 className='text-base uppercase text-[#DDFF00]'>
                  {DATA.heroSection.introduct.headerTitle}
                </h1>
              </BlurFade>
              <BlurFade delay={DURATION * 2} inView>
                <p className='text-2xl lg:text[44px] text-primary-foreground'>
                  <span className='text-white'>We know what’s going on.</span>
                  {DATA.heroSection.introduct.description}
                  <span className='text-white'>
                    That’s when Atomic comes in.
                  </span>
                </p>
              </BlurFade>
            </Introduce>
          </div>
        </section>
        <section id={'feature'}>
          <div className=' relative flex flex-col space-y-4 '>
            <Introduce>
              <BlurFade delay={DURATION} inView>
                <h1 className='text-base uppercase text-[#DDFF00]'>
                  {DATA.featurs.title}
                </h1>
              </BlurFade>
              <BlurFade delay={DURATION * 2} inView>
                <p className='text-2xl lg:text[44px] bg-gradient-to-r from-primary to-secondary bg-clip-text font-medium text-transparent'>
                  {DATA.featurs.description}
                </p>
              </BlurFade>
            </Introduce>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
              {DATA.featurs.cards.map((item, id) => (
                <BlurFade delay={DURATION * 2 + id * 0.5} inView key={item.id}>
                  <Card>
                    <CardContent className='flex flex-col items-center space-y-2 '>
                      <div className=''>{item.icon}</div>
                      <div className='self-start text-white space-y-2'>
                        <CardTitle className='text-[26px]'>
                          {item.title}
                        </CardTitle>
                        <CardDescription className='text-lg'>
                          {item.description}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
            <div className='flex flex-col space-y-4'>
              <BlurFade delay={DURATION * 3} inView>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <Card>
                    <CardContent className='flex justify-between p-4 gap-2'>
                      <div className='flex flex-col gap-2 justify-center'>
                        <CardTitle className='text-[26px] text-white'>
                          {DATA.featurs.subcards[0].title}
                        </CardTitle>
                        <CardDescription className='text-lg'>
                          {DATA.featurs.subcards[0].description}
                        </CardDescription>
                      </div>
                      <Image
                        src={'/app.png'}
                        alt='app'
                        width={200}
                        height={200}
                      />
                    </CardContent>
                  </Card>

                  <Card className='relative w-full'>
                    <CardContent className='flex justify-between p-4 gap-2 '>
                      <div className='flex flex-col gap-2 justify-center'>
                        <CardTitle className='text-[26px] text-white'>
                          {DATA.featurs.subcards[0].title}
                        </CardTitle>
                        <CardDescription className='text-lg'>
                          {DATA.featurs.subcards[0].description}
                        </CardDescription>
                      </div>

                      {DATA.featurs.subcards[1].image.map((image, id) => (
                        <Avatar key={id} className=' border-[#DDFF00] border-4'>
                          <AvatarImage src={image} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </BlurFade>
            </div>

            <div className='hidden md:grid md:grid-cols-4 gap-4  max-w-2xl mx-auto w-full place-items-center'>
              {DATA.featurs.badge.map((item, id) => (
                <Badge key={id} className=' p-2  text-center rounded'>
                  {item}
                </Badge>
              ))}
            </div>
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
