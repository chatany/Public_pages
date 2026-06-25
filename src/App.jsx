import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./menu";
import ScrollToTop from "./Components/custom";

// Lazy loaded components
const Home = lazy(() => import("./Components/home").then(module => ({ default: module.Home })));
const AmlPolicy = lazy(() => import("./Components/AMLPolicy").then(module => ({ default: module.AmlPolicy })));
const RiskPolicy = lazy(() => import("./Components/Risk").then(module => ({ default: module.RiskPolicy })));
const TradePolicy = lazy(() => import("./Components/TradePolicy").then(module => ({ default: module.TradePolicy })));
const CookiePolicy = lazy(() => import("./Components/cookiePolicy").then(module => ({ default: module.CookiePolicy })));
const PrivacyPolicy = lazy(() => import("./privacyPolicy").then(module => ({ default: module.PrivacyPolicy })));
const UserAgreement = lazy(() => import("./Components/userPolicy").then(module => ({ default: module.UserAgreement })));
const Terms = lazy(() => import("./Components/userAgreement").then(module => ({ default: module.Terms })));
const ReferralPage = lazy(() => import("./ReferalPage").then(module => ({ default: module.ReferralPage })));
const CarrierPage = lazy(() => import("./CarrierPage").then(module => ({ default: module.CarrierPage })));
const AutoInvest = lazy(() => import("./AotoInvest").then(module => ({ default: module.AutoInvest })));
const Vip = lazy(() => import("./Vip").then(module => ({ default: module.Vip })));
const SubmitRequestForm = lazy(() => import("./Components/submit/request"));
const VipLevel = lazy(() => import("./Components/fee").then(module => ({ default: module.VipLevel })));
const OfficialVerification = lazy(() => import("./officalVerification").then(module => ({ default: module.Verification })));

// Loading fallback component
const PageLoader = ({ className }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={`preloader preloader2 ${className || ""}`}>
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          <img src="/Bitzup.png" alt="Loading..." />
        </div>
      </div>
    </div>
  );
};



export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Menu children={<AmlPolicy />} />} path="/aml-policy" />
          <Route element={<ReferralPage />} path="/referral" />
          <Route element={<CarrierPage />} path="/careers" />
          <Route element={<Vip/>} path="/vip"/>
          <Route element={<AutoInvest />} path="/invest" />
          <Route element={<OfficialVerification />} path="/verification" />
          <Route element={<SubmitRequestForm/>} path="/submit-request"/>
          <Route element={<VipLevel />} path="/fee-schedule" />
          <Route element={<VipLevel />} path="/fees" />
          <Route element={<OfficialVerification />} path="/official-verification" />
          <Route
            element={<Menu children={<RiskPolicy />} />}
            path="/risk-disclosure"
          />
          <Route
            element={<Menu children={<TradePolicy />} />}
            path="/trading-policy"
          />
          <Route
            element={<Menu children={<CookiePolicy />} />}
            path="/cookies-policy"
          />
          <Route
            element={<Menu children={<PrivacyPolicy />} />}
            path="/privacy-policy"
          />
          <Route
            element={<Menu children={<UserAgreement />} />}
            path="/user-agreement"
          />
          <Route element={<Menu children={<Terms />} />} path="/terms-of-use" />
        </Routes>
      </Suspense>
    </Router>
  );
}
