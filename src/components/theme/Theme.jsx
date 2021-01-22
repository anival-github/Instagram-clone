import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import styles from "./Theme.module.css";
import React, { useState } from "react";

export default function Theme() {
  let hour = new Date().getHours();
  window.onload = () => {
    if (hour > 9 && hour < 18) {
      localStorage.setItem("theme", "day");
    } else {
      localStorage.setItem("theme", "night");
    }
  };

  let [value, setValue] = useState(localStorage.getItem("theme"));

  function changeTheme() {
    if (value === "day") {
      console.log("day", value);
      localStorage.setItem("theme", "night");
      setValue("night");
    } else if (value === "night") {
      localStorage.setItem("theme", "day");
      setValue("day");
    }
    console.log("value", value);
    if (localStorage.getItem("theme") === "day") {
      document.body.style.backgroundColor = "#fcfcfc";
      document.querySelector("header").style.backgroundColor = "#fcfcfc";
      document.querySelector("header").style.boxShadow =
        "0px 5px 30px rgba(0, 0, 0, 0.1)";
      document.querySelectorAll(".post").forEach((item) => {
        item.style.backgroundColor = "#fcfcfc";
        item.style.boxShadow = "0px 5px 30px rgba(0, 0, 0, 0.1)";
      });
    } else {
      document.body.style.backgroundColor = "#272242";
      document.querySelector("header").style.backgroundColor = "#272242";
      document.querySelector("header").style.boxShadow =
        "0px 5px 30px rgba(255, 255, 255, 0.4)";
      document.querySelectorAll(".post").forEach((item) => {
        item.style.backgroundColor = "#272242";
        item.style.boxShadow = "0px 5px 30px rgba(255, 255, 255, 0.4)";
      });
    }
  }

  return (
    <div className={styles.themeBox}>
      {value === "day" ? (
        <img
          src={moon}
          alt="moon"
          onClick={changeTheme}
          className={styles.moon}
        />
      ) : (
        <img
          src={sun}
          alt="sun"
          className={styles.moon}
          onClick={changeTheme}
        />
      )}
    </div>
  );
}
