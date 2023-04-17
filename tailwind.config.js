/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': {
          1: '#E2E7FF',
          2: '#ABBAF9',
          3: '#4659A7',
          4: '#394B9F',
          5: '#3D4E94',
          6: '#29376E',
        },
        neutral: {
          1: '#FFFFFF',
          2: '#BEBEBE',
          3: '#909090',
          4: '#5C5C5C',
          5: '#3D4E94',
          6: '#000000',
        },
        'neutral-variant': {
          1: '#FFFFFF',
          2: '#BEC0C9',
          3: '#83859B',
          4: '#565970',
          5: '#383849',
          6: '#000000',
        },
        highlights: {
          1: '#75B4C0',
          2: '#6CCBB4',
          3: '#32936F',
          4: '#DD403A',
          5: '#BB3F3C',
          6: '#FFC077',
        },
        alternate: {
          1: '#FDF2DF',
          2: '#F8C67E',
          3: '#F28F00',
          4: '#E0F1EE',
          5: '#59B19B',
          6: '#2C8F75',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Roboto', 'sans-serif'],
        display: ['var(--font-display)', 'Jost', 'Roboto', 'sans-serif', 'Montserrat'],
      },
      fontSize: {
        'display-extra-large': [
          '86px',
          {
            fontFamily: 'Jost',
            fontWeight: 800,
            lineHeight: 1.24,
            letterSpacing: '-1px',
          },
        ],
        'display-large': [
          '84px',
          {
            fontFamily: 'Jost',
            fontWeight: 300,
            lineHeight: 1.21,
            letterSpacing: '-1.25px',
          },
        ],
        'title-large': [
          '64px',
          {
            fontFamily: 'Jost',
            fontWeight: 500,
            lineHeight: 0.87,
            letterSpacing: '-1.25px',
          },
        ],
        'title-medium': [
          '50px',
          {
            fontFamily: 'Jost',
            fontWeight: 400,
            lineHeight: 0.72,
            letterSpacing: '-1.25px',
          },
        ],

        'body-title': [
          '34px',
          {
            fontFamily: 'Jost',
            fontWeight: 600,
            lineHeight: 0.49,
            letterSpacing: '-1.25px',
          },
        ],

        'footer-title': [
          '18px',
          {
            fontFamily: 'Jost',
            fontWeight: 500,
            lineHeight: 0.26,
            letterSpacing: '0px',
          },
        ],
        'title-emphasis-large': [
          '24px',
          {
            fontFamily: 'Montserrat',
            fontWeight: 700,
            lineHeight: 0.29,
            letterSpacing: '-0.5px',
          },
        ],
        'title-content-large': [
          '24px',
          {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            lineHeight: 0.29,
            letterSpacing: '-0.5px',
          },
        ],
        'body-content': [
          '20px',
          {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            lineHeight: 0.29,
            letterSpacing: '0px',
          },
        ],
        'subheading-content': [
          '20px',
          {
            fontFamily: 'Jost',
            fontWeight: 500,
            lineHeight: 0.29,
            letterSpacing: '0px',
          },
        ],
        'footer-content': [
          '14px',
          {
            fontFamily: 'Jost',
            fontWeight: 500,
            lineHeight: 0.2,
            letterSpacing: '-0px',
          },
        ],
        // ,
        // caption: [
        //   '12px',
        //   {
        //     letterSpacing: '0.4px',
        //   },
        // ],
        // overline: [
        //   '10px',
        //   {
        //     letterSpacing: '1.5px',
        //   },
        // ],
      },
    },
    plugins: [require('@tailwindcss/typography')],
  },
};
