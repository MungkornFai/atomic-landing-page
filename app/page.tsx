import Navbar from '@/components/navbar/navbar';
import { DATA } from './data/page.info';
import BlurFade from '@/components/magicui/blur-fade';
import Image from 'next/image';
import Marquee from '@/components/magicui/marquee';
import { inter } from './fonts/fonts';
import HeaderTitle from '@/components/header.title';
import { poppins } from '@/app/fonts/fonts';

const DURATION = 0.4;
export default function Home() {
  return (
    <main className='flex min-h-[100dvh] flex-col items-center w-full px-4 md:px-8'>
      <Navbar />
    </main>
  );
}
