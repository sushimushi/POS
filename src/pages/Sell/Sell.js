import React, { useState, useEffect } from "react";

import PageTitle from "../../components/Typography/PageTitle";
import SectionTitle from "../../components/Typography/SectionTitle";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from "@windmill/react-ui";
import Tabs from "../../components/Tabs";

import Delivery from "./Delivery";
import Tables from "./Tables";
import TakeAway from "./TakeAway";
import ModalPage from "../../components/Modal";

import response from "../../utils/demo/tableData";
// make a copy of the data, for the second table
const response2 = response.concat([]);

function Sell() {
  /**
   * DISCLAIMER: This code could be badly improved, but for the sake of the example
   * and readability, all the logic for both table are here.
   * You would be better served by dividing each table in its own
   * component, like Table(?) and TableWithActions(?) hiding the
   * presentation details away from the page view.
   */

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([]);

  // setup data for every tables
  const [isModalOpen, setIsModalOpen] = useState(false);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // tab names for receipt page
  const tabs = ["Tables", "Delivery", "Take Away"];
  // page Tabs setup
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p);
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(
      response.slice(
        (pageTable1 - 1) * resultsPerPage,
        pageTable1 * resultsPerPage
      )
    );
  }, [pageTable1]);

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="py-4">
        {activeTab === "Tables" && <Tables />}
        {activeTab === "Delivery" && <Delivery />}
        {activeTab === "Take Away" && <TakeAway />}
      </div>
    </>
  );
}

export default Sell;
