import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const actions = [
    { name: "Home", path: "/" },
    { name: "Our Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/asked-question" },
  ];
  return (
    <>
      <nav className="flex fixed top-0 w-full z-30 justify-between items-center bg-gray-50 py-4 lg:px-24 md:px-20 px-10 shadow-sm">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dtrqikle5/image/upload/v1716182915/Coalfire_icon_Colour_rr5qjv.png"
            alt="logo"
            width={35}
            height={35}
          />
        </Link>
        <div>
          <ul className="md:flex md:flex-row hidden items-center gap-4">
            {actions.map((action, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={action.path}
                    className={({ isActive }) =>
                      isActive ? "text-purple font-bold text-lg" : undefined
                    }
                  >
                    {action.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="inline-flex">
          <button className="bg-purple hidden md:block text-white px-4 py-2 rounded-md transition-all ease-in duration-150  hover:opacity-80">
            Shop Now
          </button>
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="flex px-8 transition-all ease-in-out duration-150 items-center flex-col gap-8 py-9 justify-center text-center bg-gray-50 mt-16">
          <ul className="flex flex-col gap-10">
            {actions.map((action, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={action.path}
                    className={({ isActive }) =>
                      isActive ? "text-purple font-bold text-lg" : undefined
                    }
                  >
                    {action.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button className="bg-purple w-full text-white px-4 py-3 rounded-md transition-all ease-in duration-150  hover:opacity-80">
            Shop Now
          </button>
        </div>
      )}
    </>
  );
}
