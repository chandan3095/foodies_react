import React from "react";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const menu = [
  {
    id: 1,
    title: "Home",
    path: "/",
    delay: 0.1,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Menu",
    path: "/menu",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Delivery",
    path: "/delivery",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    delay: 0.5,
  },
];

const SlideDown = (delay) => {
  return {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center font-league">
        {/* logo  */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          src={logo}
          alt=""
          className="w-36"
        />
        {/* menu  */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {menu.map((item) => (
              <motion.li
                initial="initial"
                animate="animate"
                variants={SlideDown(item.delay)}
                key={item.id}
                className="nav-menu"
                data-delay={item.delay}
              >
                <a href={item.path} className="inline-block px-2 py-2 text-2xl">
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* button  */}
        <motion.div variants={SlideDown(1)} initial="initial" animate="animate">
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-dark">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
