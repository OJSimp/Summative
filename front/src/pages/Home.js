import "./Home.scss";

import HeaderNav from "../components/navigation/HeaderNav";
import FooterNav from "../components/navigation/FooterNav"


import AppRoutes from "../Routes"
import Media from 'react-media'; // add Media


const Home = () => {

 return(
  <div className="home-wrapper">
    < HeaderNav />
    <p>Home</p>


{/* --MEDIA QUERY START-- */}
< Media query="(max-width: 599px)" >
          {matches => matches ? 
          ( <div className="mobile">
            </div>) 
          : 
          ( <div className="desktop">
            </div>)}
 </Media> 
{/* --MEDIA QUERY END-- */}

      < AppRoutes />
      < FooterNav />
 
 </div>
  )
}


export default Home