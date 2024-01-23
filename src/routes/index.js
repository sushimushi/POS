import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Sell = lazy(() => import("../pages/Sell/Sell"));
const ReceiptsList = lazy(() => import("../pages/Receipt/ReceiptsList"));
const ReceiptDetails = lazy(() => import("../pages/Receipt/ReceiptDetails"));
const ProductsList = lazy(() => import("../pages/Product/ProductsList"));
const ProductsDetails = lazy(() => import("../pages/Product/ProductDetails"));
const CustomersList = lazy(() => import("../pages/Customer/CustomersList"));
const CustomerDetails = lazy(() => import("../pages/Customer/CustomerDetails"));
const Order = lazy(() => import("../pages/Order/Order"));
const Shop = lazy(() => import("../pages/Shop/Shop"));
const Registers = lazy(() => import("../pages/Register/Registers"));
const RegistersDetails = lazy(() =>
  import("../pages/Register/RegistersDetails")
);
const ProductCategories = lazy(() =>
  import("../pages/ProductCategories/ProductCategories")
);
const ProductCategoriesDetails = lazy(() =>
  import("../pages/ProductCategories/ProductCategoriesDetails")
);
const OrderTicketGroupsDetails = lazy(() =>
  import("../pages/ProductCategories/OrderTicketGroupsDetails")
);
const ProductOptions = lazy(() =>
  import("../pages/ProductOptions/ProductOptions")
);
const Variants = lazy(() => import("../pages/ProductOptions/Variants"));
const VariantGroups = lazy(() =>
  import("../pages/ProductOptions/VariantGroups")
);
const Addons = lazy(() => import("../pages/ProductOptions/Addons"));
const AddonGroups = lazy(() => import("../pages/ProductOptions/AddonGroups"));
const ItemGroups = lazy(() => import("../pages/ProductOptions/ItemGroups"));
const Taxes = lazy(() => import("../pages/Tax/Taxes"));
const TaxDetails = lazy(() => import("../pages/Tax/TaxDetails"));
const TaxGroupDetails = lazy(() => import("../pages/Tax/TaxGroupDetails"));
const Users = lazy(() => import("../pages/Users/Users"));
const AppUserDetails = lazy(() => import("../pages/Users/AppUserDetails"));
const CashierDetails = lazy(() => import("../pages/Users/CashierDetails"));
const WaiterDetails = lazy(() => import("../pages/Users/WaiterDetails"));
const KitchenUserDetails = lazy(() =>
  import("../pages/Users/KitchenUserDetails")
);
const DiscountRules = lazy(() =>
  import("../pages/DiscountRules/DiscountRules")
);
const DiscountRulesDetails = lazy(() =>
  import("../pages/DiscountRules/DiscountRulesDetails")
);
const AdditionalCharges = lazy(() =>
  import("../pages/AdditionalCharges/AdditionalCharges")
);
const AdditionalChargesDetails = lazy(() =>
  import("../pages/AdditionalCharges/AdditionalChargesDetails")
);
const CustomFields = lazy(() => import("../pages/CustomFields/CustomFields"));
const PaymentTypes = lazy(() => import("../pages/CustomFields/PaymentTypes"));
const PettyCashCategories = lazy(() =>
  import("../pages/CustomFields/PettyCashCategories")
);
const AdditionalDetails = lazy(() =>
  import("../pages/CustomFields/AdditionalDetails")
);
const Tags = lazy(() => import("../pages/CustomFields/Tags"));
const Preferences = lazy(() => import("../pages/Preferences/Preferences"));
const Printers = lazy(() => import("../pages/Printers"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Subscription = lazy(() => import("../pages/Subscription"));

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
    title: "Dashboard",
  },
  {
    path: "/sell",
    component: Sell,
    title: "Sell",
  },
  {
    path: "/sell/order",
    component: Order,
    title: "Order",
  },
  {
    path: "/receipts",
    component: ReceiptsList,
    title: "Receipts",
  },
  {
    path: "/receipt/:id",
    component: ReceiptDetails,
    title: "Receipts",
  },
  {
    path: "/products",
    component: ProductsList,
    title: "Products",
  },
  {
    path: "/product-details/:id",
    component: ProductsDetails,
    title: "Products Details",
  },
  {
    path: "/customers",
    component: CustomersList,
    title: "Customers",
  },
  {
    path: "/customer/:id",
    component: CustomerDetails,
    title: "Customers Details",
  },
  {
    path: "/settings",
    component: Shop,
    title: "Shop",
  },
  {
    path: "/settings/shop",
    component: Shop,
    title: "Shop",
  },
  {
    path: "/settings/registers",
    component: Registers,
    title: "Register",
  },
  {
    path: "/settings/registers/:id",
    component: RegistersDetails,
    title: "Register Details",
  },
  {
    path: "/settings/product-categories",
    component: ProductCategories,
    title: "Product Categories",
  },
  {
    path: "/settings/product-categories/:id",
    component: ProductCategoriesDetails,
    title: "Product Categories Details",
  },
  {
    path: "/settings/order-ticket-groups/:id",
    component: OrderTicketGroupsDetails,
    title: "Order Ticket Groups Details",
  },
  {
    path: "/settings/product-options",
    component: ProductOptions,
    title: "Product Options",
  },
  {
    path: "/settings/variants/:id",
    component: Variants,
    title: "Variants",
  },
  {
    path: "/settings/variant-Groups/:id",
    component: VariantGroups,
    title: "Variant Groups",
  },
  {
    path: "/settings/addons/:id",
    component: Addons,
    title: "Addons",
  },
  {
    path: "/settings/addon-groups/:id",
    component: AddonGroups,
    title: "Product Options",
  },
  {
    path: "/settings/item-groups/:id",
    component: ItemGroups,
    title: "Item Groups",
  },
  {
    path: "/settings/taxes",
    component: Taxes,
    title: "Taxes",
  },
  {
    path: "/settings/taxes/:id",
    component: TaxDetails,
    title: "Taxes",
  },
  {
    path: "/settings/tax-groups/:id",
    component: TaxGroupDetails,
    title: "Taxes",
  },
  {
    path: "/settings/users",
    component: Users,
    title: "Users",
  },
  {
    path: "/settings/app-user-details/:id",
    component: AppUserDetails,
    title: "App User Details",
  },
  {
    path: "/settings/cashier-details/:id",
    component: CashierDetails,
    title: "Cashier Details",
  },
  {
    path: "/settings/waiter-details/:id",
    component: WaiterDetails,
    title: "Waiter Details",
  },
  {
    path: "/settings/kitchen-user-details/:id",
    component: KitchenUserDetails,
    title: "Kitchen User Details",
  },
  {
    path: "/settings/discount-rules",
    component: DiscountRules,
    title: "Discount Rules",
  },
  {
    path: "/settings/discount-rules/:id",
    component: DiscountRulesDetails,
    title: "Discount Rules",
  },
  {
    path: "/settings/additional-charges",
    component: AdditionalCharges,
    title: "Additional Charges",
  },
  {
    path: "/settings/additional-charges/:id",
    component: AdditionalChargesDetails,
    title: "Additional Charges",
  },
  {
    path: "/settings/custom-fields",
    component: CustomFields,
    title: "Custom Fields",
  },
  {
    path: "/settings/payment-types/:id",
    component: PaymentTypes,
    title: "PaymentTypes",
  },
  {
    path: "/settings/petty-cash-categories/:id",
    component: PettyCashCategories,
    title: "PettyCashCategories",
  },
  {
    path: "/settings/additional-details/:id",
    component: AdditionalDetails,
    title: "AdditionalDetails",
  },
  {
    path: "/settings/tags/:id",
    component: Tags,
    title: "Tags",
  },
  {
    path: "/settings/preferences",
    component: Preferences,
    title: "Preferences",
  },
  {
    path: "/settings/printer",
    component: Printers,
    title: "Printer",
  },
  {
    path: "/forms",
    component: Forms,
    title: "Forms",
  },
  {
    path: "/subscription",
    component: Subscription,
    title: "Your Subscription",
  },
  {
    path: "/cards",
    component: Cards,
    title: "Cards",
  },
  {
    path: "/charts",
    component: Charts,
    title: "Charts",
  },
  {
    path: "/buttons",
    component: Buttons,
    title: "Buttons",
  },
  {
    path: "/modals",
    component: Modals,
    title: "Modals",
  },
  {
    path: "/tables",
    component: Tables,
    title: "Tables",
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
