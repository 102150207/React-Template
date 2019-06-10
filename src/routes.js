import React from "react";
import DefaultLayout from "./pages/admin/Admin";

const Dashboard = React.lazy(() => import("./pages/admin/Dashboard/Dashboard"));

const CategoryListPage = React.lazy(() =>
  import("./pages/admin/categoryManagement/category-list.page")
);

const routes = [
  {
    path: "/",
    exact: true,
    name: "Admin",
    component: DefaultLayout
  },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/categories", name: "Job Category", component: CategoryListPage }
];

export default routes;
