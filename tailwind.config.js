/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#21744A', // สีเขียวเข้มจากโลโก้
        'gold': '#FFD700', // สีทอง
        'dark': '#181818', // สีดำ
        'light': '#F7F7F7', // สีพื้นหลังอ่อน
        'accent-green': '#3CB371', // สีเขียวรอง
        'army-green': '#2B3D1F', // สีเขียวทหาร
        'army-green-light': '#3A5228', // สีเขียวทหารอ่อน
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
}

