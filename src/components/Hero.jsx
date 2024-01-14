import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Importing the Gemini API key from environment variables
const API_KEY = "AIzaSyDy9WffZGa14i1or4b8JMUgGpE-hyE3LLw";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// Using React state to manage selected files

// Main function to interact with the Generative AI
async function fetchData() {
  try {
    const prompt = "how are you";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.log("fetch data error", error);
  }
}

// React functional component for the Home page
const Home = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetchData();
        }}
      >
        Get data
      </button>
    </div>
  );
};

// Exporting the Home component
export default Home;
