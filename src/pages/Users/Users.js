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
  Button,
  Pagination,
  Input,
} from "@windmill/react-ui";
import Tabs from "../../components/Tabs";

import response from "../../utils/demo/tableData";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getObjectKeys } from "../../utils/demo/helper";
import { useQuery } from "react-query";
import axiosClient from "../../apiClient";
// make a copy of the data, for the second table
const response2 = response.concat([]);

const tabMapObj = {
  "All Cashiers": "cashiers",
  "All App Users": "appUsers",
  "All Waiters": "waiters",
  "All Kitchen Users": "kitchenUsers",
};

function Users() {
  // setup pages control for every table
  const tabs = getObjectKeys(tabMapObj);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const accountId = localStorage.getItem("accountId");

  const { isLoading, data } = useQuery(tabMapObj[activeTab], () => {
    return axiosClient.get("staff", {
      params: {
        filter: {
          where: {
            accountId: accountId,
            role: tabMapObj[activeTab].slice(0, -1),
          },
        },
      },
    });
  });

  // pagination change control
  function onPageChangeTable1(p) {
    // setTableData(p);
  }

  // pagination setup
  const resultsPerPage = 10;
  let totalResults = 0;
  useEffect(() => {
    if (data) {
      totalResults = data.data.length;
    }
  }, [data]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="py-4">
        {activeTab === "All Cashiers" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Cashier Name
                  </TableCell>
                  <TableCell>Cashier PIN</TableCell>
                  <TableCell>Has Manager Permissions?</TableCell>
                  <TableCell>Cashier Register</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((staff, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={staff.selected}
                          id={staff.staffId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={"/app/settings/cashier-details/" + i}
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {staff.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{staff.pin}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {staff.managerPermission ? "Yes" : "No"}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{/* registername */}</span>
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
        {activeTab === "All App Users" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    App User Name
                  </TableCell>
                  <TableCell>App User PIN</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((staff, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={staff.selected}
                          id={staff.staffId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={
                              "/app/settings/app-user-details/" + staff.staffId
                            }
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {staff.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">$ {staff.pin}</span>
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
        {activeTab === "All Waiters" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Waiter Name
                  </TableCell>
                  <TableCell>Waiter PIN</TableCell>
                  <TableCell>Waiter Register</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((staff, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={staff.name}
                          id={staff.name}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={"/app/settings/waiter-details/" + staff.staffId}
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {staff.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{staff.pin}</span>
                    </TableCell>
                    <TableCell>
                      {/* <span className="text-sm">{registerName}</span> */}
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
        {activeTab === "All Kitchen Users" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Kitchen Name
                  </TableCell>
                  <TableCell>Kitchen PIN</TableCell>
                  <TableCell>Kitchen Register</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((staff, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={staff.name}
                          id={staff.name}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={
                              "/app/settings/kitchen-user-details/" +
                              staff.staffId
                            }
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {staff.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{staff.pin}</span>
                    </TableCell>
                    <TableCell>
                      {/* <span className="text-sm">{registerName}</span> */}
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

export default Users;
