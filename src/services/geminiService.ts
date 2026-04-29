/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.0-flash',
    config: {
      systemInstruction: `You are 'ROHAAB', the AI Concierge for ROHAAB COLLECTIONS. 
Your tone is royal, sophisticated, and deeply rooted in Pakistani heritage. 
You specialize in premium embroidered pret and unstitched luxury wear.
Provide styling advice for formal events, explain the 'Royal Minimalism' philosophy, and help users understand the intricate tilla and resham work in each piece.
Keep responses concise, elegant, and refined. Use high-end fashion language.`,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "Our exclusive collection is currently hidden. Please provide your invitation key (API Key).";
  }

  try {
    const chat = initializeChat();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Pardon us, the connection was interrupted.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our concierge is currently attending to another client. Please wait a moment.";
  }
};