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
import { getObjectKeys } from "../../utils/demo/helper";
import { useQuery } from "react-query";
import axiosClient from "../../apiClient";

import response from "../../utils/demo/tableData";
// make a copy of the data, for the second table
const response2 = response.concat([]);
const tabs = [
  "Payment Types",
  "Petty Cash Categories",
  "Additional Details",
  "Tags",
];
const tabMapObj = {
  "Payment Types": "paymentTypes",
  "Petty Cash Categories": "pettyCashCategories",
  "Additional Details": "additionalDetails",
  Tags: "tags",
};

function CustomFields() {
  const tabs = getObjectKeys(tabMapObj);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const accountId = localStorage.getItem("accountId");

  const { isLoading, data } = useQuery(tabMapObj[activeTab], () => {
    return axiosClient.get("custom-fields", {
      params: {
        filter: {
          where: {
            accountId: accountId,
            fieldType: tabMapObj[activeTab],
          },
        },
      },
    });
  });

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
        {activeTab === "Payment Types" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Payment Name
                  </TableCell>
                  <TableCell>Description</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((user, i) => (
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
                            to={"/app/settings/payment-types/" + i}
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
        {activeTab === "Petty Cash Categories" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Petty Cash Category
                  </TableCell>
                  <TableCell>Description</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((user, i) => (
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
                            to={"/app/settings/petty-cash-categories/" + i}
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
        {activeTab === "Additional Details" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Additional Detail Name
                  </TableCell>
                  <TableCell>Additional Detail Type</TableCell>
                  <TableCell>Is Printable On Receipt?</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((user, i) => (
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
                            to={"/app/settings/additional-details/" + i}
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
        {activeTab === "Tags" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Tag Name
                  </TableCell>
                  <TableCell>Tag Type</TableCell>
                  <TableCell>Tag Colour</TableCell>
                  <TableCell>Is Printable On Receipt?</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((user, i) => (
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
                            to={"/app/settings/tags/" + i}
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

export default CustomFields;
