import { Icon } from '@/components/icon';

export const DATA = {
  heroSection: {
    title: (
      <div>
        Design work,
        <br />
        the efficient way
      </div>
    ),
    description:
      'Innovative design solutions for technology firms and emerging businesses weary of the typical aesthetic methodology. Arriving shortly.',
    images: [
      '/image_01.png',
      '/image_02.png',
      '/image_03.png',
      '/image_04.png',
      '/image_05.png',
    ],
    logos: [
      'duolingo',
      'J.P.Morgan',
      'pinterest',
      'revolut',
      'shopify',
      'volvo',
    ],
    introduct: {
      headerTitle: '* Introduct bolt',
      description: `You need top-notch design to stand out in the tech world, but hiring in-house designers can be costly and time-consuming. 
`,
    },
  },
  featurs: {
    title: 'What you you`ll get',
    description: 'We resolve problems associated with creative procedures.',
    cards: [
      {
        id: 1,
        title: 'Cost effective solution',
        description: 'Get high-quality design work at a fraction of the cost.',
        icon: <Icon.chart className='h-40 w-40' />,
      },
      {
        id: 2,
        title: 'Tailor–made design',
        description: 'We`ve got the expertise to make your vision a reality.',
        icon: <Icon.chart className='h-40 w-40' />,
      },
      {
        id: 3,
        title: 'Scalable as you grown',
        description: 'We’re ready to meet your evolving needs.',
        icon: <Icon.chart className='h-40 w-40' />,
      },
    ],
    subcards: [
      {
        title: 'Workflow integrate',
        description: 'Seamless connect all your existing app',
        image: ['/app.png'],
      },
      {
        title: 'Collaborate real-time',
        description: 'Seamless connect all your existing app',
        image: ['/avatar_01.jpg', '/avatar_02.jpg', '/avatar_03.jpg'],
      },
    ],
    badge: [
      'Design workshops',
      'workshops',
      'Trend repeads',
      'Rollover hours',
      'Premuim designers',
      'Multilingual support',
    ],
  },
  howItWorksSection: {
    title: 'Top-notch design',
    description: (
      <>
        Top–notch designs,
        <br /> delivered at your doorstep
      </>
    ),
    cards: [
      {
        image: '/icon_01.png',
        title: 'Tell us your vision',
        description:
          'Choose a plan and share your design project details with us: we’re here to listen.',
      },
      {
        image: '/icon_02.png',
        title: 'Receive the magic',
        description:
          'Sit back and relax: our expert designers will turn your vision into reality.',
      },
      {
        image: '/icon_03.png',
        title: 'Get ongoing support',
        description:
          'Your subscription ensures you have continuous access to our design team.',
      },
    ],
  },
  testimonailSection: {
    testimonails: [
      {
        id: 1,
        logo: <Icon.loom className='size-10 text-white' />,
        logoName: 'loom',
        text: 'Creative, innovative and strategic. We have great achievements made together and looking to more',
        stars: ['*', '*', '*', '*', '*'],
        name: 'Henry Arthur',
        position: 'Head of engineer,Loom',
      },
      {
        id: 2,
        logo: <Icon.intercom className='size-10 text-white' />,
        logoName: 'intercom',
        text: 'Incredible group of people and talented professionals. Focused on the development of flexible ideas',
        stars: ['*', '*', '*', '*', '*'],
        name: 'Jerome Bell',
        position: 'Product Analyst,Intercom',
      },
      {
        id: 3,
        logo: <Icon.abstract className='size-10 text-white' />,
        logoName: 'abstract',
        text: 'A truly innovative approach to gameplay that sets this agency apart from its peers within the broader industry"',
        stars: ['*', '*', '*', '*', '*'],
        name: 'Elenor Pena',
        position: 'Head of Product desighn,Abstract',
      },
    ],
  },
  faqSection: {
    title: 'FAQs',
    description: 'Got questions? We`ve got answers.',
    questions: [
      {
        id: 1,
        question: 'Can I use Atomic Template for commercial purposes?',
        answer:
          'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. See more at https://www.gnu.org/licenses/gpl-3.0.html',
      },
      {
        id: 2,
        question: 'Accept the Template Usage Disclaimer',
        answer:
          'The graphic resources used in this template are owned by their respective creators, and their use is subject to the specified licensing terms. Users are responsible for adhering to these terms and should contact the original creators for any inquiries regarding the usage or licensing of the graphic resources.',
      },
      {
        id: 3,
        question: 'Disclaimer of Responsibility for Usage',
        answer:
          'The authors disclaim any liability for damages or issues arising from the use of these graphic resources outside the context of this template. End users are solely responsible for ensuring compliance with the specified licensing terms, as well as any applicable laws or regulations.',
      },
      {
        id: 4,
        question: 'Graphic Assets attribution Notice',
        answer:
          'We have made every effort to appropriately credit the authors and creators of the graphic resources used in this template. However, if you believe that we may have inadvertently missed or misrepresented your work, we sincerely apologize.',
      },
      {
        id: 5,
        question: 'How to contact the author of this Template?',
        answer:
          'For questions or clarifications, please contact hello@andreamontini.me',
      },
    ],
  },
  navbar: [
    {
      id: 1,
      title: 'Feature',
      href: '#feature',
    },
    {
      id: 2,
      title: 'How is works',
      href: '#how-is-works',
    },
    {
      id: 3,
      title: 'Testimonail',
      href: '#testimonail',
    },
    {
      id: 4,
      title: 'FAQs',
      href: '#faqs',
    },
    {
      id: 5,
      title: 'Notify',
      href: '#notify',
    },
  ],
};
