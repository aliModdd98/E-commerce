/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '82': '82%',
        '90':"90%",
        "55":"55%",
        "20":"20%",
        "25":"25%",
        "200px":"200px",
        "82px":"82px",
        "280px":"280px"
      },screens: {
        'mdScreen': '880px',
       
      }, height:{
        "82":"82px"
      },
      colors: {
        'custom-gray': '#DEE2E7',
        'custom-red':"#EB001B",
        "light-red":"#FFE3E3",
        "gray-text":"#505050",
        "orange":"#F38332",
        "light-blue":"#55BDC3",
        "light-bg":"#E3F0FF",
        "bluebg":"#127FFF",
        
      },  
       fontSize: {
        '16px': '16px',
        "20px":"20px",
        "32px":"32px"
      },
    },
  },
  plugins: [],
}

