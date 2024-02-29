import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [correction, setCorrection] = useState(null);

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    checkSpelling(text);
  };

  const checkSpelling = (text) => {
    const words = text.split(/\s+/);
    for (const word of words) {
      // console.log(word)
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary.hasOwnProperty(lowerCaseWord)) {
        const correctedSpelling = customDictionary[lowerCaseWord];
        setCorrection(`Did you mean: ${correctedSpelling}?`);
        return;
      }
    }
    setCorrection(null);
  };

  return (
    <div className="x-spell-check">
      <h1>XSpellCheck</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {correction && <p>{correction}</p>}
    </div>
  );
};

export default App;
