import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'rocaone-bl': ['RocaOne-Bl', 'sans-serif'],
        roca: ['Roca', 'sans-serif'],
        rocaone: ['Roca', 'sans-serif'],
        product: ['Product Sans', 'sans-serif'],
        'product-sans': ['Product Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-2px',
        tight: '-1px',
        normal: '0',
        wide: '3.2px',
      },
      colors: {
        primary: '#0048ff',
        cream: '#fffff5',
        white: '#ffffff',
        black: '#000000',
        gray: {
          DEFAULT: '#666666',
          500: '#7a7a7a',
          600: '#666666',
          700: '#626262',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-2px' }],
        'h2': ['36px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-2px' }],
        'h3': ['24px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-1px' }],
        'body': ['18px', { lineHeight: '1.5' }],
        'body-sm': ['16px', { lineHeight: '1.5' }],
        'small': ['14px', { lineHeight: '1.5' }],
      },
      screens: {
        xs: '320px',
        sm: '375px',
        md: '768px',
        lg: '1440px',
        xl: '1880px',
      },
      maxWidth: {
        '1296': '1296px',
        '1440': '1440px',
        '1880': '1880px',
      },
      borderRadius: {
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
      },
      boxShadow: {
        sm: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        multi: '0px 1px 2px rgba(0, 0, 0, 0.1), 0px 3px 3px rgba(0, 0, 0, 0.09), 0px 7px 4px rgba(0, 0, 0, 0.05), 0px 12px 5px rgba(0, 0, 0, 0.01)',
        card: '0px 1px 3px rgba(161, 161, 161, 0.1), 0px 6px 6px rgba(161, 161, 161, 0.09), 0px 13px 8px rgba(161, 161, 161, 0.05), 0px 23px 9px rgba(161, 161, 161, 0.01)',
        header: '0px 32px 13px rgba(130, 130, 130, 0.01), 0px 18px 11px rgba(130, 130, 130, 0.05), 0px 8px 8px rgba(130, 130, 130, 0.09), 0px 2px 4px rgba(130, 130, 130, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
