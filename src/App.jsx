import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Logout from "./components/Logout";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import ShippingPolicy from "./components/ShippingPolicy";
import ContactUs from "./components/ContactUs";

function App() {

  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/connections" element={<Connections />}></Route>
            <Route path="/requests" element={<Requests />}></Route>
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/shipping" element={<ShippingPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
