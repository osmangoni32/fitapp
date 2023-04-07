import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../styles/App.css";
import { AuthProvider } from "./Context/AuthContext";
import Layout from "./Layout";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Singup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<PublicOutlet />}>
              <Route path="/signup" element={<Singup />} />
            </Route>
            <Route path="/login" element={<PublicOutlet />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/quiz" element={<PrivateOutlet />}>
              <Route path="/quiz" element={<Quiz />} />
            </Route>
            <Route path="/result" element={<PrivateOutlet />}>
              <Route path="/result" element={<Result />} />
            </Route>

            {/*  <Route path="/quiz" element={<Quiz />} /> */}
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
