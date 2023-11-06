import Navbar from "../components/Navbar";
import Jumbotron from "./../components/jumbotron";
import Footer from "./../components/footer";
import { About, Gallery, Program } from "./../components/main-content-landing-page";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Program />
      <Gallery/>
      <Footer />
    </>
  );
};

export default LandingPage;
