import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PrintingPreferences from "./PrinterPreferences";
import SellingPreferences from "./SellingPreferences";
import PermissionPreferences from "./PermissionPreferences";
import Tabs from "../../components/Tabs";

function Preferences() {
  // tab names for receipt page
  const tabs = [
    "Selling Preferences",
    "Printing Preferences",
    "Permission Preferences",
  ];
  // page Tabs setup
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Selling Preferences" && <SellingPreferences />}
      {activeTab === "Printing Preferences" && <PrintingPreferences />}
      {activeTab === "Permission Preferences" && <PermissionPreferences />}
    </>
  );
}

export default Preferences;
