import "./Home.scss";

import HeaderNav from "../components/navigation/HeaderNav";
import FooterNav from "../components/navigation/FooterNav";

import { BiChevronRight, BiChevronDown } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <div className="home__container-one">
        <div className="home-image--one">
          <div className="home-image__tint">
            <h2 className="btn-cta">New Paintings</h2>
            <button className="btn-outline--white">Discover More</button>
          </div>
        </div>
        <div className="home-image--two">
          <div className="home-image__tint">
            <h2 className="btn-cta">Our Showroom</h2>
            <button className="btn-outline--white">Learn More</button>
          </div>
        </div>
      </div>
      <div className="home__container-two">
        <div className="home-image--three">
          <div className="home-image__tint--bottom">
            <h2 className="btn-cta">The Art of Living Collection</h2>
            <button className="btn-outline--white">Discover More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
