import React, { useState } from "react";
import styles from "./BookDetailsTabs.module.css";
import Tabs, { Tab } from "../Tabs/Tabs";
import Typography from "../Typography/Typography";
import { IBookDetails } from "../../models/bookDetails.model";

interface ITabsProps {
  book: IBookDetails;
}

const tabs: Tab[] = [
  {
    label: "Description",
    value: "description",
  },
  { label: "Authors", value: "authors" },
  { label: "Reviews", value: "reviews" },
];

const BookDetailsTabs: React.FC<ITabsProps> = ({ book }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleChangeTab = (tab: Tab) => {
    setActiveTab(tab.value);
  };

  return (
    <div>
      <Tabs
        className={styles.tabs}
        activeTab={activeTab}
        tabs={tabs}
        onTabClick={handleChangeTab}
      />
      
      {activeTab === "description" && (
        <Typography
          className={styles.tabsContent}
          variant="p"
          font="secondaryFont"
        >
          {book.desc}
        </Typography>
      )}

      {activeTab === "authors" && (
        <Typography
          className={styles.tabsContent}
          variant="p"
          font="secondaryFont"
        >
          {book.authors}
        </Typography>
      )}

      {activeTab === "reviews" && (
        <Typography
          className={styles.tabsContent}
          variant="p"
          font="secondaryFont"
        >
          {book.desc}
        </Typography>
      )}
    </div>
  );
};

export default BookDetailsTabs;
