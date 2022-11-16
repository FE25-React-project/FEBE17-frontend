import Section1 from "../sectionhome/Section1";
import Section2 from "../sectionhome/Section2";
import Section3 from "../sectionhome/Section3";
import Section4 from "../sectionhome/Section4";

const Homepage = () => {
    return ( 
        <div className="container-fluid">
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>
     );
}
 
export default Homepage;