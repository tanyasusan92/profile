import { useState } from "react";
import ServicesReact from "./ServicesReact";
import ServicesUI from "./ServicesUI";
import ServicesWriting from "./ServicesWriting";

function ServicesSection() {
  const [tab, setTab] = useState("react");
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-4 bg-my-blue">
      <div className="w-full px-4 py-20 md:w-3/4 max-w-7xl">
        <h1 className="mb-10 text-3xl text-center text-gray-200 md:text-4xl lg:text-5xl lg:mb-20">
          What can i do for you?
        </h1>
        <div className="flex flex-col items-center justify-center mb-20 md:flex-row">
          <div className="mb-4 mr-4 cursor-pointer">
            <span
              onClick={(e) => setTab("react")}
              className={
                tab === "react"
                  ? "text-lg md:text-xl lg:text-2xl text-gray-200 border-b-2 border-solid border-gray-200 pb-2 "
                  : "text-lg md:text-xl lg:text-2xl text-gray-200 "
              }
            >
              React Frontend{" "}
            </span>
          </div>
          <div className="mb-4 mr-4 cursor-pointer">
            <span
              onClick={(e) => setTab("writing")}
              className={
                tab === "writing"
                  ? "text-lg md:text-xl lg:text-2xl text-gray-200 border-b-2 border-solid border-gray-200 pb-2 "
                  : "text-lg md:text-xl lg:text-2xl text-gray-200 "
              }
            >
              Content-Writing{" "}
            </span>
          </div>
          <div className="mb-4 mr-4 cursor-pointer">
            <span
              onClick={(e) => setTab("ui")}
              className={
                tab === "ui"
                  ? "text-lg md:text-xl lg:text-2xl text-gray-200 border-b-2 border-solid border-gray-200 pb-2 "
                  : "text-lg md:text-xl lg:text-2xl text-gray-200 "
              }
            >
              UI Development{" "}
            </span>
          </div>
        </div>
        {tab === "react" ? (
          <ServicesReact />
        ) : tab === "writing" ? (
          <ServicesWriting />
        ) : (
          <ServicesUI />
        )}
      </div>
    </div>
  );
}

export default ServicesSection;
