import { Outlet } from "react-router"
import { Navbar } from "../pages/navbar/navbar"

export const Layout = () => {
    return(
        <div className="  md:px-48 ">
            <Navbar/>
            <Outlet/>
        </div>
    )
}