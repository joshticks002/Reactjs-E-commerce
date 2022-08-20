import { useEffect } from "react";
import Home from "./routes/home/home.component";
// import NavBar from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication";
import Navibar from "./routes/nav/Navbar";
import { Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";

const App = () => {
  useEffect(() => {
    Swal.fire({
      position: 'center',
      title: "Welcome",
      text: "This is your favorite Trendlin!",
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      confirmButtonColor: "#f0aa1f",
      footer: "<a href>Shop our variety of products</a>"
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navibar />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
