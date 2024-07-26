import React from "react";
import styles from "./Footer.module.css";
import Icon from "../Assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Icon />
        <p>© 2024 Dogs - Alguns direitos reservados. </p>
      </div>
    </footer>
  );
};

export default Footer;
