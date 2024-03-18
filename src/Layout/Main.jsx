import { Outlet } from "react-router-dom";
import CallUs from "../pages/Home/CallUs";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/navbar/Navbar";
import Banner from "../pages/Home/Banner/Banner";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <CallUs></CallUs>
            <Footer></Footer>
        </div>
    );
};

export default Main;