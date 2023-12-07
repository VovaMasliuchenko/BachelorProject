module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens: {
        'vsm': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px'
      },
      extend: {
        colors: {
          'input-grey': '#ECECEC',
          'button-orange': '#FFA51F',
          'button-orange-hover': '#DBA735',
          'link': '#6358DC',
          'header-bg': '#F3BB03',
          'button-header': '#231F1B',
          'goals-bg': '#F0F0F0',
          'footer-bg': '#363636',
          'todo-category': '#9495A5',
          'hover-header': '#Ececec'
        },
        backgroundImage: {
          'hero-image': 'url("./assets/Hero-image.png")'
        },
        width: {
          '128': '32rem',
        }
      },
      fontFamily: {
        goldman: ["Goldman", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      }
    },
    plugins: [],
  }