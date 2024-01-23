/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/app/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
  },
  {
    path: "/app/sell",
    icon: "CartLinedIcon",
    name: "Sell",
  },
  {
    path: "/app/receipts",
    icon: "FormsIcon",
    name: "Receipts",
  },
  {
    path: "/app/products",
    icon: "TagIcon",
    name: "Products",
  },
  {
    path: "/app/customers",
    icon: "PeopleLinedIcon",
    name: "Customers",
  },
  {
    path: "/app/settings",
    icon: "OutlineCogIcon",
    name: "Settings",
    routes: [
      {
        path: "/app/settings/shop",
        icon: "",
        name: "Shop Setup",
      },
      {
        path: "/app/settings/registers",
        icon: "",
        name: "Registers",
      },
      {
        path: "/app/settings/product-categories",
        icon: "",
        name: "Product Categories",
      },
      {
        path: "/app/settings/product-options",
        icon: "",
        name: "Product Options",
      },
      {
        path: "/app/settings/taxes",
        icon: "",
        name: "Taxes",
      },
      {
        path: "/app/settings/users",
        icon: "",
        name: "Users",
      },
      {
        path: "/app/settings/discount-rules",
        icon: "",
        name: "Discount Rules",
      },
      {
        path: "/app/settings/additional-charges",
        icon: "",
        name: "Additional Charges",
      },
      {
        path: "/app/settings/custom-fields",
        icon: "",
        name: "Custom Fields",
      },
      {
        path: "/app/settings/preferences",
        icon: "",
        name: "Preferences",
      },
      {
        path: "/app/settings/printer",
        icon: "",
        name: "Printer",
      },
    ],
  },
  // {
  //   icon: "HomeIcon",
  //   name: "UI Elements",
  //   routes: [
  //     {
  //       path: "/app/forms",
  //       icon: "FormsIcon",
  //       name: "Forms",
  //     },
  //     {
  //       path: "/app/cards",
  //       icon: "CardsIcon",
  //       name: "Cards",
  //     },
  //     {
  //       path: "/app/charts",
  //       icon: "ChartsIcon",
  //       name: "Charts",
  //     },
  //     {
  //       path: "/app/buttons",
  //       icon: "ButtonsIcon",
  //       name: "Buttons",
  //     },
  //     {
  //       path: "/app/modals",
  //       icon: "ModalsIcon",
  //       name: "Modals",
  //     },
  //     {
  //       path: "/app/tables",
  //       icon: "TablesIcon",
  //       name: "Tables",
  //     },
  //   ],
  // },
  // {
  //   icon: "PagesIcon",
  //   name: "Pages",
  //   routes: [
  //     // submenu
  //     {
  //       path: "/login",
  //       name: "Login",
  //     },
  //     {
  //       path: "/create-account",
  //       name: "Create account",
  //     },
  //     {
  //       path: "/forgot-password",
  //       name: "Forgot password",
  //     },
  //     {
  //       path: "/app/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/app/blank",
  //       name: "Blank",
  //     },
  //   ],
  // },
];

export default routes;
