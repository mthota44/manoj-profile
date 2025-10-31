
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development if the API key is not set.
  // In a production environment, this should be handled more gracefully.
  console.warn("API_KEY is not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const model = 'gemini-2.5-flash';

export const generateAIMessage = async (history: ChatMessage[], jobRole: string): Promise<string> => {
  try {
    const formattedHistory = history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const systemInstruction = `You are an expert technical interviewer hiring for a "${jobRole}" position. Your goal is to conduct a realistic interview. 
    1. Ask one question at a time.
    2. After the user answers, provide brief, constructive feedback on their answer.
    3. Then, smoothly transition to the next logical question.
    4. Keep your responses concise and professional.
    5. If this is the first message from you, start by asking the first question.`;
    
    const chat = ai.chats.create({
      model,
      history: formattedHistory,
      config: {
        systemInstruction,
      }
    });

    const lastMessage = history[history.length - 1];
    const result = await chat.sendMessage({ message: lastMessage.text });
    
    return result.text;
  } catch (error) {
    console.error("Error generating AI message:", error);
    return "Sorry, I encountered an error. Please try again.";
  }
};

export const startAIInterview = async (jobRole: string): Promise<string> => {
    try {
        const systemInstruction = `You are an expert technical interviewer hiring for a "${jobRole}" position. Your goal is to conduct a realistic interview. Start the interview by greeting the candidate and asking your first technical or behavioral question. Ask only one question.`;
        
        const response = await ai.models.generateContent({
            model: model,
            contents: "Let's begin the interview.",
            config: {
                systemInstruction
            }
        });

        return response.text;

    } catch (error) {
        console.error("Error starting AI interview:", error);
        return "Sorry, I couldn't start the interview. Please check your setup and try again.";
    }
};
