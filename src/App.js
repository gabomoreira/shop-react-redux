import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/products/:productId" element={<Product />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
