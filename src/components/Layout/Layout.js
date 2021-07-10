import Header from "../Header/Header";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";
import Aside from "../Header/Aside/Aside";
import "./Layout.scss";


const Layout = () => {
    return ( 
        <div className="Layout">
            <Header />
            <Section />
            <Footer />
            <Aside />
        </div>
     );
}
 
export default Layout;