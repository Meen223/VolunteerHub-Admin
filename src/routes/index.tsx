
import { type RouteObject, Navigate } from "react-router-dom";
import Loginpageadmin from "../pages/Loginpage.admin";
import HomepageAdmin from "../pages/HomepageAdmin";
import Apporove from "../pages/Approve.admin";
import Editpage from "../pages/Editpage.admin";
import Cancel from "../pages/Cancel.admin";
import Detailsadmin from "../pages/Details.admin";
import CancelForm from "../pages/CancelForm";
import ApprovalForm from "../pages/ApproveForm";
import CloseActivityForm from "../pages/CloseActivityForm";
import CreateActivityForm from "../pages/CreateActivityForm";
import Close from "../pages/Close.admin";
import EditForm from "../pages/EditForm";
import RegisterPage from "../pages/RegisterPage";

export const routes: RouteObject[] = [
  
  { path: "/", element: <Loginpageadmin /> },
  { path: "/home", element: <HomepageAdmin /> },
  { path: "/approve-activity", element: <Apporove /> },
  { path: "/edit-page", element: <Editpage /> },       
  { path: "/edit-activity/:id",  element: <EditForm /> },  
  { path: "/cancel-activity", element: <Cancel /> },
  { path: "/close-admin/:id", element: <Close /> },
  // { path: "/activity-details", element: <Detailsadmin /> },
  { path: "/activity-details/:id", element: <Detailsadmin /> },
   // (ถ้าไม่ใช้แล้ว) ลบหรือเปลี่ยนชื่อ /activity-details ออก
  { path: "/cancel-form", element: <CancelForm /> },
  { path: "/approve-form", element: <ApprovalForm /> },
  { path: "/close-form", element: <CloseActivityForm /> },
  { path: "/create-activity", element: <CreateActivityForm /> },
  { path: "/approve-activity/approve-form", element: <ApprovalForm /> },  //
  
];

