import Header from "../Navbar/header";
import Footer from "../footer/footer";


const Layout = ({ children }) => (
    <>
        <Header/>
        { children }
        <Footer/>
    </>
);

export default Layout;