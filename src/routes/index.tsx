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
import Staffhome from "../pages/Staffhome";
import Staffdetail from "../pages/Staffdetail";        // เพิ่มตรงนี้
import CreateStaff from "../pages/create-staff";        // เพิ่มตรงนี้
import StaffeditFrom from "../pages/StaffeditFrom";

export const routes: RouteObject[] = [

  { path: "/", element: <Loginpageadmin /> },
  { path: "/home", element: <HomepageAdmin /> },
  { path: "/approve-activity", element: <Apporove /> },
  { path: "/edit-page", element: <Editpage /> },
  { path: "/edit-activity/:id", element: <EditForm /> },
  { path: "/cancel-activity/:id", element: <Cancel /> },
  { path: "/close-admin/:id", element: <Close /> },
  { path: "/activity-details/:id", element: <Detailsadmin /> },
  { path: "/cancel-form", element: <CancelForm /> },
  { path: "/approve-form", element: <ApprovalForm /> },
  { path: "/close-form", element: <CloseActivityForm /> },
  { path: "/create-activity", element: <CreateActivityForm /> },
  { path: "/approve-activity/approve-form", element: <ApprovalForm /> },
  { path: "/staff-home", element: <Staffhome /> },
  { path: "/staff-detail", element: <Staffdetail /> },         // เพิ่ม path สำหรับรายละเอียด staff
  { path: "/create-staff", element: <CreateStaff /> },         // เพิ่ม path สำหรับสร้าง staff
  { path: "/staff-edit-form", element: <StaffeditFrom /> },
];
