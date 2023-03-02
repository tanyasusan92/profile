import { Link } from "react-router-dom"; //using navlink to add to the url and show the differnt components

function Header() {
  return (
    <div className="flex flex-row h-6">
      <Link to="/profile" className="mx-2 text-my-grey">
        Home{" "}
      </Link>
      <span className="text-my-grey">|</span>
      <a href="#aboutRef" className="mx-2 cursor-pointer text-my-grey">
        About{" "}
      </a>
      <span className="text-my-grey">|</span>
      <a href="#servicesRef" className="mx-2 cursor-pointer text-my-grey">
        Services{" "}
      </a>
      <span className="text-my-grey">|</span>
      <a href="#contactRef" className="mx-2 cursor-pointer text-my-grey">
        Contact{" "}
      </a>
    </div>
  );
}

export default Header;
