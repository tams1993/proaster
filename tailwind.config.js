module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
    }
  },
  variants: {
    extend: {
      animation: ['motion-reduce']
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        proaster: {
          primary: '#955f31', /* Primary color */
          'primary-focus': '#45230f', /* Primary color - focused */
          'primary-content': '#ffffff', /* Foreground content color to use on primary color */
  
          secondary: '#3b555d', /* Secondary color */
          'secondary-focus': '#233237', /* Secondary color - focused */
          'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */

          accent: '#204d48', /* Accent color */
          'accent-focus': '#233237', /* Accent color - focused */
          'accent-content': '#ffffff', /* Foreground content color to use on accent color */

          neutral: '#3d4451', /* Neutral color */
          'neutral-focus': '#2a2e37', /* Neutral color - focused */
          'neutral-content': '#ffffff', /* Foreground content color to use on neutral color */

          'base-100': '#ffffff', /* Base color of page, used for blank backgrounds */
          'base-200': '#f9fafb', /* Base color, a little darker */
          'base-300': '#d1d5db', /* Base color, even more darker */
          'base-content': '#1f2937', /* Foreground content color to use on base color */

          info: '#2094f3', /* Info */
          success: '#009485', /* Success */
          warning: '#ff9900', /* Warning */
          error: '#ff5724'
        }

      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false
  }

}
