import styles from "./carousel.module.scss";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel2() {
  const [current, setcurrent] = useState(0);
  const [isRight, SetisRight] = useState(true);
  const [didClick, setClick] = useState({ 1: false, 2: false });
  const animationsRight = {
    initial: (isRight) => ({ x: isRight ? 2000 : -2000, opacity: 0.6 }),
    animate: { x: 0, opacity: 1 },
    exit: (isRight) => ({ x: !isRight ? 2000 : -2000, opacity: 0.6 }),
  };

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
        <img alt="loading" src="/Homepage/icons/Chevrons Left.png" />
      </button>
      <AnimatePresence mode="wait">
        {current === 0 && (
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
            <CarouselCard />
            <CarouselCard />
          </motion.div>
        )}
        {current === 1 && (
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
            <CarouselCard />
            <CarouselCard />
          </motion.div>
        )}
        {current === 2 && (
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
            <CarouselCard />
            <CarouselCard />
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
        <img alt="loading" src="/Homepage/icons/Chevrons Right.png" />
      </button>
    </div>
  );
}

const CarouselCard = () => {
  return (
    <div className={styles["carousel-card"]}>
      <img alt="loading" src="/Homepage/Image/caro-img.jpg" className={styles["cc-img"]} />
      <div className={styles["card-content"]}>
        <div className={styles["card-content-header"]}>
          <h4>Strong Simulator X Script...</h4>
          <p>Use Strong Simulator X Script now to train your character like...</p>
        </div>
        <div className={styles["lav-c"]}>
          <div className={styles["lav-container"]}>
            <div className={styles["lav-img-c"]}>
              <img alt="loading" src="/Script/Icons/eye.svg" />
            </div>
            <div className={styles["lav-inner-c"]}>
              <h5>8,230</h5>
              <p>views</p>
            </div>
          </div>
          <div className={styles["lav-container"]}>
            <div className={styles["lav-img-c"]}>
              <img alt="loading" src="/Homepage/icons/heart-icon.svg" />
            </div>
            <div className={styles["lav-inner-c"]}>
              <h5>345</h5>
              <p>likes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
