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
  Input,
} from "@windmill/react-ui";
import Tabs from "../../components/Tabs";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { useQuery } from "react-query";
import axiosClient from "../../apiClient";

function ProductCategories() {
  const tabs = ["All Product Categories", "All Order Ticket Groups"];
  const [tableData, setTableData] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const resultsPerPage = 10;
  let totalResults = 0;
  const tabMapObj = {
    "All Product Categories": "categories",
    "All Order Ticket Groups": "orderTicketGroups",
  };

  const { isLoading, data } = useQuery(tabMapObj[activeTab], () => {
    return axiosClient.get(
      tabMapObj[activeTab]
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
        .toLowerCase()
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
        {activeTab === "All Product Categories" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Product Category Name
                  </TableCell>
                  <TableCell>Sort Order</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((category, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={category.selected}
                          id={category.categoryId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={
                              "/app/settings/product-categories/" +
                              category.categoryId
                            }
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {category.name}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        $ {category.orderTicketGroupId}
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

        {activeTab === "All Order Ticket Groups" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Order Ticket Group Name
                  </TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((orderTicketGroup, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={orderTicketGroup.selected}
                          id={orderTicketGroup.orderTicketGroupId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={
                              "/app/settings/order-ticket-groups/" +
                              orderTicketGroup.orderTicketGroupId
                            }
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {orderTicketGroup.name}
                          </Link>
                        </div>
                      </div>
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

export default ProductCategories;
