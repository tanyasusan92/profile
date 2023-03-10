import About from "./About";
import ServicesSection from "./ServicesSection";
import Contact from "./Contact";
import Header from "./Header";
import TodoApp from "./TodoApp/TodoApp";

function Home() {
  return (
    <>
      <div className="relative bg-right-bottom bg-no-repeat bg-work-desk 2xl:bg-work-desk-large bg-my-header-bg min-h-816 2xl:min-h-1600 ">
        <div className="absolute top-0 left-0 max-w-xl pt-4 pl-4 md:pl-10 md:pt-10">
          <div className="flex flex-row h-6">
            <Header />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 pb-4 pl-4 max-w md:max-w-xl md:pl-10 md:pb-10">
          <h1 className="pb-2 text-3xl text-my-grey md:text-5xl">
            Hi! I'm Tanya... <br />
          </h1>

          <p className="pb-2 text-2xl text-my-grey leading-1">
            And I'm passionate about creating User Interfaces that connect users
            to digital delight.
          </p>

          <a href="mailto:tanyasusan92@gmail.com">
            <span className="px-4 py-2 text-white rounded bg-my-green hover:bg-my-dark-green">
              Email me
            </span>
          </a>
        </div>
      </div>
      <div id="aboutRef">
        <About />
      </div>
      <div id="inProgress">
        <TodoApp />
      </div>
      <div id="servicesRef">
        <ServicesSection />
      </div>
      <div id="contactRef">
        <Contact />
      </div>
    </>
  );
}

export default Home;
