import {Navbar} from "../NavBar";
import {Footer} from "../Footer";
import {Outlet} from "react-router-dom";
import {useTheme} from "../../hooks/useTheme";

export const MainLayout = () => {

    const {theme} = useTheme()

    return (
        <div className={`main-layout ${theme}`}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
