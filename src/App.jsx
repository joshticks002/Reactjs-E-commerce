import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from "./utils/firebase/firebase.utils";
import Home from "./routes/home/home.component";
// import NavBar from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Navibar from "./routes/nav/Navbar";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import ContactUs from "./routes/contact-us/contact-us.component";
import LandingPage from "./routes/landing-page/landing-page.component";
import Swal from "sweetalert2";

const App = () => {
  useEffect(() => {
    Swal.fire({
      position: "center",
      title: "Welcome",
      text: "This is your favorite Trendlin!",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
      confirmButtonColor: "#f0aa1f",
      footer: "<a href>Shop our variety of products</a>",
    });
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocFromAuth(user);
      // setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navibar />}>
        <Route index element={<LandingPage />} />
        <Route path="/category" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/category/shop/*" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default App;
