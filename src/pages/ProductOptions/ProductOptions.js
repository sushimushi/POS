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

import response from "../../utils/demo/tableData";
const response2 = response.concat([]);

const tabMapObj = {
  Variants: "variants",
  "Variant Groups": "variantGroups",
  Addons: "addons",
  "Addon Groups": "addonGroups",
  "Item Groups": "itemGroups",
};

function ProductOptions() {
  // setup pages control for every table
  const tabs = getObjectKeys(tabMapObj);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { isLoading, data } = useQuery(tabMapObj[activeTab], () => {
    return axiosClient.get(
      tabMapObj[activeTab]
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
        .toLowerCase()
    );
  });

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="py-4">
        {activeTab === "Variants" && <Variants data={data} />}
        {activeTab === "Variant Groups" && <VariantsGroups data={data} />}
        {activeTab === "Addons" && <Addons data={data} />}
        {activeTab === "Addon Groups" && <AddonsGroups data={data} />}
        {activeTab === "Item Groups" && <ItemGroups data={data} />}
      </div>
    </>
  );
}

export default ProductOptions;

function Variants({ data }) {
  const [tableData, setTableData] = useState(1);

  // pagination change control
  function onPageChangeTable1(p) {
    setTableData(p);
  }

  // pagination setup
  const resultsPerPage = 10;
  let totalResults = 0;
  useEffect(() => {
    if (data) {
      totalResults = data.data.length;
    }
  }, [data]);

  return (
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>
              <Input type="checkbox" className="mr-2" />
              Variant Name
            </TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Sort Order</TableCell>
            {/* <TableCell>Is Linked To A Variant Group?</TableCell> */}
          </tr>
        </TableHeader>
        <TableBody>
          {data.data.map((variant, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center text-sm">
                  <Input
                    type="checkbox"
                    name={variant.selected}
                    id={variant.variantId}
                    className="mr-2"
                  />
                  <div>
                    <Link
                      to={"/app/settings/variants/" + i}
                      className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                    >
                      {variant.name}
                    </Link>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">${variant.price}</span>
              </TableCell>
              <TableCell>
                <Badge>{variant.sortOrder}</Badge>
              </TableCell>
              <TableCell></TableCell>
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
  );
}

function VariantsGroups({ data }) {
  const [tableData, setTableData] = useState(1);

  // pagination change control
  function onPageChangeTable1(p) {
    setTableData(p);
  }

  // pagination setup
  const resultsPerPage = 10;
  let totalResults = 0;
  useEffect(() => {
    if (data) {
      totalResults = data.data.length;
    }
  }, [data]);

  return (
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>
              <Input type="checkbox" className="mr-2" />
              Variant Group Name
            </TableCell>
            <TableCell>Variants</TableCell>
            <TableCell>Sort Order</TableCell>
          </tr>
        </TableHeader>
        <TableBody>
          {data.data.map((variantGroup, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="flex items-center text-sm">
                  <Input
                    type="checkbox"
                    name={variantGroup.selected}
                    id={variantGroup.variantGroupId}
                    className="mr-2"
                  />
                  <div>
                    <Link
                      to={"/app/settings/variant-groups/" + i}
                      className="font-semibold hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer"
                    >
                      {variantGroup.name}
                    </Link>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm">
                  {variantGroup.variantIds.length}
                </span>
              </TableCell>
              <TableCell>
                <Badge type={variantGroup.order}>{variantGroup.order}</Badge>
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
  );
}

function Addons({ data }) {
  console.log(data);

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

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
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>
              <Input type="checkbox" className="mr-2" />
              Addon Name
            </TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Sort Order</TableCell>
            <TableCell>Is Linked To A Addon Group?</TableCell>
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
                      to={"/app/settings/addons/" + i}
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
  );
}

function AddonsGroups({ data }) {
  console.log(data);

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

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
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>
              <Input type="checkbox" className="mr-2" />
              Addon Group Name
            </TableCell>
            <TableCell>Addons</TableCell>
            <TableCell>Sort Order</TableCell>
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
                      to={"/app/settings/addon-groups/" + i}
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
  );
}

function ItemGroups({ data }) {
  console.log(data);
  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1);

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([]);

  // pagination setup
  const resultsPerPage = 10;
  const totalResults = response.length;

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
    <TableContainer className="mb-8">
      <Table>
        <TableHeader>
          <tr>
            <TableCell>
              <Input type="checkbox" className="mr-2" />
              Item Group Name
            </TableCell>
            <TableCell>Items</TableCell>
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
                      to={"/app/settings/item-groups/" + i}
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
  );
}
