import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "",
});

const generateResponse = async (
  userMessage: string,
  systemPrompt: string = "You are a helpful assistant.",
): Promise<string> => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      max_tokens: 1000,
      temperature: 1.2,
    });

    return response.choices[0]?.message?.content || "No response generated";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to generate response");
  }
};

export { generateResponse, client };
