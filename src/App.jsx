import "./App.css";
import React from "react";
import Home from "./componenets/Pages/Home";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./componenets/Home/Root";
import ErrorPage from "./componenets/Pages/ErrorPage";
import Trading from "./componenets/Pages/Trading";
import Products from "./componenets/Pages/Products";
import AboutUs from "./componenets/Pages/AboutUs";
import FAQ from "./componenets/Pages/FAQ";
import Compliance from "./componenets/Pages/Compliance";
import BonusPolicy from "./componenets/Pages/Policies/BonusPolicy";
import TermsAndCondition from "./componenets/Pages/Policies/TermsAndConditions";
import KycPolicy from "./componenets/Pages/Policies/KycPolicy";
import PrivacyPolicy from "./componenets/Pages/Policies/PrivacyPolicy";
import AntiMoneyLaundering from "./componenets/Pages/Policies/AntiMoneyLaundering";
import WithdrawalOfFunds from "./componenets/Pages/Policies/WithdrawalOfFunds";
import Login from "./componenets/Pages/Login";
import ForgotPassword from "./componenets/Pages/ForgotPassword";
import Registration from "./componenets/Pages/Registration";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Root />}>
          <Route path="/errorPage" errorElement={<ErrorPage />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="/trading" element={<Trading />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/compliance" element={<Compliance />}>
            <Route index element={<TermsAndCondition />}></Route>
            <Route
              path="/compliance/termsandconditions"
              element={<TermsAndCondition />}></Route>
            <Route path="/compliance/bonus" element={<BonusPolicy />}></Route>
            <Route path="/compliance/kycpolicy" element={<KycPolicy />}></Route>
            <Route
              path="/compliance/privacypolicy"
              element={<PrivacyPolicy />}></Route>
            <Route
              path="/compliance/amlpolicy"
              element={<AntiMoneyLaundering />}></Route>
            <Route
              path="/compliance/withdrawaloffunds"
              element={<WithdrawalOfFunds />}></Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
