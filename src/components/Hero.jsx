import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.GEMINI_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    try {
      const prompt = inputValue;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    } catch (error) {
      console.log("fetch data error", error);
    }
  };

  return (
    <div>
      <input
        placeholder="Type Here"
        name="message"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={fetchData}>Get data</button>
    </div>
  );
};

export default Home;
