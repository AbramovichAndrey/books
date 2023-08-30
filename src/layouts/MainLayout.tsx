import React from "react";

import styles from "./MainLayout.module.css";

interface IMainLayoutProps {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({ header, main, footer }) => {
  return (
    <section className={styles.app}>
      <header className={styles.header}>{header}</header>
      <div className={styles.wrapper}>
        <main className={styles.main}>{main}</main>
        <footer className={styles.footer}>{footer}</footer>
      </div>
    </section>
  );
};

export default MainLayout;
