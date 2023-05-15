import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "semantic-ui-react";
import { routes } from "./routesComp";



const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.8,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "15vw" : "45px",
            transition: { duration: 0.8, },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  NastedSidebar
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <Icon className="icon" size="large" name="bars" onClick={toggle}></Icon>
            </div>
          </div>
        
          <section className="routes">
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <Icon className="icon" size="large" name={route.icon} title={route.name}></Icon>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
