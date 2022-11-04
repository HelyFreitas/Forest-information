import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Login/SIgnin";
import { Signup } from "../pages/Login/Signup";

export const RoutEs = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}