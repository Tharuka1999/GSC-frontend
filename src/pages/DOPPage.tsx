import Navbar from '../components/Navbar'
import SubNavbar from '../components/SubNavbar'
import Footer from '../components/Footer'
import DOPBlueBox from '../components/DoctorOfPhilosophy/DOPBlueBox'
import DOPDetails from '../components/DoctorOfPhilosophy/DOPDetails'


function DoctorOfPhilosophy() {
    return (
      <>
        <Navbar />
        <SubNavbar />
        <DOPBlueBox/>
        <DOPDetails/>
        <Footer /> 
      </>
    )
  }
  
  export default DoctorOfPhilosophy