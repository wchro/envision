import styles from "./banner.module.css";

const Banner = ({ shortText, text, image }) => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div>
          <h1 className={styles.bannerShortText}>{shortText}</h1>
        </div>
        <h2 className={styles.bannerText}>{text}</h2>
      </div>
      <div className={styles.bannerBackground}>
        <img className={styles.backgroundImage} src={image} />
      </div>
    </div>
  );
};

export default Banner;
