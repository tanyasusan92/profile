function Contact() {
  return (
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

      <form action="#" method="POST">
        <div className="px-4 py-5 overflow-hidden shadow sm:rounded-md bg-my-blue sm:p-6 w-72">
          <div className="">
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-white border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-text-box-gray"
              placeholder="Name"
            />
          </div>

          <div className="">
            <input
              type="text"
              name="email-address"
              id="email-address"
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-white border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-text-box-gray"
              placeholder="Your email id"
            />
          </div>

          <div className="">
            <textarea
              id="about"
              name="about"
              rows="3"
              className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-white border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm bg-text-box-gray"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="pt-4">
          <a href="mailto:tanyasusan92@gmail.com">
            <span className="px-4 py-2 mt-2 text-white rounded bg-my-green hover:bg-my-dark-green">
              Email me
            </span>
          </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
