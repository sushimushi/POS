import React, { useState, useEffect } from "react";

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Pagination,
  Input,
} from "@windmill/react-ui";
import Tabs from "../../components/Tabs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useMutation, useQuery } from "react-query";
import axiosClient from "../../apiClient";

import response from "../../utils/demo/tableData";

function Registers() {
  const resultsPerPage = 10;
  let totalResults = 0;

  const { isLoading, data } = useQuery("registerList", () => {
    return axiosClient.get("/registers/");
  });

  // tab names for receipt page
  const tabs = ["All Registers"];

  // page Tabs setup
  const [activeTab, setActiveTab] = useState(tabs[0]);

  // pagination change control
  function onPageChangeTable1(p) {
    // setPageTable1(p);
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      totalResults = data.length;
    }
  }, [data]);

  if (isLoading) {
    return <>Loading... </>;
  }

  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="py-4">
        {activeTab === "All Registers" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Register Name
                  </TableCell>
                  <TableCell>Receipt Number Prefix</TableCell>
                  <TableCell>Print Receipts? (for TheGenie Web)</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((register, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={register.selected}
                          id={register.registerId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={
                              "/app/settings/registers/" + register.registerId
                            }
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {register.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {register.receiptNumberPrefix}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {register.isPrintReceipt && <Badge>true</Badge>}
                      </span>
                      {/* <Badge type={register.status}>{register.status}</Badge> */}
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

export default Registers;
