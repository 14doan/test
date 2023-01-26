import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Slider.module.css';

const Slider = ({ images, titles, descriptions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 300000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        <div className={styles.imagebox}>
          <Image
            width={500}
            height={500}
            src={images[currentIndex]}
            alt={titles[0][currentIndex]}
          />
          <h4>{titles[0][currentIndex]}</h4>
        </div>
        <div className={styles.textbox}>
          <h2>{titles[1][0]}</h2>
          <p>{descriptions[currentIndex][0]}</p>
          <h2>{titles[1][1]}</h2>
          <p>{descriptions[currentIndex][1]}</p>
          <h2>{titles[1][2]}</h2>
          <p>{descriptions[currentIndex][2]}</p>
        </div>
      </div>
      <div
        className={styles.slideBtn}
        id={styles.prevBtn}
        onClick={handlePrevClick}
      >
        <span>⏮</span>
      </div>
      <div
        className={styles.slideBtn}
        id={styles.nextBtn}
        onClick={handleNextClick}
      >
        <span>⏭</span>
      </div>
    </div>
  );
};

export default Slider;
