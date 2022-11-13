import styles from "./carousel.module.scss";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WidthContext } from "../../contexts/screenwidth/screenwidth.context";
import Link from "next/link";
import axios from "axios";
import { imghost } from "../../../config/img_hostname";

export default function Carousel2({ scripts }) {
  const screenwidth = useContext(WidthContext);
  const screenlimit = 1350;
  const [current, setcurrent] = useState(0);
  const [isRight, SetisRight] = useState(true);
  const [didClick, setClick] = useState({ 1: false, 2: false });
  const [show, setShow] = useState(false);
  const animationsRight = {
    initial: (isRight) => ({ x: isRight ? 2000 : -2000, opacity: 0.6 }),
    animate: { x: 0, opacity: 1 },
    exit: (isRight) => ({ x: !isRight ? 2000 : -2000, opacity: 0.6 }),
  };

  useEffect(() => {
    if (scripts) {
      setShow(true);
    }
  }, [scripts]);

  useEffect(() => {
    if (current < 0) setcurrent(2);
    if (current > 2) setcurrent(0);
  }, [current]);

  useEffect(() => {
    if (didClick[1]) {
      setcurrent(current - 1);
      setClick({ 1: false, 2: false });
    } else if (didClick[2]) {
      setcurrent(current + 1);
      setClick({ 1: false, 2: false });
    } else {
    }
  }, [didClick, current]);

  return (
    <div className={styles["carousel2"]}>
      <button
        style={{ marginRight: "20px", marginLeft: "-20px" }}
        onClick={() => {
          SetisRight(false);
          setClick({ 1: true, 2: false });
        }}
      >
        <img alt="loading" src="/Homepage/icons/Chevrons Left.svg" />
      </button>
      <AnimatePresence mode="wait">
        {current === 0 && show && (
          <motion.div
            className={styles["card-container"]}
            custom={isRight}
            variants={animationsRight}
            animate="animate"
            initial="initial"
            exit="exit"
            transition={{ type: "line", duration: 0.3 }}
            key="1"
          >
            <CarouselCard script={scripts[0]} />
            {screenwidth > screenlimit ? (
              <CarouselCard script={scripts[1]} />
            ) : null}
          </motion.div>
        )}
        {current === 1 && show && (
          <motion.div
            className={styles["card-container"]}
            custom={isRight}
            variants={animationsRight}
            animate="animate"
            initial="initial"
            exit="exit"
            transition={{ type: "line", duration: 0.3 }}
            key="2"
          >
            <CarouselCard script={scripts[2]} />
            {screenwidth > screenlimit ? (
              <CarouselCard script={scripts[3]} />
            ) : null}
          </motion.div>
        )}
        {current === 2 && show && (
          <motion.div
            className={styles["card-container"]}
            custom={isRight}
            variants={animationsRight}
            animate="animate"
            initial="initial"
            exit="exit"
            transition={{ type: "line", duration: 0.3 }}
            key="3"
          >
            <CarouselCard script={scripts[4]} />
            {screenwidth > screenlimit ? (
              <CarouselCard script={scripts[5]} />
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        style={{ marginLeft: "20px", marginRight: "-20px" }}
        onClick={() => {
          SetisRight(true);
          setClick({ 1: false, 2: true });
        }}
      >
        <img alt="loading" src="/Homepage/icons/Chevrons Right.svg" />
      </button>
    </div>
  );
}

const CarouselCard = ({ script }) => {
  var slugify = require("slugify");
  async function handleView() {
    await axios(`/api/views`, {
      method: "post",
      data: {
        method: "add",
        id: script.id,
      },
    });
  }
  return (
    <Link href={`/scripts/${slugify(script?.title, { lower: true })}`}>
      <div className={styles["carousel-card"]} onClick={handleView}>
        <div className={styles["cc-img"]}>
          <Image
            alt="loading"
            src={`${imghost}/${script?.img}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["card-content"]}>
          <div className={styles["card-content-header"]}>
            <h4>{script?.title}</h4>
            <p>{script?.description}</p>
          </div>
          <div className={styles["lav-c"]}>
            <div className={styles["lav-container"]}>
              <div className={styles["lav-img-c"]}>
                <img alt="loading" src="/Script/Icons/eye.svg" />
              </div>
              <div className={styles["lav-inner-c"]}>
                <h5>{script?.views}</h5>
                <p>views</p>
              </div>
            </div>
            <div className={styles["lav-container"]}>
              <div className={styles["lav-img-c"]}>
                <img alt="loading" src="/Homepage/icons/heart-icon.svg" />
              </div>
              <div className={styles["lav-inner-c"]}>
                <h5>{script?.likes}</h5>
                <p>likes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
