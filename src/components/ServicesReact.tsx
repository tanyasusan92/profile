function ServicesReact() {
  return (
    <div className="flex flex-col items-center mb-10 md:flex-row xl:mb-64">
      <div className="flex items-center justify-center w-40 pb-4 pr-4 sm:w-64">
        <img
          className="w-32 h-32 max-w-xl sm:h-40 sm:w-40"
          src={require("../assets/atom-symbol.png")}
          alt="atom-symbol"
        />
      </div>
      <div className="max-w-xl ml-auto text-lg text-center text-gray-200 md:text-xl lg:text-2xl md:text-right">
        With prior experience in React and Css Frameworks like TailwindCSS and Bootstrap, 
        I can help you bring your designs to life and create seamless, 
        responsive web applications. Whether you need help with styling, 
        layout, or functionality, I'm here to collaborate with you and deliver 
        top-quality code that meets your needs. Let's build something amazing together!
      </div>
    </div>
  );
}

export default ServicesReact;
