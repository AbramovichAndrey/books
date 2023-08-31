import React from "react";
import clsx from "clsx";

import MainButton from "../Buttons/MainButton/MainButton";

import { Tab } from "./Tabs";
import styles from "./Tabs.module.css";
import Typography from "../Typography/Typography";

interface TabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tab: Tab;
  onTabClick: (tab: Tab) => void;
  className?: string;
}

const TabItem: React.FC<TabItemProps> = ({ tab, onTabClick, className }) => {
  const handleClick = () => onTabClick(tab);

  return (
    <li>
      <MainButton
        className={clsx(styles.button, className)}
        onClick={handleClick}
      >
        {
          <Typography
            font={"secondaryFont"}
            variant={"span"}
            children={tab.label}
          />
        }
      </MainButton>
    </li>
  );
};

export default TabItem;
