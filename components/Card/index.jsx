"use client";
import styles from "./card.module.css";
import { Alarm, MoreHoriz, GppGood } from "@mui/icons-material";

function Card({ icon, title, description }) {
  return (
    <div className={styles.main}>
      {icon === "access_alarm" ? (
        <Alarm
          sx={{
            fontSize: "40px",
          }}
        />
      ) : (
        <></>
      )}
      {icon === "rotation_icon" ? (
        <GppGood
          sx={{
            fontSize: "40px",
          }}
        />
      ) : (
        <></>
      )}
      {icon === "circle_icon" ? (
        <MoreHoriz
          sx={{
            fontSize: "40px",
          }}
        />
      ) : (
        <></>
      )}
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

export default Card;

// Step 1: Make static component. Render from page then complete its CSS
// Step 2: Pass dummy data as props for all variables mentioned in Figma and catch in input of
//  functional component and render them at correct place in UI

// Step 3: Map data using map function for actual data / Actual data from variables
