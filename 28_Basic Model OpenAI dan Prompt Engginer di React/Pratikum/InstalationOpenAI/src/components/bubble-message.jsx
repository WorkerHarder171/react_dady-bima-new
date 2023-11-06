import { useEffect, useRef, useState } from "react";
import { sendMsgToOpenAI } from "./../api/OpenAiAPI";
import ChatBotLogo from "./../assets/chatgptLogo.svg";
import User from "./../assets/user.png";
import Send from "./../assets/send.svg";
const ChatBot = () => {
  const msgEnd = useRef(null);

  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, Saya adalah Hoshino.",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput("");
    setMessages([...messages, { text, isBot: false }]);
    setLoading(true);
    const response = await sendMsgToOpenAI(text);
    console.log(response);
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: response, isBot: true },
    ]);
    setLoading(false);
  };

  const handleKeyPress = async (e) => {
    if (e.key == "Enter") await handleSend();
  };

  return (
    <>
      <main className="flex flex-col w-full justify-end items-end h-screen mx-auto relative z-0 ">
        <div className="main relative w-full overflow-y-auto ">
          <div className="chats">
            {messages.map((message, i) => (
              <div
                key={i}
                className={
                  message.isBot
                    ? "chat-bot  px-10 py-5 flex items-center gap-5 bg-gray-200"
                    : "chat  px-10 py-5  flex items-center gap-5 "
                }
              >
                <img
                  width={40}
                  height={40}
                  src={message.isBot ? ChatBotLogo : User}
                  alt=""
                />
                <p>{message.text}</p>
              </div>
            ))}
            {loading ? (
              <div className="mx-auto text-md px-3 text-center font-regular italic">
                Loading...
              </div>
            ) : null}
            <div ref={msgEnd} />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 p-10 mx-auto">
          <div className="relative flex gap-5 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
            <input
              type="text"
              value={input}
              onKeyDown={handleKeyPress}
              onChange={(e) => setInput(e.target.value)}
              className="w-full focus:border-none outline-none overflow-y-auto"
              placeholder="Berikan Saya Pertanyaan..."
            />
            <button
              type="button"
              onClick={handleSend}
              className="text-white"
            >
            <img src={Send}/>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChatBot;
