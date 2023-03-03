function Contact() {
  return (
    <>
      <div className="flex items-center pl-10 bg-right-bottom bg-no-repeat bg-phonebg bg-phone-gray min-h-816">
        {/* <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
--> */}
        {/* <div className="">
              <textarea
                id="about"
                name="about"
                rows="3"
                className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-white border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-text-box-gray"
                placeholder="Your message"
              ></textarea>
            </div> */}

        <div className="w-5/6 px-4 py-5 overflow-hidden shadow sm:rounded-md bg-my-blue sm:p-6 sm:w-72 ">

        <div className="flex flex-wrap items-center justify-center pt-4">
            <h2 className="mb-4 text-3xl text-white">CONTACT: </h2>
          </div>


          <div className="flex flex-wrap items-center justify-center pt-4">
            <img
              src={require("../assets/Phone.png")}
              alt="Phone icon"
              className="w-4 h-4 mr-1"
            />
            <p className="text-white">+971525884365</p>
          </div>
          <div className="flex flex-wrap items-center justify-center pt-4">
            <img
              src={require("../assets/Phone.png")}
              alt="Phone icon"
              className="w-4 h-4 mr-1"
            />
            <p className="text-white">+919495629521</p>
          </div>
          <div className="flex flex-wrap items-center justify-center pt-4">
            <img
              src={require("../assets/Mail.png")}
              alt="Email icon"
              className="w-4 h-4 mr-2"
            />
            <p className="text-white">tanyasusan92@gmail.com</p>
          </div>
          <div className="flex flex-wrap items-center justify-center pt-8">
            <a href="mailto:tanyasusan92@gmail.com">
              <span className="px-4 py-2 text-white rounded bg-my-green hover:bg-my-dark-green">
                Email me
              </span>
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center pt-4">
            <a href="https://api.whatsapp.com/send?phone=919495629521">
              <span className="px-4 py-2 text-white rounded bg-my-green hover:bg-my-dark-green">
                Whatsapp me
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
