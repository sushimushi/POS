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
  Avatar,
  Pagination,
  Input,
} from "@windmill/react-ui";
import Tabs from "../../components/Tabs";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import response from "../../utils/demo/tableData";
import { getObjectKeys } from "../../utils/demo/helper";
import { useQuery } from "react-query";
import axiosClient from "../../apiClient";
// make a copy of the data, for the second table

const tabMapObj = {
  "Addtional Charges": "addtionalCharges",
};

function AdditionalCharges() {
  const tabs = getObjectKeys(tabMapObj);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const accountId = localStorage.getItem("accountId");

  const { isLoading, data } = useQuery("addtionalCharges", () => {
    return axiosClient.get("additional-charge-details", {
      params: {
        filter: {
          where: {
            accountId: accountId,
          },
        },
      },
    });
  });
  console.log(data);

  const resultsPerPage = 10;
  let totalResults = 0;
  useEffect(() => {
    if (data) {
      console.log(data);
      totalResults = data.data.length;
    }
  }, [data]);

  const [tableData, setTableData] = useState(data);

  // pagination change control
  function onPageChangeTable1(p) {
    setTableData(p);
  }
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="py-4">
        {activeTab === "Addtional Charges" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Additional Charge Name
                  </TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Value</TableCell>
                  <TableCell>Tax Group</TableCell>
                  <TableCell>Is Automatically Added?</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((addtionalCharges, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={addtionalCharges.selected}
                          id={addtionalCharges.additionalChargeDetailsId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={"/app/settings/additional-charges/" + i}
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {addtionalCharges.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{addtionalCharges.type}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{addtionalCharges.value}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {addtionalCharges.taxGroup}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {addtionalCharges.isAutomaticallyAdded ? "Yes" : "No"}
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

export default AdditionalCharges;
