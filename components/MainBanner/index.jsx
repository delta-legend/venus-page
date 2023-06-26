import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div>
      <div className={styles.mainBanner}>
        <div className={styles.heading}>
          <h1>
            Universal <br />
            Money Markets
          </h1>
        </div>
        <div className={styles.description}>
          <p>
            Simple and powerful community-driven
            <br />
            finance for the entire globe.
          </p>
        </div>
        <div>
          <a href="" target="_blank" className={styles.launchBtn}>
            Launch App
          </a>
        </div>
        <div className={styles.buttonGroup}>
          {/* <h4>
            Lend <span>&#x279D;</span>
          </h4>
          <h4>
            Borrow <span>&#x279D;</span>
          </h4>
          <h4>
            Earn<span>&#x279D;</span>
          </h4> */}
          <a href="" target="_blank" className={styles.links}>
            Lend <span className={styles.pointer}>&#x279D;</span>
          </a>
          <span className={styles.vl}></span>

          <a href="" target="_blank" className={styles.links}>
            Borrow <span className={styles.pointer}>&#x279D;</span>
          </a>
          <span className={styles.vl}></span>
          <a href="" target="_blank" className={styles.links}>
            Earn <span className={styles.pointer}>&#x279D;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
