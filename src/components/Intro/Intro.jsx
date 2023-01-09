import React from "react";
import "./Intro.css";
import glassesimoji from "../../img/glassesimoji.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.svg";
import LinkedIn from "../../img/linkedin.svg";
import Instagram from "../../img/instagram.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const imagesArray = [
    [Instagram, "https://www.instagram.com/wakeupinsane/"],
    [LinkedIn, "https://www.instagram.com/wakeupinsane/"],
    [Github, "https://www.instagram.com/wakeupinsane/"],
  ];


  return (
    <div className="Intro" id="Intro">
      {/* left side */}
      <div className="i-left">
        <div className="i-name">
          <span style={{ color:"white" }}>Hiii I Am</span>
          <span className="nameIcon">Prashant Singh</span>
          <span style={{color:"whitesmoke"}}>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work with passionately
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
        {imagesArray.map((item, index) => {
              return (
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  animate={{
                    opacity: 1,
                    scale: 1,

                    // x: 50,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 3,
                  }}
                  transition={{
                    duration: index + 1,
                  }}
                >
                  <img alt="social" src={item[0]} />
                </motion.div>
              );
            })}

        </div>
      </div>
      {/* right side */}
      <div className="i-right">

        <motion.img
          initial={{ left: "-36%",top: "10%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "-10%", left: "0%" }}
          whileInView={{ left: "10%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Software" text2="Engineer" />
        </motion.div>
        <motion.div
          initial={{ top: "30%", left: "57%" }}
          whileInView={{ left: "47%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "11%", left: "0%" }}
          whileInView={{ left: "17%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Software" text2="Engineer" />
        </motion.div>

        <motion.div
          initial={{ top: "40%", left: "-10%" }}
          whileInView={{ left: "10%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Passionate" text2="" />
        </motion.div>

        <motion.div
          initial={{ left: "1rem", top: "19rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
