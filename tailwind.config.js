/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': {
          '50': '#edf8ff',
          '100': '#d6edff',
          '200': '#b5e1ff',
          '300': '#83cfff',
          '400': '#48b4ff',
          '500': '#1e90ff',
          '600': '#066fff',
          DEFAULT: '#005afe',
          '800': '#0845c5',
          '900': '#0d3f9b',
          '950': '#0e275d',
      },
      'texas-rose': {
        '50': '#fff9ed',
        '100': '#fff1d4',
        '200': '#ffdfa8',
        '300': '#ffc871',
        DEFAULT: '#ffb051',
        '500': '#fe8911',
        '600': '#ef6d07',
        '700': '#c65108',
        '800': '#9d410f',
        '900': '#7e3710',
        '950': '#441906',
    },
    'hot-pink': {
      '50': '#fef1f8',
      '100': '#fee5f3',
      '200': '#ffcbe8',
      '300': '#ffa1d4',
      DEFAULT: '#ff61b2',
      '500': '#fa3a97',
      '600': '#ea1873',
      '700': '#cc0a59',
      '800': '#a80c49',
      '900': '#8c0f40',
      '950': '#560122',
  },
  
      },
      screens :{
        sm: '576px',
        md:' 768px',
        lg:' 992px',
        xl: '1200px',
        xxl: '1400px'
    }
    },
  },
  plugins: [],
}

