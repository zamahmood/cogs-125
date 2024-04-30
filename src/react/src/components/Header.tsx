import { FunctionComponent } from "react";
import "./Header.css";

const Header: FunctionComponent = () => {
  return (
    <button className="header">
      <div className="content">
        <div className="header-left">
          <div className="content1">
            <b className="product-designer">Product Designer</b>
            <div className="uc-san-diego">
              UC San Diego student studying Human Computer Interaction to find
              out how to make people’s lives simpler. I work with Figma, Python,
              Java, HTML, CSS, and Javascript.
            </div>
          </div>
        </div>
        <b className="zahrah-mahmood">Zahrah Mahmood,</b>
        <div className="about-me-parent">
          <b className="about-me">About Me</b>
          <b className="skills">Skills</b>
          <b className="projects">Projects</b>
          <b className="projects">Contact</b>
        </div>
        <div className="row">
          <div className="card">
            <img
              className="placeholder-image"
              alt=""
              src="/placeholder--image@2x.png"
            />
            <div className="content2">
              <div className="content3">
                <div className="title">
                  <b className="ahuse">Ahuse</b>
                  <div className="lorem-ipsum-dolor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                  </div>
                </div>
              </div>
              <div className="avatar">
                <div className="content4">
                  <div className="view">{`View `}</div>
                  <img className="vector-icon" alt="" src="/vector.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Header;
