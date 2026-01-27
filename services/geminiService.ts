
import { GoogleGenAI, Type } from "@google/genai";

export const getReflectiveAdvice = async (role: string, mode: string, userText: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `As an Educational Developer and PSF 2023 Coach, critique the following reflective draft for an Advance HE Fellowship claim. 

    USER ROLE/DISCIPLINE: ${role}
    USER REFLECTION DRAFT: ${userText}
    
    INSTRUCTIONS:
    1. Act as a coach. Critically analyse the depth of reflection using models like Gibbs, Brookfield, or Schön.
    2. Identify specific PSF 2023 Dimension codes (A1-5, K1-5, V1-5) that are currently evidenced.
    3. CRITICAL: DO NOT rewrite the user's sentences or provide a "corrected" version. Focus solely on critique and coaching.
    4. Provide specific suggestions on how to deepen the reflection to meet PSF standards.
    5. Use British English spelling (e.g. analyse, realisation, programme).

    PSF 2023 Context:
    Areas: A1 (Plan), A2 (Teach), A3 (Assess), A4 (Support), A5 (CPD).
    Knowledge: K1 (Learners), K2 (Approaches), K3 (Critical evaluation), K4 (Tech), K5 (QA).
    Values: V1 (Respect), V2 (Equity), V3 (Scholarship), V4 (Context), V5 (Collaboration).

    Provide a structured response in JSON format:
    {
      "analysis": "A critical critique of the reflection depth and alignment with the user's role.",
      "tips": ["A list of specific PSF dimension codes present or missing with short justifications"],
      "questions": ["3-4 deep coaching questions based on reflective models to help the user think further."]
    }`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          analysis: { type: Type.STRING },
          tips: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          questions: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["analysis", "tips", "questions"]
      }
    }
  });

  return JSON.parse(response.text);
};
