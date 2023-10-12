import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Tabs, { Tab } from "../Tabs/Tabs";

import styles from "./Authorization.module.css";

const tabs: Tab[] = [
  {
    label: "Sign In",
    value: "signIn",
  },
  { label: "Sign Up", value: "signUp" },
];

const Authorization: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleChangeTab = (tab: Tab) => {
    setActiveTab(tab.value);
  };

  return (
    <div className={styles.tabsWrapper}>
      <Tabs
        className={styles.tabs}
        activeTab={activeTab}
        tabs={tabs}
        onTabClick={handleChangeTab}
      />
      <div className={styles.tabsContentWrapper}>
        {activeTab === "signIn" && <SignIn />}

        {activeTab === "signUp" && <SignUp />}
      </div>
    </div>
  );
};

export default Authorization;
