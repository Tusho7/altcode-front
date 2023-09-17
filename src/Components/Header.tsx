import CybercitiLogo from "../assets/cybercity-logo.png";
import Navigation from "./Navigation";


function Header() {
  
  return (
    <div className='flex justify-between items-center'>
        <div>
            <img src={CybercitiLogo} className="w-[200px] h-[40px] lg:w-[300px] lg:h-[60px]" />
        </div>

        <Navigation/>
    </div>
  )
}

export default Header