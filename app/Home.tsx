"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "./Tabs/Dashboard/Dashboard";
import Analysis from "./Tabs/Analysis";
import Tuning from "./Tabs/Tuning";
import Settings from "./Tabs/Settings";

export default function Home({ totalCustomers }: { totalCustomers: number }) {
  const [selectedTab, setSelectedTab] = useState<string>("Dashboard");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Dashboard":
        return <Dashboard totalCustomers={totalCustomers} />;
      case "Analysis":
        return <Analysis />;
      case "Tuning":
        return <Tuning />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard totalCustomers={totalCustomers} />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar handleTabChange={handleTabChange} selectedTab={selectedTab} />
      <main className="flex-1 bg-gray-900 p-4">{renderContent()}</main>
    </div>
  );
}
