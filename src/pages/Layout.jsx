import { Outlet } from "react-router-dom/dist";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


export const Layout = () => {
    return (
        <ScrollToTop>
            {/* Estructura que asegura que el footer esté al fondo */}
            <div className="d-flex flex-column min-vh-100">
                <Navbar />
                <main className="flex-grow-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ScrollToTop>
    );
};
