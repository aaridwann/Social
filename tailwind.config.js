module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Yantramanav", "sans-serif",'Yellowtail','cursive'],
      },
      colors: {
        "pink-cust": "#FFE2E2",
        'pink-tua': '#FFB9B9',
        'coklat': '#E8DBCD',
        'coklat-muda': '#E9D5C5',
        'matcha-dark': '#6B705C',
        'mathca':'#A5A58D',
        'matcha-light':'#B7B7A4'
      },
      letterSpacing: {
        lebar: '0.75em',
        lebar2: '1.30em',
      },
      height:{
        '771': '771px',
        '667':  '667px'
      },
      width:{
        '1076': '1076',
        '854':'854'
      },
      borderRadius:{
        'extra': '150px',
        'extraLG': '250px'
      },
      zIndex:{
        '100':'100'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
