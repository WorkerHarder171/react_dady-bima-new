import Sidebar from "../components/side-bar";
import BubbleMessage from "../components/bubble-message";
const ChatBot = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full mx-auto">

        <BubbleMessage />
      </div>
    </div>
  );
};

export default ChatBot;
