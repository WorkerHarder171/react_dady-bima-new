// import Index from "./pages/Index";

import Navbar from "./components/Navbar";
import OpenAI from "./components/OpenAI";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full mx-auto">
          <Navbar />
          <OpenAI />
        </div>
      </div>
    </>
  );
}

export default App;
