function ServicesReact() {
  return (
    <div className="flex flex-col md:flex-row items-center mb-10 xl:mb-64">
      <div className="w-40 sm:w-64 pb-4 pr-4 flex justify-center items-center">
        <img
          className="h-32 w-32 sm:h-40 sm:w-40 max-w-xl"
          src={require("../assets/atom-symbol.png")}
          alt="atom-symbol"
        />
      </div>
      <div className="max-w-xl text-lg md:text-xl lg:text-2xl text-gray-200 text-center md:text-right ml-auto">
        With prior experience in Tailwind and React, I can efficiently help you
        develop a maintainable codebase with reusable components.
      </div>
    </div>
  );
}

export default ServicesReact;
