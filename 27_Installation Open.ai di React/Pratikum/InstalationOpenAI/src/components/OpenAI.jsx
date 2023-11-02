import { useState } from "react";
import { OpenAI } from "openai";

const ChatBot = () => {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnClick = async () => {
    setLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.5,
        max_tokens: 1000,
      });
      setResult(response?.choices[0]?.message?.content);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <>
      <main className="flex w-full justify-end items-end h-screen mx-auto relative">
        <form className="w-full flex flex-col gap-5 p-10 mx-auto">
          {loading ? (
            <div className="mx-auto text-2xl  font-semibold italic">
              Loading...
            </div>
          ) : (
            result && (
              <div className="p-5 rounded-se-xl rounded-ee-xl rounded-bl-xl border shadow">
                <p
                  className="text-xs font-regular text-justify leading-5"
                >
                  {result}
                </p>
              </div>
            )
          )}
          <div className="relative">
            <input
              type="text"
              value={prompt}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Berikan Saya Pertanyaan..."
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleOnClick}
              disabled={loading || prompt.length === 0}
            >
              Generate
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default ChatBot;
