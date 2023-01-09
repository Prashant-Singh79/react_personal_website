import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
const navbar = () => {
  
  const moveVariants = {
    animation: {
      y: [0, -7, 7],
      transition: {
        repeat: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Prashant</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                initial={{
                  opacity: 0,
                  scale: 1.2,
                }}
                transition={{
                  duration: 1.1,
                  type:"spring"
                }}
              >
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                initial={{
                  opacity: 0,
                  scale: 1.2,
                }}
                transition={{
                  duration: 1.1,
                  stiffness: 400,
                }}
              >
                <Link to="services" spy={true} smooth={true}>
                  Serivces
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                initial={{
                  opacity: 0,
                  scale: 1.2,
                }}
                transition={{
                  duration: 1.1,
                  stiffness: 400,
                }}
              >
                <Link to="works" spy={true} smooth={true}>
                  Experience
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div

                whileHover={{ scale: [null, 1.1, 1.1] }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                initial={{
                  opacity: 0,
                  scale: 1.2,
                }}
                transition={{
                  duration: 1.1,
                  stiffness: 400,
                }}
              >
                <Link to="portfolio" spy={true} smooth={true}>
                  Protfolio
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: [null, 1.1, 1.1] }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                initial={{
                  opacity: 0,
                  scale: 1.2,
                }}
                transition={{
                  duration: 1.1,
                  stiffness: 400,
                }}
              >
                <Link to="testimonial" spy={true} smooth={true}>
                  Testimonial
                </Link>
              </motion.div>
            </li>
          </ul>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
          whileTap={{ scale: 0.8 }}
        >
          <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">Contact</button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default navbar;
