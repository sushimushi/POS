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
import { useQuery } from "react-query";
import axiosClient from "../../apiClient";

function Registers() {
  const resultsPerPage = 10;
  let totalResults = 0;

  const { isLoading, data } = useQuery("discountRuleList", () => {
    return axiosClient.get("/discounts/");
  });

  // tab names for receipt page
  const tabs = ["All DiscountRule"];

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
        {activeTab === "All DiscountRule" && (
          <TableContainer className="mb-8">
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>
                    <Input type="checkbox" className="mr-2" />
                    Coupon Code
                  </TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Level</TableCell>
                  <TableCell>Discount</TableCell>
                  <TableCell>Start date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Status</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {data.data.map((discount, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center text-sm">
                        <Input
                          type="checkbox"
                          name={discount.selected}
                          id={discount.discountId}
                          className="mr-2"
                        />
                        <div>
                          <Link
                            to={
                              "/app/settings/discounts/" + discount.discountId
                            }
                            className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                          >
                            {discount.couponCode}
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{discount.type}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{discount.level}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{discount.discountAmount}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{discount.startDate}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{discount.endDate}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">
                        {discount.visibility ? "active" : "inactive"}
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

export default Registers;
