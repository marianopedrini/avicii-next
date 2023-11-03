const quote =
  "I discovered when I started earning money that I didn't really need them. When you have such a surplus of money you don't need, the most sensible, most human and most obvious thing to do is to give to people in need";

const aboutTim = {
  title: 'About Tim',
  texts: [
    'Tim Bergling, perhaps better known as Avicii, was born on 8 September 1989 in Stockholm, Sweden.',
    'His passion for music led to hit songs like "Hey Brother", "Levels" and "Wake me Up" which recently passed 1 billion streams on Spotify and 2 billion views on Youtube.',
    'Tim left a special mark on this world not only through the incredible music he shared with us but also through his humanitarian work where he made sure he gave back to causes close to his heart.',
    'In 2011, he co-founded a charity called "House of Hunger" which helped raise money for "Feeding America" and "FEED Foundation". Through his charitable acts, he also donated nearly €1 million to the Swedish charity Radiohjälpen and teamed up with RED in their fight against HIV and AIDS by donating all proceeds from the song "Divine Sorrow".',
    'Sadly, Tim passed away on April 20 in 2018 but his legacy will forever continue in his music, his philanthropic work and with the Tim Bergling Foundation.',
  ],
  img: '/images/about-tim.png',
  // TODO agregar alt a imagenes
};

const aboutFoundation = {
  title: 'Tim Bergling Foundation',
  texts: [
    'Our vision is a society where children and young people feel well, secure, confident and have the opportunity to reach their full potential. Those who are still unwell should be offered support quickly.',
    `The Tim Bergling Foundation was created by Klas Bergling, Anki Lidén and their family after the death of Tim Bergling, also known as Avicii - one of the most celebrated and beloved producers/performers/songwriters in modern music. Tim's parents have made a significant contribution from his estate to the Foundation and will direct the proceeds from future Avicii projects and the recently released posthumous album "TIM" (2019) to the Foundation.`,
    'The Tim Bergling Foundation advocates for the recognition of suicide as a global health crisis and actively works to remove the stigma associated with suicide and mental health issues.',
  ],
  img: '/images/about-foundation.png',
  // TODO agregar alt a imagenes
};

