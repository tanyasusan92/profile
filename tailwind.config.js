/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "work-desk": "url('./assets/leone-venter-VieM9BdZKFo-unsplash 1.png')",
        "work-desk-large":
          "url('./assets/leone-venter-VieM9BdZKFo-unsplash-large.jpg')",
        phonebg: "url('./assets/phonebg.png')",
        "split-white-blue":
          "linear-gradient(to top, #0096BE 50% , #E7E8E9 50%), linear-gradient(to right, red , yellow);",
      },
      colors: {
        "my-grey": "#515256",
        "my-header-bg": "#F3F1F2",
        "my-green": "#4DB5B1",
        "my-dark-green": "#008391",
        "my-blue": "#0096BE",
        "phone-gray": "#1C2C39",
        "text-box-gray": "#1089A9",
      },
      maxWidth: {
        "1/2": "50%",
        "3/4": "75%",
      },
      minHeight: {
        816: "816px",
        1600: "900px",
      },
    },
  },
  plugins: [],
};
