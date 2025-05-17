import { type RouteObject, Navigate } from "react-router-dom";
import HomepageAdmin from "../pages/HomepageAdmin";
import Loginpageadmin from "../pages/Loginpage.admin";
import Editpage from "../pages/Editpage.admin";
import Apporove from "../pages/Approve.admin";
import Cancel from "../pages/Cancel.admin";
import Detailsadmin from "../pages/Details.admin";
import CancelForm from "../pages/CancelForm";
import ApprovalForm from "../pages/ApproveForm";
import CloseActivityForm from "../pages/CloseActivityForm";
import CreateActivityForm from "../pages/CreateActivityForm";

export const routes: RouteObject[] = [
  { path: "/", element: <HomepageAdmin /> },
  { path: "/admin-login", element: <Loginpageadmin /> },
  { path: "/edit-activity", element: <Editpage /> },
  { path: "/approve-activity", element: <Apporove /> },
  { path: "/cancel-activity", element: <Cancel /> },
  { path: "/activity-details", element: <Detailsadmin /> },
  { path: "/cancel-form", element: <CancelForm /> },
  { path: "/approve-form", element: <ApprovalForm /> },
  { path: "/close-form", element: <CloseActivityForm /> },
  { path: "/create-activity", element: <CreateActivityForm /> },
  { path: "/home", element: <Navigate to="/" replace /> },
];
