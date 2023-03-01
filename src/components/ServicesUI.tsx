function ServicesUI() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mb-10 xl:mb-64">
      <div className="w-40 sm:w-64 pb-4 pr-4 flex justify-center items-center">
        <img
          className="h-32 w-32 sm:h-40 sm:w-40 max-w-xl"
          src={require("../assets/htmlcssjs.png")}
          alt="htmlcssjs"
        />
      </div>
      <div className="max-w-xl text-lg md:text-xl lg:text-2xl text-gray-200 text-center md:text-right ml-auto">
        As a developer, I can help you convert your designs in Adobe photoshop,
        Figma or other design tools into code using Html, Css and React.
      </div>
    </div>
  );
}

export default ServicesUI;
