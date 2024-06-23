import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    category: 'Web Development',
    thumbnailUrl: '/images/works/portfolio-website.png',
    description: `Welcome to my personal portfolio website, a digital space where creativity meets professionalism. 
    Here, you will find a showcase of my latest projects, a detailed overview of my skills and experiences, and insightful blog posts on topics ranging from cutting-edge technology to innovative design. 
    Explore my work, learn about my journey, and connect with me to discuss potential collaborations or opportunities. 
    This website is a testament to my dedication to excellence and continuous growth in the ever-evolving fields of web development and data science.`,
    publishedAt: '20 June 2024',
    images: ['/images/works/work-03.png'],
    previewUrl: 'https://yenzeinkok.vercel.app/',
    githubLink: 'https://github.com/KokYenZein/Personal-Portfolio',
    featureList: [
      '100% Fluid Responsive – Fits any device perfectly',
      'Tested on real devices',
      'Flexible Layout',
      `
        Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
        backend`,
      'Unlimited Sidebars',
      'Retina Optimized',
      'Advanced Admin Panel',
      'Demo Import, Content and Sliders',
      'Social Links',
      'Bottom Footer Widgets',
      'Clean &amp; Commented Code',
      'Advanced Typography',
      'Google Fonts – 600+ Font families available',
      'Custom Font Support',
      'Custom Page Templates',
      'Pixel Perfect Design',
      'Quick &amp; Easy Installation &amp; Setup',
      'Custom CSS Ready',
      'HTML5 &amp; CSS3',
      'Easy Customization With Variable Content Sections',
      'Custom Build Theme &amp; Page Options',
      'SEO Ready',
    ],
    attributes: [
      {
        name: 'Client',
        value: 'Pofology',
      },
      {
        name: 'Start Date',
        value: '14 June 2024',
      },
      {
        name: 'End Date',
        value: 'Current',
      },
      {
        name: 'Category',
        value: 'Web Development',
      },
      {
        name: 'Skills',
        value: 'Typescript, Next.js & Tailwind CSS',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
      {
        name: 'Lisence',
        value: 'MIT',
      },
    ],
  },

  {
    id: 2,
    title: 'FoodFrame',
    category: 'Mobile App',
    thumbnailUrl: '/images/works/social-media-app.png',
    description: `FoodFrame is an innovative app designed to help users manage their kitchen inventory more effectively and plan meals more efficiently. By allowing users to input their current food items, the app suggests recipes based on these inputs, helping to use up ingredients that might otherwise expire. It also tracks nutritional information, helping users maintain a balanced diet and make informed food choices.`,
    publishedAt: '06 May 2024',
    images: ['/images/works/foodframe.png'],
    previewUrl: ' ',
    githubLink: 'https://github.com/KokYenZein/FoodFrame',
    featureList: [
      'Image recognition to identify food items from pictures',
      'Real-time inventory management',
      'Recipe suggestions based on available ingredients',
      'Nutritional information tracking',
      'Firebase Realtime Database integration',
      'Machine learning models hosted on Google Cloud',
      'User-friendly React Native interface',
      'Seamless backend and frontend integration',
      'Efficient REST API calls',
      'Advanced state management in React',
      'Robust error handling strategy',
      'Optimized for performance and stability',
      'Responsive and intuitive user interface',
      'Dietary planning and management',
      'Community-driven recipe sharing platform'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'FoodFrame Inc.',
      },
      {
        name: 'Start Date',
        value: '04 May 2024',
      },
      {
        name: 'End Date',
        value: '06 May 2024',
      },
      {
        name: 'Category',
        value: 'Mobile Development',
      },
      {
        name: 'Skills',
        value: 'Firebase, Flask, React Native, Google Cloud',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
      {
        name: 'License',
        value: 'MIT',
      },
    ],
  },

  {
    id: 3,
    title: 'LinguaStream',
    category: 'Web Development',
    thumbnailUrl: '/images/works/marketplace-website.png',
    description: `LinguaStream is a user-friendly website that provides audio translation of YouTube videos into the user's desired languages in real time, removing the need for subtitles and making content more accessible. Furthermore, LinguaStream contains a built-in chatbot to answer questions regarding the video content; enhancing user understanding and engagement by providing additional information and clarifications.`,
    publishedAt: '20 May 2024',
    images: ['/images/works/linguastream.png'],
    previewUrl: ' ',
    githubLink: 'https://github.com/KokYenZein/LinguaStream',
    featureList: [
      'Real-time audio translation of YouTube videos',
      'Built-in chatbot for video content queries',
      'User-friendly React interface',
      'Responsive design with TailwindCSS and ChakraUI',
      'Authentication and user management with SQLite',
      'Integration with YouTube API v3 for video details',
      'Google Cloud services for text-to-speech and translation',
      'Flask backend for handling requests and hosting',
      'Low latency audio streaming',
      'Voice cloning with Bark for unique voice outputs',
      'Async/Await handling for efficient data fetching',
      'Error handling and robust backend/frontend communication',
      'End-to-end process from video fetching to audio output',
      'Support for multiple languages (English, Chinese, French)',
      'Seamless routing and state management in React',
      'Future plans for more languages, accents, and dialects',
      'History page for accessing previous videos'
    ],
    attributes: [
      {
        name: 'Client',
        value: 'LinguaStream Inc.',
      },
      {
        name: 'Start Date',
        value: '18 May 2024',
      },
      {
        name: 'End Date',
        value: '20 May 2024',
      },
      {
        name: 'Category',
        value: 'Web Development',
      },
      {
        name: 'Skills',
        value: 'React, TailwindCSS, ChakraUI, Axios, Flask, SQLite, YouTube API, Google Cloud, Firebase',
      },
      {
        name: 'Current Version',
        value: '1.0.0',
      },
      {
        name: 'License',
        value: 'MIT',
      },
    ],
  },

  // {
  //   id: 4,
  //   title: 'Garments Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/garments-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   title: 'POS System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/point-of-sale.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Multi Vendor Ecommerce System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/ecommerce.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: 'Digital Ecommerce Website Design',
  //   category: 'UI/UX Design',
  //   thumbnailUrl: '/images/works/ecommerce-website-design.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'Digital Marketing App & Website',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/digital-marketing-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: 'Food Delivery System & Ecommerce',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/food-delivery-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: 'Project Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/project-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: 'Learning Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/learning-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   title: 'ERP System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/erp-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
];
