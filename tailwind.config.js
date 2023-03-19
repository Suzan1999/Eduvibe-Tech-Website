/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding:{
        '15':'60px',
      },
      margin:{
        '15':'60px',
      },
      boxShadow: {
        '3xl': '0px 8px 20px rgba(0, 0, 0, 0.06)',
      },
      fontSize: {
        '4xxl': ['40px', '48px'],
        '6xxl': ['60px', '68px'],
      },
      colors:{
        'PrimaryBlue':'#525FE1',
        'PrimaryGrey':'#242636',
        'PrimaryDark':'#6F6B80',
        'SecondaryGrey':'#231F40',
        'SecondaryBleue':'#6C77E5',
        'ThirdPampus':'#B38180',
        'ThirdGrey':'#F5F5F5',
      },
      backgroundImage:{
        'BannerBgc': "url('/public/assets/images/edu-banner.jpg')",
        'WorkshopBgc': "url('/public/assets/images/video-home-3-bg.png')",
        'Testimonial': "url('/public/assets/images/home-three-testimonial.jpg')",
      },
      borderRadius: {
        'ss': '5px',
      },
      fontFamily: {
        'Urbanist': ['Urbanist', 'sans-serif',],
      },
      screens: {
        'llg': '1180px',
      },
      backgroundPosition:{
        'TopLeft': 'top 15px left 10%',
        'sujon': 'center center',
      },
    },
  },
  plugins: [],
}