import Header from "../Header/Header";
import Section from "../Section/Section";
import Footer from "../Footer/Footer";
import Aside from "../Header/Aside/Aside";
import "./Layout.scss";
import Loading from "../subComponents/Loading/Loading";


const Layout = () => {
    return ( 
        <div className="Layout">
            <Header />
            <Section />
            <Footer />
            <Aside />
            <Loading />
        </div>
     );
}
 
export default Layout;