import React, { useState, useEffect } from "react";

import {
  Table,
  Input,
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
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useMutation, useQuery } from "react-query";
import axiosClient from "../../apiClient";

import response from "../../utils/demo/tableData";
// make a copy of the data, for the second table
const response2 = response.concat([]);

function ProductsList() {
  const resultsPerPage = 10;
  let totalResults = 0;

  const { isLoading, data } = useQuery("productList", () => {
    return axiosClient.get("/products/");
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      totalResults = data.length;
    }
  }, [data]);
  // setup pages control for every table

  const [pageTable1, setPageTable1] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([]);

  // tab names for receipt page
  const tabs = ["All Products"];
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

  // on page change, load new sliced data
  // here you would make another server request for new data

  if (isLoading) {
    return <>Loading... </>;
  }
  return (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="py-4">
        <TableContainer className="mb-8">
          <Table>
            <TableHeader>
              <tr>
                <TableCell>
                  <Input type="checkbox" className="mr-2" />
                  Product Name
                </TableCell>
                <TableCell>Product Price</TableCell>
                <TableCell>Unit of Measure</TableCell>
                {/* <TableCell>Product Options</TableCell>
                 <TableCell>Product Category</TableCell>
                <TableCell>Tax Group</TableCell>
                <TableCell>Sort Order</TableCell> */}
              </tr>
            </TableHeader>
            <TableBody>
              {data.data.map((product, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <Input
                        type="checkbox"
                        name={product.selected}
                        id={product.productId}
                        className="mr-2"
                      />
                      <div>
                        <Link
                          to={"/app/product/" + i}
                          className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                        >
                          {product.name}
                        </Link>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">$ {product.markedPrice}</span>
                  </TableCell>
                  <TableCell>
                    <Badge type={product.status}>{product.unitOfMeasure}</Badge>
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
      </div>
    </>
  );
}

export default ProductsList;
