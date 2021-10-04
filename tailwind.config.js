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
        dark: {
          default: '#000000',
          text: '#ffffff',
        },
        light: {
          background: '#F5F5F5',
          text: '#000000'
        },
        green: {
          default: '#2ECDA7',
          darkgreen: '#25A989'
        }
      },
      // TODO: Look at how to implement this image for each multi-page image
      backgroundImage: {
        'music-pattern':
          "linear-gradient(to right bottom, rgb(46,205,167), rgba(0, 0, 0, 0)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      },
      fontFamily: {
        'default' : ['Syncopate', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
