function ServicesUI() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 md:flex-row xl:mb-64">
      <div className="flex items-center justify-center w-40 pb-4 pr-4 sm:w-64">
        <img
          className="w-32 h-32 max-w-xl sm:h-40 sm:w-40"
          src={require("../assets/htmlcssjs.png")}
          alt="htmlcssjs"
        />
      </div>
      <div className="max-w-xl ml-auto text-lg text-center text-gray-200 md:text-xl lg:text-2xl md:text-right">
      As a developer, I possess the necessary skills and knowledge to transform designs created in 
      Adobe Photoshop, Figma, or other design tools into code using HTML, CSS, and React. 
      I am capable of bringing your designs to fruition on the web and providing you with quality assistance.
      </div>
    </div>
  );
}

export default ServicesUI;