const discography = [
  {
    id: 1,
    title: 'True',
    img: {
      url: '/images/album-true.webp',
      alt: 'True Album Cover',
    },
    spotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/2H6i2CrWgXE1HookLu8Au0?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    totalDuration: '46 mins 55 sec',
    songs: [
      {
        title: 'Wake Me Up',
        duration: '4:07',
      },
      {
        title: 'You Make Me',
        duration: '3:53',
      },
      {
        title: 'Hey Brother',
        duration: '4:15',
      },
      {
        title: 'Addicted to You',
        duration: '2:28',
      },
      {
        title: 'Dear Boy',
        duration: '7:59',
      },
      {
        title: 'Liar Liar',
        duration: '3:58',
      },
      {
        title: 'Shame on Me',
        duration: '4:13',
      },
      {
        title: 'Lay Me Down',
        duration: '5:00',
      },
      {
        title: "There's Someone",
        duration: '6:21',
      },
      {
        title: 'Heart Upon My Sleeve',
        duration: '4:43',
      },
    ],
  },
  {
    id: 2,
    title: 'Stories',
    img: {
      url: '/images/album-stories.webp',
      alt: 'Stories Album Cover',
    },
    spotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/7dqftJ3kas6D0VAdmt3k3V?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    totalDuration: '54 mins 40 sec',
    songs: [
      {
        title: 'Waiting for Love',
        duration: '3:50',
      },
      {
        title: 'Talk to Myself',
        duration: '3:55',
      },
      {
        title: 'Touch Me',
        duration: '3:06',
      },
      {
        title: 'Ten More Days',
        duration: '4:05',
      },
      {
        title: 'For a Better Day',
        duration: '3:26',
      },
      {
        title: 'Broken Arrows',
        duration: '3:52',
      },
      {
        title: 'True Believer',
        duration: '4:48',
      },
      {
        title: 'City Lights',
        duration: '6:28',
      },
      {
        title: 'Pure Grinding',
        duration: '2:51',
      },
      {
        title: 'Sunset Jesus',
        duration: '4:24',
      },
      {
        title: "Can't Catch Me",
        duration: '3:59',
      },
      {
        title: 'Somewhere in Stockholm',
        duration: '3:22',
      },
      {
        title: 'Trouble',
        duration: '2:51',
      },
      {
        title: 'Gonna Love Ya',
        duration: '3:35',
      },
    ],
  },
  {
    id: 3,
    title: 'Avīci (01)',
    img: {
      url: '/images/album-avici01.webp',
      alt: 'Avici01 Album Cover',
    },
    spotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/1m3mf7xkXIwssVriaaTjOS?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    totalDuration: '17 mins 43 sec',
    songs: [
      {
        title: 'Friend of Mine (featuring Vargas & Lagola)',
        duration: '2:39',
      },
      {
        title: 'Lonely Together (featuring Rita Ora)',
        duration: '3:01',
      },
      {
        title: 'You Be Love (featuring Billy Raffoul)',
        duration: '3:27',
      },
      {
        title: 'Without You (featuring Sandro Cavazza)',
        duration: '3:01',
      },
      {
        title: 'What Would I Change It To (featuring AlunaGeorge)',
        duration: '2:58',
      },
      {
        title: `So Much Better (Avicii remix)`,
        duration: '2:37',
      },
    ],
  },
  {
    id: 4,
    title: 'Tim',
    img: {
      url: '/images/album-tim.webp',
      alt: 'Tim Album Cover',
    },
    spotify: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/album/6Ad1E9vl75ZB3Ir87zwXIJ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    totalDuration: '38 mins 53 sec',
    songs: [
      {
        title: 'Peace of Mind (ft. Vargas & Lagola)',
        duration: '3:00',
      },
      {
        title: 'Heaven (ft. Chris Martin)',
        duration: '4:37',
      },
      {
        title: 'SOS (ft. Aloe Blacc)',
        duration: '2:37',
      },
      {
        title: 'Tough Love (ft. Agnes and Vargas & Lagola)',
        duration: '3:11',
      },
      {
        title: 'Bad Reputation (ft. Joe Janiak)',
        duration: '3:25',
      },
      {
        title: `Ain't a Thing (ft. Bonn)`,
        duration: '3:03',
      },
      {
        title: 'Hold the Line (ft. Arizona)',
        duration: '2:51',
      },
      {
        title: 'Freak (ft. Bonn)',
        duration: '2:59',
      },
      {
        title: 'Excuse Me Mr. Sir (ft. Vargas & Lagola)',
        duration: '3:07',
      },
      {
        title: 'Heart Upon My Sleeve (with Imagine Dragons)',
        duration: '4:14',
      },
      {
        title: 'Never Leave Me (ft. Joe Janiak)',
        duration: '2:51',
      },
      {
        title: 'Fades Away (ft. Noonie Bao)',
        duration: '2:58',
      },
    ],
  },
];

const sitesLinks = [
    {
        text: 'avicii.com',
        url: 'https://avicii.com/',
    },
    {
        text: 'timberglingfoundation.org',
        url: 'https://www.timberglingfoundation.org/',
    },
]

const socialMedia = [
    {
        name: 'Spotify',
        icon: 'spotify.svg',
        url: 'https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6?si=IYzh3XGLTo2t_CzCMTro0g',
    },
    {
        name: 'Youtube',
        icon: 'youtube.svg',
        url: 'https://www.youtube.com/user/AviciiOfficialVEVO',
    },
    {
        name: 'Apple Music',
        icon: 'apple-music.svg',
        url: 'https://itunes.apple.com/ca/artist/avicii/298496035',
    },
]

const footerDisclaimer = 'This site is a fan project dedicated to Tim, providing information and entertainment. We have no official affiliation with Avicii, and we are non-profit. The content is for entertainment and informational purposes, and we do not guarantee its accuracy. We use material with respect to copyright and are not responsible for linked external websites.'

export { quote, aboutTim, aboutFoundation, discography, sitesLinks, socialMedia, footerDisclaimer };
