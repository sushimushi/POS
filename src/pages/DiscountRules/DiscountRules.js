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
  Input
} from "@windmill/react-ui";
import Tabs from "../../components/Tabs";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import response from "../../utils/demo/tableData";
// make a copy of the data, for the second table
const response2 = response.concat([]);

function DiscountRules() {
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

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

  // tab names for receipt page
  const tabs = ["All Discount Rules "];
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
        {activeTab === "All Discount Rules " && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    All
                  </TableCell>
                  <TableCell>Register Name</TableCell>
                  <TableCell>Receipt Number Prefix</TableCell>
                  <TableCell>Print Receipts? (for SlickPOS Web)</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {dataTable1.map((user, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={user.name}
                          id={user.name}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={"/app/settings/discount-rules/" + i}
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {user.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">$ {user.amount}</span>
                    </TableCell>
                    <TableCell>
                      <Badge type={user.status}>{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {new Date(user.date).toLocaleDateString()}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooter>
              <Pagination
                totalResults={totalResults}
                resultsPerPage={resultsPerPage}
                onChange={onPageChangeTable1}
                label="Table navigation"
              />
            </TableFooter>
          </TableContainer>
        )}
      </div>
    </>
  );
}

export default DiscountRules;
