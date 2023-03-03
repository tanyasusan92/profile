function ServicesWriting() {
  return (
    <div className="flex flex-col-reverse items-center justify-center mb-10 md:flex-row xl:mb-64">
      <div className="max-w-xl mr-auto text-lg text-center text-gray-200 md:text-xl lg:text-2xl md:text-right">
      Need help creating engaging content for your website or app? 
      As a skilled content and technical writer, I can craft persuasive
      messages that resonate with your target audience and improve your website's ranking. 
      Let's work together to achieve your content marketing goals 
      and make a lasting impact on your audience.
      </div>
      <div className="flex items-center justify-center w-40 pb-4 pl-4 sm:w-64">
        <img
          className="w-32 h-32 max-w-xl ml-auto sm:h-40 sm:w-40"
          src={require("../assets/writing.png")}
          alt="writing"
        />
      </div>
    </div>
  );
}

export default ServicesWriting;
