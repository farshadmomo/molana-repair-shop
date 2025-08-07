"use client";
import { createContext, useContext, useState, useEffect } from "react";

const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("");

  // بارگذاری مقدار ذخیره‌شده از localStorage
  useEffect(() => {
    const storedTab = sessionStorage.getItem("activeTab");
    if (storedTab !== null) {
      setActiveTab(storedTab);
    }
  }, []);

  // ذخیره مقدار جدید در localStorage هر بار که تغییر کرد
  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTab = () => useContext(TabContext);
