module.exports = {
  mode: 'jit',
  purge: [

    './public/**/*.html',

    './src/**/*.{js,jsx,ts,tsx,vue}',

  ],
  prefix: 'tw-',
  important: true,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1536px',
      },
      colors: {
        transparent: 'transparent',
        black: {
          default: '#000000',
          secondary: '#0E0E0E'
        },
        white: {
          default: '#ffffff'
        },
        green: {
          default: '#2ECDA7',
          darkgreen: '#25A989'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
