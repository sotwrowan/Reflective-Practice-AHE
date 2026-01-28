import { GoogleGenAI, Type } from "@google/genai";

/**
 * Gets reflective coaching advice from Gemini based on user role and experience.
 * Uses gemini-3-pro-preview for the complex task of critical pedagogical analysis.
 */
export const getReflectiveAdvice = async (role: string, mode: string, userText: string) => {
  // Always initialize GoogleGenAI with a named parameter inside the function to use the latest API_KEY.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `USER ROLE/DISCIPLINE: ${role}\nUSER REFLECTION DRAFT: ${userText}`,
    config: {
      // Use systemInstruction to provide strict framing for the model.
      systemInstruction: `As an Educational Developer and PSF 2023 Coach, critique the following reflective draft for an Advance HE Fellowship claim. 

    INSTRUCTIONS:
    1. Act as a coach. Critically analyse the depth of reflection using models like Gibbs, Brookfield, or Schön.
    2. Identify specific PSF 2023 Dimension codes (A1-5, K1-5, V1-5) that are currently evidenced.
    3. CRITICAL: DO NOT rewrite the user's sentences or provide a "corrected" version. Focus solely on critique and coaching.
    4. Provide specific suggestions on how to deepen the reflection to meet PSF standards.
    5. Use British English spelling (e.g. analyse, realisation, programme).

    PSF 2023 Context:
    Areas: A1 (Plan), A2 (Teach), A3 (Assess), A4 (Support), A5 (CPD).
    Knowledge: K1 (Learners), K2 (Approaches), K3 (Critical evaluation), K4 (Tech), K5 (QA).
    Values: V1 (Respect), V2 (Equity), V3 (Scholarship), V4 (Context), V5 (Collaboration).`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          analysis: { 
            type: Type.STRING,
            description: "A critical critique of the reflection depth and alignment with the PSF 2023 framework."
          },
          tips: { 
            type: Type.ARRAY,
            items: { 
              type: Type.STRING 
            },
            description: "A list of specific PSF dimension codes present or missing with short justifications."
          },
          questions: { 
            type: Type.ARRAY,
            items: { 
              type: Type.STRING 
            },
            description: "3-4 deep coaching questions based on reflective models to help the user think further."
          }
        },
        required: ["analysis", "tips", "questions"]
      }
    }
  });

  // Access the text property directly from the response object.
  return JSON.parse(response.text);
};