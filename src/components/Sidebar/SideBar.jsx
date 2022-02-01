import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
const SideBar = () => {
  const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <MdMessage />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <BiAnalyse />,
    },
    {
      path: "/filemanger",
      name: "File Manager",
      icon: <AiTwotoneFileExclamation />,
    },
    {
      path: "/order",
      name: "Order",
      icon: <BsCartCheck />,
    },
    {
      path: "/saved",
      name: "Saved",
      icon: <AiFillHeart />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <BiCog />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="top_section">
        <div className="logo">DoSomeCoding</div>
        <FaBars />
      </div>
      <div className="search">
        <div className="search_icon">
          <BiSearch />
        </div>
        <input type="text" placeholder="Search" />
      </div>
      <section className="routes">
        {routes.map((route, index) => {
          return (
            <NavLink to={route.path} key={index} className=" link">
              <div className="icon">{route.icon}</div>
              <div className="name">{route.name}</div>
            </NavLink>
          );
        })}
      </section>
    </div>
  );
};

export default SideBar;
