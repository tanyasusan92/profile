function ServicesWriting() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center mb-10 xl:mb-64">
      <div className="max-w-xl text-lg md:text-xl lg:text-2xl text-gray-200 text-center md:text-right mr-auto">
        As a content writer and technical writer, I can help you phrase content
        in your website or app to create a more powerful impact on your
        audience.
      </div>
      <div className="w-40 sm:w-64 pb-4 pl-4 flex justify-center items-center">
        <img
          className="h-32 w-32 sm:h-40 sm:w-40 max-w-xl ml-auto"
          src={require("../assets/writing.png")}
          alt="writing"
        />
      </div>
    </div>
  );
}

export default ServicesWriting;
