import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "420px"
      },
      backgroundImage: {
        'presentation': "linear-gradient(0deg, var(--background-alt), var(--background-body))",
        'presentation-moon': "linear-gradient(0deg, #0d0f12, #253542)",
      },
      boxShadow: {
        "presentation": '-5px 5px 2px black, -10px 10px 4px black, -15px 15px 6px black, -20px 20px 8px black, -25px 25px 10px black',
        "presentation-t": '-5px 5px 8px black,-10px 10px 8px black,-15px 15px 15px black, -20px 20px 20px black,-25px 25px 20px black'
      },
      fontSize: {
        xs: "clamp(0.8rem, 1vw + 0.6rem, 0.95rem)",
        sm: "clamp(0.9rem, 1.2vw + 0.75rem, 1rem)",
        base: "clamp(1rem, 1.5vw + 0.9rem, 1.2rem)",
        md: "clamp(1.2rem, 1.8vw + 1rem, 1.5rem)",
        lg: "clamp(1.4rem, 2vw + 1.2rem, 1.8rem)",
        xl: "clamp(1.6rem, 2.5vw + 1.4rem, 2.3rem)",
        xxl: "clamp(1.9rem, 3vw + 1.6rem, 3rem)",
        xxxl: "clamp(2.2rem, 3.5vw + 1.8rem, 4rem)"
      },
      colors: {
        "strong-dark": {
          DEFAULT: '#0d0f12',
          10: 'rgba(13, 15, 18, 0.1)',
          20: 'rgba(13, 15, 18, 0.2)',
          30: 'rgba(13, 15, 18, 0.3)',
          40: 'rgba(13, 15, 18, 0.4)',
          50: 'rgba(13, 15, 18, 0.5)',
          60: 'rgba(13, 15, 18, 0.6)',
          70: 'rgba(13, 15, 18, 0.7)',
          80: 'rgba(13, 15, 18, 0.8)',
        },
        "medium-dark": {
          DEFAULT: '#0e1620',
          10: 'rgba(14, 22, 32, 0.1)',
          20: 'rgba(14, 22, 32, 0.2)',
          30: 'rgba(14, 22, 32, 0.3)',
          40: 'rgba(14, 22, 32, 0.4)',
          50: 'rgba(14, 22, 32, 0.5)',
          60: 'rgba(14, 22, 32, 0.6)',
          70: 'rgba(14, 22, 32, 0.7)',
          80: 'rgba(14, 22, 32, 0.8)',
        },
        "weak-dark": {
          DEFAULT: '#16212e',
          10: 'rgba(22, 33, 46, 0.1)',
          20: 'rgba(22, 33, 46, 0.2)',
          30: 'rgba(22, 33, 46, 0.3)',
          40: 'rgba(22, 33, 46, 0.4)',
          50: 'rgba(22, 33, 46, 0.5)',
          60: 'rgba(22, 33, 46, 0.6)',
          70: 'rgba(22, 33, 46, 0.7)',
          80: 'rgba(22, 33, 46, 0.8)',
        },
        "strong": {
          DEFAULT: '#FFF',
          10: 'rgba(255, 255, 255, 0.1)',
          20: 'rgba(255, 255, 255, 0.2)',
          30: 'rgba(255, 255, 255, 0.3)',
          40: 'rgba(255, 255, 255, 0.4)',
          50: 'rgba(255, 255, 255, 0.5)',
          60: 'rgba(255, 255, 255, 0.6)',
          70: 'rgba(255, 255, 255, 0.7)',
          80: 'rgba(255, 255, 255, 0.8)',
        },
        "medium": {
          DEFAULT: '#ddeef8',
          10: 'rgba(221, 238, 248, 0.1)',
          20: 'rgba(221, 238, 248, 0.2)',
          30: 'rgba(221, 238, 248, 0.3)',
          40: 'rgba(221, 238, 248, 0.4)',
          50: 'rgba(221, 238, 248, 0.5)',
          60: 'rgba(221, 238, 248, 0.6)',
          70: 'rgba(221, 238, 248, 0.7)',
          80: 'rgba(221, 238, 248, 0.8)',
        },
        "weak": {
          DEFAULT: '#b1dff6',
          10: 'rgba(177, 223, 246, 0.1)',
          20: 'rgba(177, 223, 246, 0.2)',
          30: 'rgba(177, 223, 246, 0.3)',
          40: 'rgba(177, 223, 246, 0.4)',
          50: 'rgba(177, 223, 246, 0.5)',
          60: 'rgba(177, 223, 246, 0.6)',
          70: 'rgba(177, 223, 246, 0.7)',
          80: 'rgba(177, 223, 246, 0.8)',
        },
        "gold": {
          DEFAULT: '#ffac33',
          10: 'rgba(255, 172, 51, 0.1)',
          20: 'rgba(255, 172, 51, 0.2)',
          30: 'rgba(255, 172, 51, 0.3)',
          40: 'rgba(255, 172, 51, 0.4)',
          50: 'rgba(255, 172, 51, 0.5)',
          60: 'rgba(255, 172, 51, 0.6)',
          70: 'rgba(255, 172, 51, 0.7)',
          80: 'rgba(255, 172, 51, 0.8)',
        },
        "rose": {
          DEFAULT: '#e6056a',
          10: 'rgba(230, 5, 106, 0.1)',
          20: 'rgba(230, 5, 106, 0.2)',
          30: 'rgba(230, 5, 106, 0.3)',
          40: 'rgba(230, 5, 106, 0.4)',
          50: 'rgba(230, 5, 106, 0.5)',
          60: 'rgba(230, 5, 106, 0.6)',
          70: 'rgba(230, 5, 106, 0.7)',
          80: 'rgba(230, 5, 106, 0.8)',
        },
        "warning": {
          "DEFAULT": "#ec80a8",
          "10": "rgba(236, 128, 168, 0.1)",
          "20": "rgba(236, 128, 168, 0.2)",
          "30": "rgba(236, 128, 168, 0.3)",
          "40": "rgba(236, 128, 168, 0.4)",
          "50": "rgba(236, 128, 168, 0.5)",
          "60": "rgba(236, 128, 168, 0.6)",
          "70": "rgba(236, 128, 168, 0.7)",
          "80": "rgba(236, 128, 168, 0.8)"
        },
        "info": {
          "DEFAULT": "#00cfff",
          "10": "rgba(0, 207, 255, 0.1)",
          "20": "rgba(0, 207, 255, 0.2)",
          "30": "rgba(0, 207, 255, 0.3)",
          "40": "rgba(0, 207, 255, 0.4)",
          "50": "rgba(0, 207, 255, 0.5)",
          "60": "rgba(0, 207, 255, 0.6)",
          "70": "rgba(0, 207, 255, 0.7)",
          "80": "rgba(0, 207, 255, 0.8)"
        },
        "success": {
          "DEFAULT": "#69d58e",
          "10": "rgba(105, 213, 142, 0.1)",
          "20": "rgba(105, 213, 142, 0.2)",
          "30": "rgba(105, 213, 142, 0.3)",
          "40": "rgba(105, 213, 142, 0.4)",
          "50": "rgba(105, 213, 142, 0.5)",
          "60": "rgba(105, 213, 142, 0.6)",
          "70": "rgba(105, 213, 142, 0.7)",
          "80": "rgba(105, 213, 142, 0.8)"
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        bell: {
          '0%': { transform: 'rotate(0)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0)' },
          '75%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn .8s ease-in-out 1',
        bell: 'bell .8s linear 1'
      },
      rotate: {
        'x-45': 'rotateX(45deg)',
        'y-45': 'rotateY(45deg)',
        'z-30': 'rotateZ(30deg)',
      }
    },
  },
  plugins: [],
}