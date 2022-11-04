import { BrowserRouter as Router, Route, Routes as Rotas } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Login/SIgnin";
import { Signup } from "../pages/Login/Signup";

export const Routes = () => {
    return(
        <Router>
            <Rotas>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
            </Rotas>
        </Router>
    );
}