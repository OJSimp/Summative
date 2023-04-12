import "./About.scss";

import HeaderNav from "../components/navigation/HeaderNav";
import FooterNav from "../components/navigation/FooterNav";

import Media from "react-media"; // add Media

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-container">
          <h2>About Us</h2>
          <h3>Who we are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            architecto dolores id sapiente exercitationem unde esse asperiores,
            minus itaque reiciendis repellendus eligendi. Alias similique
            eligendi temporibus eveniet cum delectus nam nesciunt aut autem
            provident ducimus commodi, ea labore quisquam aperiam rem? Quos
            veniam voluptates explicabo, numquam blanditiis nisi quam
            temporibus?
          </p>
          <h3>What we do</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            architecto dolores id sapiente exercitationem unde esse asperiores,
            minus itaque reiciendis repellendus eligendi.{" "}
          </p>

          <h3>Contact Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          {/* can we make FAQ's accordian? */}
        </div>
        <div className="about-container">
          <h2>FAQ's</h2>
          <h3>Te tiriti o Waitangi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            architecto dolores id sapiente exercitationem unde esse asperiores,
            minus itaque reiciendis repellendus eligendi. Alias similique
            eligendi temporibus eveniet cum delectus nam nesciunt aut autem
            provident ducimus commodi, ea labore quisquam aperiam rem? Quos
            veniam voluptates explicabo, numquam blanditiis nisi quam
            temporibus?
          </p>
          <h3>Terms & Conditions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            architecto dolores id sapiente exercitationem unde esse asperiores,
            minus itaque reiciendis repellendus eligendi. Alias similique
            eligendi temporibus eveniet cum delectus nam nesciunt aut autem
            provident ducimus commodi, ea labore quisquam aperiam rem? Quos
            veniam voluptates explicabo, numquam blanditiis nisi quam
            temporibus?
          </p>
          <h3>Copyright</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            architecto dolores id sapiente exercitationem unde esse asperiores,
            minus itaque reiciendis repellendus eligendi. Alias similique
            eligendi temporibus eveniet cum delectus nam nesciunt aut autem
            provident ducimus commodi, ea labore quisquam aperiam rem? Quos
            veniam voluptates explicabo, numquam blanditiis nisi quam
            temporibus?
          </p>
        </div>
      </div>
      {/* About page content ENDS */}

      <FooterNav />
    </div>
  );
};

export default About;
