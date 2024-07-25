import React from "react";
import { ADMINPATHS } from '../config/webPathAdmin';
import { Navigate } from "react-router-dom";
const Listing = React.lazy(() => import('../containers/Admin/ListingManagement'));
const Dashboard = React.lazy(() => import('../containers/Admin/Dashboard'));
const Settings = React.lazy(() => import('../containers/Admin/Dashboard/setting'));
const UserManagement = React.lazy(() => import('../containers/Admin/UserManagement'));
const UserDetail = React.lazy(() => import('../containers/Admin/UserManagement/user-detail'));
const ListingRequest = React.lazy(() => import('../containers/Admin/ListingManagement/listing-request'));
const ListingDetail = React.lazy(() => import('../containers/Admin/ListingManagement/listing-detail'));
const ListingRequestDetail = React.lazy(() => import('../containers/Admin/ListingManagement/listing-request-detail'));
const Booking = React.lazy(() => import('../containers/Admin/Bookings'));
const BookingDetail = React.lazy(() => import('../containers/Admin/Bookings/booking-detail'));
const BusinessAdmin = React.lazy(() => import('../containers/Admin/BusinessAdmins'));
const BackgroundCheck = React.lazy(() => import('../containers/Admin/BackgroundCheck'));
const BackgroundCheckDetail = React.lazy(() => import('../containers/Admin/BackgroundCheck/background-check-detail'));
const EvictionRequest = React.lazy(() => import('../containers/Admin/EvictionRequests'));
const EvictionRequestDetail = React.lazy(() => import('../containers/Admin/EvictionRequests/eviction-request-detail'));
const Notification = React.lazy(() => import('../containers/Admin/Notifications')); 
const Messages = React.lazy(() => import('../containers/Admin/Messages'));  
const MessageDetail = React.lazy(() => import('../containers/Admin/Messages/message-detail'));  
const ManageDocument = React.lazy(() => import('../containers/Admin/ManageDocument'));  

const adminRoutes = [
  { path: ADMINPATHS.DEFAULT, exact:true, element: <Navigate replace to="/app/admin/listing" /> },
  { path: ADMINPATHS.LISTING, exact:true, element: <Listing/> },
  { path: ADMINPATHS.DASHBOARD, exact:true, element: <Dashboard/> }, 
  { path: ADMINPATHS.SETTINGS, exact:true, element: <Settings/> },
  { path: ADMINPATHS.USERMANAGEMENT, exact:true, element: <UserManagement/> },
  { path: ADMINPATHS.USERDETAIL, exact:true, element: <UserDetail/> }, 
  { path: ADMINPATHS.LISTINGREQUESTS, exact:true, element: <ListingRequest /> },
  { path: ADMINPATHS.LISTINGREQUESTSDETAIL, exact:true, element: <ListingRequestDetail /> },
  { path: ADMINPATHS.LISTINGDETAIL, exact:true, element: <ListingDetail /> },
  { path: ADMINPATHS.BOOKINGS, exact:true, element: <Booking /> },
  { path: ADMINPATHS.BOOKINGSDETAIL, exact:true, element: <BookingDetail /> },
  { path: ADMINPATHS.BUSINESSADMINS, exact:true, element: <BusinessAdmin /> }, 
  { path: ADMINPATHS.BACKGROUNDCHECK, exact:true, element: <BackgroundCheck /> }, 
  { path: ADMINPATHS.BACKGROUNDCHECKDETAIL, exact:true, element: <BackgroundCheckDetail /> }, 
  { path: ADMINPATHS.EVICTIONREQUESTS, exact:true, element: <EvictionRequest /> }, 
  { path: ADMINPATHS.EVICTIONREQUESTSDERAIL, exact:true, element: <EvictionRequestDetail /> },
  { path: ADMINPATHS.NOTIFICATION, exact:true, element: <Notification /> },
  { path: ADMINPATHS.MESSAGES, exact:true, element: <Messages /> },
  { path: ADMINPATHS.MESSAGESDETAIL, exact:true, element: <MessageDetail /> },
  { path: ADMINPATHS.MANAGEDOCUMENT, exact:true, element: <ManageDocument /> },
  { path: ADMINPATHS.CALLBACK, exact:true, element: <Navigate replace to="/home" /> },
  ];

export default adminRoutes;


