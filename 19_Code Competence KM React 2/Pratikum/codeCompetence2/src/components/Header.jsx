import "./../style/header.css";
// import "./../style/style.css";
const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-transparent w-100 position-absolute">
          <div className="container-fluid px-5 py-3">
            <a className="navbar-brand text-light fw-bold" href="#">
              Flash.ID
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-light fw-bold"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light fw-bold" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-light fw-bold"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="jumbotron ">
          <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="wrappers text-center">
              <p className="title-text fw-bold text-light">
                FLASH.ID Express Track &amp; Trace Parcel
              </p>
              <p className="fs-4 text-light">
                FLASH&gt;ID is committed to being a trusted partner throughout
                Indonesia.
              </p>
              <button
                className="btn btn-primary fw-bold px-4 py-2"
                type="button"
              >
                Check Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
