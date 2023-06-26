"use client";

import styles from "./footer.module.css";
import { GitHub } from "@mui/icons-material";
import Twitter from "@mui/icons-material/Twitter";
import YoutubeSearchedForOutlined from "@mui/icons-material/YoutubeSearchedForOutlined";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container1}>
        <h2>VENUS</h2>
        <div className={styles.container2}>
          <a href="" target="_blank" className={styles.links}>
            Whitepaper
          </a>
          <a href="" target="_blank" className={styles.links}>
            Docs
          </a>
          <a href="" target="_blank" className={styles.links}>
            Market
          </a>
        </div>
        <a href="" target="_blank" className={styles.launchBtn}>
          Launch App
        </a>
      </div>

      <div className={styles.container3}>
        <p>@{new Date().getFullYear()} Venus Protocol</p>
        <div className={styles.container4}>
          <a href="" target="_blank" className={styles.handles}>
            <YoutubeSearchedForOutlined />
          </a>
          <a href="" target="_blank" className={styles.handles}>
            <Twitter />
          </a>
          <a href="" target="_blank" className={styles.handles}>
            <GitHub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
