import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import VideoDetail from "./components/video/VideoDetail";
import Proposed from "./components/Proposed/Proposed";

import { DetailPro } from "./components/Proposed/Detail/detailPro";
import { Accept } from "./components/Proposed/Accept/Accept";
import { Refuse } from "./components/Proposed/Refuse/Refuse";
import { ChangePass } from "./components/account/changePassWord/changePass"
import { ReasonRefuse } from "./components/Proposed/Refuse/reasonrefuse";
import Notification from "./components/Notification/noti";
// import { MyAccount } from "./components/account/myaccount/MyAccount";
import PersonalInformation from "./components/account/myaccount/account";
import { AccountDm } from "./components/account/myaccount/AccountDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="videos/:videoID" element={<VideoDetail />} />
        <Route path="proposed" element={<Proposed />} />
        <Route path="refuse" element={<Refuse />} />
        <Route path="detailProduct" element={<DetailPro />} />
        <Route path="accept" element={<Accept />} />
        <Route path="changePass" element={<ChangePass />} />
        <Route path="resonRefuse" element={<ReasonRefuse />} />
        <Route path="noti" element={<Notification />} />
        {/* <Route path="myAccount" element={<MyAccount />} /> */}
        <Route path="Account" element={<PersonalInformation />} />
        <Route path="AccountDemo" element={<AccountDm />} />
      </Route>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  // </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();