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
      <p>
        Top–notch designs,
        <br /> delivered at your doorstep
      </p>
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
