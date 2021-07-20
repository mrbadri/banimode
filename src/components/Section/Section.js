import Summery from "../../pages/Summery/Summery";
import "./Section.scss" ;
import Support from "./Support/Support";



const Section = () => {
    return ( 
        <div className="Section">
            <Summery /> 
            <Support />
        </div>
     );
}
 
export default Section;