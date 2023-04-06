import "./Home.scss";

import HeaderNav from "../components/navigation/HeaderNav";
import FooterNav from "../components/navigation/FooterNav";

import { BiChevronRight, BiChevronDown } from "react-icons/bi";

const Home = () => {
  return (
    <div className="home__container-one">
      <div className="home-image--one">
        <div className="home-image__tint">
          <button className="btn-cta">
            New Paintings <BiChevronRight />
          </button>
        </div>
      </div>
      <div className="home-image--two">
        <div className="home-image__tint">
          <button className="btn-cta">
            Our Showroom <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
