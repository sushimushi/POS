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
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axiosClient from "../../apiClient";
import { getObjectKeys } from "../../utils/demo/helper";

const tabMapObj = {
  "Taxes": "taxes",
  "Tax Groups": "taxGroups",
};
function Taxes() {
  const accountId = localStorage.getItem("accountId");
  const tabs = getObjectKeys(tabMapObj);
  const [tableData, setTableData] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const resultsPerPage = 10;
  let totalResults = 0;

  const { isLoading, data } = useQuery(tabMapObj[activeTab], () => {
    return axiosClient.get(
      tabMapObj[activeTab]
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
        .toLowerCase(),
      {
        params: {
          filter: {
            where: {
              accountId: accountId,
            },
          },
        },
      }
    );
  });

  useEffect(() => {
    if (data) {
      totalResults = data.length;
    }
  }, [data]);

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
        {activeTab === "Taxes" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Tax Name
                  </TableCell>
                  <TableCell>Tax Percent</TableCell>
                  {/* <TableCell>Is Linked To A Tax Group?</TableCell> */}
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((tax, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={tax.selected}
                          id={tax.taxId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={
                              "/app/settings/product-categories/" +
                              tax.taxId
                            }
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {tax.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{tax.percent}</span>
                    </TableCell>
                    {/* <TableCell>
                      <span className="text-sm">{category.sortOrder}</span>
                    </TableCell> */}
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

        {activeTab === "Tax Groups" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Tax Group Name
                  </TableCell>
                  <TableCell>
                    Net Tax Percent
                  </TableCell>
                  {/* <TableCell>
                    Is Tax Included In Product Price?
                  </TableCell> */}
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((taxGroup, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={taxGroup.selected}
                          id={taxGroup.taxGroupId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={
                              "/app/settings/order-ticket-groups/" +
                              taxGroup.taxGroupId
                            }
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {taxGroup.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span>{taxGroup.total}</span>
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

export default Taxes;
