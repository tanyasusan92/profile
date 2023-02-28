import { NavLink, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-my-blue">
      <div className="w-full px-4 py-10 md:w-3/4 max-w-7xl">
        <h1 className="mb-10 text-3xl text-center text-gray-200 md:text-4xl lg:text-5xl lg:mb-20">
          What can i do for you?
        </h1>
        <div className="flex flex-row items-center justify-center mb-4 xl:mb-10">
          <div className="mr-4 cursor-pointer">
            <NavLink
              to="/services/react"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl lg:text-2xl text-gray-200 underline "
                  : "text-lg md:text-xl lg:text-2xl text-gray-200 "
              }
            >
              React Frontend development{" "}
            </NavLink>
          </div>
          <div className="mr-4 cursor-pointer">
            <NavLink
              to="/services/writing"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl lg:text-2xl text-gray-200 underline "
                  : "text-lg md:text-xl lg:text-2xl text-gray-200 "
              }
            >
              Content-Writing{" "}
            </NavLink>
          </div>
          <div className="mr-4 cursor-pointer">
            <NavLink
              to="/services/ui"
              className={({ isActive }) =>
                isActive
                  ? "text-lg md:text-xl lg:text-2xl text-gray-200 underline "
                  : "text-lg md:text-xl lg:text-2xl text-gray-200 "
              }
            >
              UI-development{" "}
            </NavLink>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
