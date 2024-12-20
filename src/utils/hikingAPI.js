import { GoogleGenerativeAI } from "@google/generative-ai";
import { trailCache } from "../App";

const genAI = new GoogleGenerativeAI("AIzaSyDp-s_QCrViCaucgvWzsk9BZYmW9PwF6A8");
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  maxOutputTokens: 8192,
};

const processHikingTrails = (jsonText) => {
  try {
    // clean up the text
    const cleanedText = jsonText
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    const trailsData = JSON.parse(cleanedText);
    return {
      success: true,
      data: trailsData
    };
  } catch (error) {
    console.error('Parsing error:', error);
    return {
      success: false,
      message: `Error parsing JSON: ${error.message}`,
      data: []
    };
  }
};

export const getHikingTrails = async (location) => {
  try {
    // prompt for Gemini
    const prompt = `
      Give me 4 different potential hiking trails near ${location}.
      Include the address of each of the trails parking lot, and include a description for each of the 4 hikes be sure to comment on the approximate difficult.
      Respond in JSON format and it cannot be any of the following trails ${JSON.stringify(Array.from(trailCache.entries()))}, structured as follows:
      [
        {
          "name": "Trail Name",
          "address": "Trail Parking Lot Address Address",
          "description": "Description of the trail",
        }
      ]
    `;

    // load the model instance
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash-002",
      generationConfig 
    });

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();

    // Cache and process the trails
    trailCache.set(location, responseText);
    return processHikingTrails(responseText);
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      message: error.message,
      data: []
    };
  }
};