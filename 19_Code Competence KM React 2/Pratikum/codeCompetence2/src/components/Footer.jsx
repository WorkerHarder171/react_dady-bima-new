import "./../style/style.css";

const Footer = () => {
  return (
    <>
      <footer className="mt-5">
        <div className="wrapper">
          <div className="grid">
            <p className="title-text">Flash.ID</p>
            <p className="lead">
              We are creative developers, Made by open source is sign under
              meaning full tools, create by us for people like us.
            </p>
            {/* search-bar */}
            <div className="search-bar">
              <input type="search" name="search" id="search" />
              <input
                className="btn "
                id="btn"
                type="submit"
                defaultValue="Subscribe"
              />
            </div>
            {/* end search-bar */}
            <p className="lead">
              See our <a href="#"> privacy policy </a>
            </p>
            <div className="social-group">
              <a href="facebook.com/dady.bima.5">
                <i className="fa-brands fa-facebook" />
              </a>
              <a href="twitter.com">
                <i className="fa-brands fa-twitter" />
              </a>
              <a href="instagram.com/dybim__">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="tiktok.com">
                <i className="fa-brands fa-tiktok" />
              </a>
            </div>
          </div>
          <div className="grid contact">
            <p className="sub-title-text">INFO KONTAK</p>
            <ul className="contact mt-4">
              <li className="nav-item">
                <a className="nav-link d-flex" href="#">
                  <div className="icon">
                    <i className="fa-solid fa-location-pin" />
                  </div>
                  <span>Jl. Pegangsaan Timur nomor 56 Jakarta</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="#">
                  <div className="icon">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <span>+62 854-6541-9821</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-flex" href="#">
                  <div className="icon">
                    <i className="fa-solid fa-message" />
                  </div>
                  <span>faster@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="grid">
            <b>Come and Say Hello</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              quae repellendus. Libero odit modi ipsa?
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
