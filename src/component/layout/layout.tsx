import { Outlet } from "react-router"
import { Navbar } from "../pages/navbar/navbar"

export const Layout = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}