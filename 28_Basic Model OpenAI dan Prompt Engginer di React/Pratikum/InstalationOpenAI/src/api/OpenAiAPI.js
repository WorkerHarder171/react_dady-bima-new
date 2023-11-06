import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(message) {
    const messages = [
        {
          role: "system",
          content: "Buatkan pertanyaan wawancara satu demi satu dengan tujuan masuk perusahaan dan buatlah keputusan setelah 3 kali pertanyaan apakah Calon lolos atau tidak secara terpisah tanpa menggabutkan pertanyaan sebelumnya"
        },
        {
          role: "user",
          content: message
        }
      ];
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:messages,
        temperature: 0.5,
        max_tokens: 1000,
      });
      return response?.choices[0]?.message?.content;
}
