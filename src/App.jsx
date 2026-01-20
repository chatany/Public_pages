import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./Components/home";
import { AmlPolicy } from "./Components/AMLPolicy";
import { Menu } from "./menu";
import { RiskPolicy } from "./Components/Risk";
import { TradePolicy } from "./Components/TradePolicy";
import { CookiePolicy } from "./Components/cookiePolicy";
import { PrivacyPolicy } from "./privacyPolicy";
import ScrollToTop from "./Components/custom";
export default function App() {
  return (
   
    <Router>
        <ScrollToTop/>
      <Routes>
        <Route  element={<Home/>} path="/" />
        <Route  element={<Menu children={<AmlPolicy/>}/>} path="/aml-policy" />
        <Route  element={<Menu children={<RiskPolicy/>}/>} path="/risk-disclosure" />
        <Route element={<Menu children={<TradePolicy/>}/>} path="/trading-policy" />
        <Route element={<Menu children={<CookiePolicy/>}/>} path="/cookies-policy" />
        <Route element={<Menu children={<PrivacyPolicy/>}/>} path="/privacy-policy" />
      </Routes>
    </Router>
  );
}
