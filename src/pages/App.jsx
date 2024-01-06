// import dependencies
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import my functionality that I've added
import { getUser } from "../utilities/users-services.js";

// css
import "./App.css";

// import pages
import AuthPage from "./AuthPage.jsx";
import NewOrderPage from "./NewOrderPage.jsx";
import OrderHistoryPage from "./OrderHistoryPage.jsx";

// import components
import NavBar from "../components/NavBar.jsx";

function App() {
  const [user, setUser] = useState(getUser());

  // in here
  // use the useState hook to define a state variable called user
  // initialize that to null
  // the setter function should be named according to convention
  return (
    <>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </>
  );
}

export default App;