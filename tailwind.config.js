const range = require('lodash/range');

module.exports = {
  purge: ['src/**/*.js', 'src/**/*.jsx'],
  mode: 'jit',
  // important: true,
  theme: {
    screens: {
      xl: '1280px'
    },
    extend: {
      flex: {
        0: '0 0 auto'
      },
      borderColor: {
        white100: '#D4DBEA'
      },
      colors: {
        black: {
          100: '#30354d'
        },
        blue: {
          100: '#5988ff',
          200: '#1F7EF8',
          300: '#2e60f8',
          400: '#30354d',
          500: '#b8e1ff',
          600: '#9AC5FF',
          700: '#7DAAFF',
          800: '#5B8FF9',
          900: '#3D76DD',
          1000: '#085EC0',
          1100: '#0047A5',
          1200: '#00318A',
          1300: '#1890FF',
          1400: '#e6f7ff',
          1500: '#91D5FF',
          1600: '#555dbf',
          1700: '#1F7DF8'
        },
        gray: {
          100: '#f3f5f9',
          200: '#cdd0d9',
          300: '#d0cfd0',
          400: '#7e849c',
          500: '#81848e',
          600: '#212121',
          700: ' #30354d',
          800: '#A3A5A8',
          900: '#eef0f5',
          1000: '#bdc4d1'
        },
        red: {
          100: '#db6060',
          200: '#FF4D4F'
        },
        green: {
          100: '#04B78A'
        }
      },
      backgroundColor: {
        100: '#fafbfc',
        200: '#FAFBFC',
        blue100: '#3F8CFF',
        green100: '#5AD8A6'
      },
      spacing: () => {
        /*按照tailwind默认以16px为root rem值生成以0.03125rem(0.5px)为间隔的0-100的spacing
        因为purge和jit模式无需担心生成过多的未用到的类。*/
        //0.125 0.25 0.375 0.5 .....
        //0.5px 1px 1.5px 2px ....
        const spacings = range(0.125, 100, 0.125).reduce((pre, cur) => {
          pre[cur] = `${cur * 0.25}rem`;
          return pre;
        }, {});
        return {
          ...spacings,
          px2: '2px',
          px3: '3px',
          px5: '5px',
          px6: '6px',
          px10: '10px',
          px14: '14px',
          px24: '24px',
          px30: '30px',
          px34: '34px',
          px50: '50px',
          px60: '60px',
          px70: '70px',
          px90: '90px',
          px100: '100px',
          px124: '124px',
          px140: '140px',
          px220: '220px',
          '7': '1.75rem',
          '15': '3.75rem',
          '50%': '50%'
        };
      },
      fontSize: {
        px12: '12px',
        px14: '14px',
        px18: '18px',
        px22: '22px',
        px30: '30px'
      },
      inset: theme => {
        return {
          ...theme('spacing'),
          'px-1': '-1px',
          px2: '2px',
          px13: '13px',
          px14: '14px',
          px20: '20px',
          px22: '22px',
          px25: '25px',
          px94: '94px',
          px206: '206px',
          '1': '0.25rem',
          '3': '0.75rem',
          '4': '1rem',
          '10': '2.5rem',
          '40': '10rem',
          '40%': '40%',
          'px-70': '-70px'
        };
      },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3
      },
      width: theme => {
        return {
          ...theme('spacing'),
          px5: '5px',
          px8: '8px',
          9: '2.25rem',
          px10: '10px',
          px18: '18px',
          px120: '120px',
          px135: '135px',
          px160: '160px',
          px200: '200px',
          px220: '220px',
          px274: '274px',
          px300: '300px',
          px400: '400px',
          px600: '600px',
          px480: '480px',
          px510: '510px',
          px800: '800px'
        };
      },
      maxWidth: theme => {
        return {
          ...theme('width'),
          'xs-10': '10rem',
          px180: '180px',
          px300: '300px',
          px480: '480px'
        };
      },
      height: theme => {
        return {
          ...theme('spacing'),
          px1: '1px',
          px8: '8px',
          9: '2.25rem',
          px10: '10px',
          px18: '18px',
          px28: '28px',
          px32: '32px',
          px59: '59px',
          px100: '100px',
          px331: '331px',
          px600: '600px'
        };
      },
      opacity: {
        '10': '0.1',
        '20': '0.2',
        '30': '0.3',
        '40': '0.3',
        '50': '0.5',
        '60': '0.6'
      },
      maxHeight: theme => {
        return {
          ...theme('height')
        };
      },
      borderWidth: {},
      borderRadius: {
        px2: '2px'
      },
      lineHeight: theme => {
        return {
          ...theme('spacing'),
          px5: '5px',
          px8: '8px',
          px32: '32px'
        };
      }
    }
  },
  variants: {},
  plugins: [],
};
