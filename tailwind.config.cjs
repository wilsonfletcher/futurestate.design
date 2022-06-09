const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'
  ],
  // safelist: ['text-grey'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0e0f0f',
      white: '#fff',
      yellow: {
        DEFAULT: 'hsl(51deg 100% 49%)' // #FBD400
      },
      red: '#B71B0B',
      grey: {
        DEFAULT: '#2e2d2c',
        dark: '#2e2d2c',
        light: '#ecedef'
      }
    },
    fontSize: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5rem' // 80px
    },
    extend: {
      backgroundImage: {
        'open-quotes':
          "url(\"data:image/svg+xml,%3Csvg width='96' height='46' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M45.474 0v46H0c0-12.2 4.791-23.9 13.319-32.527C21.847 4.846 33.413 0 45.474 0zM96 0v46H50.526c0-12.2 4.791-23.9 13.32-32.527C72.372 4.846 83.94 0 96 0z' fill='%232E2D2C' /%3E%3C/svg%3E\")"
      },
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans]
      },
      height: {
        'header-height': 100
      },
      lineHeight: {
        'semi-tight': '1.3333'
      },
      spacing: {
        22: '5rem', // 80px
        23: '5.5rem', // 88px
        29: '7.5rem' // 120px
      },
      width: {
        '1/2-20': 'calc(50% - 1.25rem)',
        '1/3-10': 'calc(33.3333% - 0.625rem)',
        '1/3-20': 'calc(33.3333% - 1.25rem)',
        '1/4-10': 'calc(25% - 0.625rem)',
        '1/4-20': 'calc(25% - 1.25rem)',
        '1/5-20': 'calc(20% - 1.25rem)',
        '1/6-20': 'calc(16.66666667% - 1.25rem)'
      },
      maxWidth: {
        4: 420,
        5: 520,
        6: 620
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              fontWeight: 700
            },
            h2: {
              fontSize: '1.25em',
              fontWeight: 700
            },
            blockquote: {
              border: 'none',
              fontWeight: 800,
              paddingLeft: 0,
              fontStyle: 'normal',
              quotes: 'none',
              '&::before': {
                backgroundImage: theme('backgroundImage.open-quotes'),
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                content: '""',
                display: 'block',
                width: 64,
                height: 30,
                marginBottom: theme('spacing.2')
              },

              p: {
                display: 'inline',
                fontStyle: 'normal',
                fontSize: '1.5em',
                lineHeight: 1.333333,
                backgroundColor: theme('colors.yellow'),
                color: '#2e2d2c',
                boxDecorationBreak: 'clone'
              }
            }
          }
        },
        xl: {
          css: {
            h2: {
              fontSize: '1.4em',
              lineHeight: 1.25
            },
            blockquote: {
              paddingLeft: 0,

              '&::before': {
                width: 96,
                height: 46
              },

              p: {
                fontSize: '1.8em'
              }
            }
          }
        },
        gray: {
          css: {
            '--tw-prose-body': theme('colors.black'),
            '--tw-prose-headings': '#2e2d2c',
            '--tw-prose-lead': theme('colors.current'),
            '--tw-prose-links': theme('colors.current'),
            '--tw-prose-bold': theme('colors.current'),
            // '--tw-prose-counters': theme('colors.pink[600]'),
            // '--tw-prose-bullets': theme('colors.pink[400]'),
            // '--tw-prose-hr': theme('colors.pink[300]'),
            '--tw-prose-quotes': theme('colors.current'),
            '--tw-prose-quote-borders': theme('colors.current'),
            '--tw-prose-captions': theme('colors.current'),
            // '--tw-prose-code': theme('colors.pink[900]'),
            // '--tw-prose-pre-code': theme('colors.pink[100]'),
            // '--tw-prose-pre-bg': theme('colors.pink[900]'),
            // '--tw-prose-th-borders': theme('colors.pink[300]'),
            // '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-body': theme('colors.white'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.white')
            // '--tw-prose-invert-links': theme('colors.white'),
            // '--tw-prose-invert-bold': theme('colors.white'),
            // '--tw-prose-invert-counters': theme('colors.pink[400]'),
            // '--tw-prose-invert-bullets': theme('colors.pink[600]'),
            // '--tw-prose-invert-hr': theme('colors.pink[700]'),
            // '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            // '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
            // '--tw-prose-invert-captions': theme('colors.pink[400]'),
            // '--tw-prose-invert-code': theme('colors.white'),
            // '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            // '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            // '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
            // '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
          }
        }
      })
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    plugin(function ({ theme, addBase, addUtilities, addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          '@screen xl': {
            maxWidth: 1220, // http://gridcalculator.dk/#/1220/12/20/20 / 80
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem'
          }
        }
      })

      addUtilities({
        '.text-optimize': {
          textRendering: 'optimizeLegibility'
        }
      })
    }),
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
    // require('tw-elements/dist/plugin'),
  ]
}
