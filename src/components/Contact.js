function Contact() {
  return (    
    <div className="bg-no-repeat bg-right-bottom bg-phonebg bg-phone-gray min-h-816 pl-10 flex items-center">
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
        <div className="shadow overflow-hidden sm:rounded-md px-4 py-5 bg-my-blue sm:p-6 w-72">  

              <div className="">                
                <input type="text" name="first-name" id="first-name" 
                className="mt-2 focus:outline-none block w-full 
                shadow-sm sm:text-sm border-gray-300 rounded-md placeholder-white bg-text-box-gray py-2 px-4" placeholder="Name" />
              </div>

              <div className="">                
                <input type="text" name="email-address" id="email-address" 
                className="mt-2 focus:outline-none block w-full 
                shadow-sm sm:text-sm border-gray-300 rounded-md placeholder-white bg-text-box-gray py-2 px-4" placeholder="Your email id" />
              </div>

              <div className="">        
                <textarea id="about" name="about" rows="3" 
                className="mt-2 focus:outline-none block w-full 
                shadow-sm sm:text-sm border-gray-300 rounded-md placeholder-white bg-text-box-gray py-2 px-4" placeholder="Your message"
                ></textarea>
              </div>

              <div className="">   
                <button className="bg-my-green mt-2
                          hover:bg-my-dark-green 
                          text-white py-2 px-4 rounded">
                  Email me
                </button>
              </div>
   
        </div>
      </form>
    

</div>
  );
}

export default Contact;
