import { useState } from 'react';
import logo from "../img/logoS01.jpg";
import { Reorder, Home } from "@mui/icons-material"
const Header = (props) => {

  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
    <div className="navbar mb-5">
      <div className="navLeftSide">
        <div className="navLinks" id={showLinks ? "hidden" : ""}>
          <a href="/"><Home/></a>
          <a href="/impressum">Impressum</a>
        </div>
          <button onClick={() => setShowLinks(!showLinks)}>
            {" "}
            <Reorder />
          </button>
      </div>
      <div className="navRightSide">
         <a href="https://zahnzentrumdrhijazi.de/" 
          target="_blank" 
          rel="noreferrer" >
            <img id="logo" 
                src={logo} 
                alt="DrHijaziLogo" 
            />
        </a>
      </div>
    </div>
    </>
  );
}

export default Header;