import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showClipboard, setShowClipboard] = useState(false);
  const [clipboardTexts] = useState(['Hiiii', 'Hellooo', 'Good Morning', 'Good night' , 'Have a nice dayy!!' , 'Thank you']);

  const handleTextClick = (text) => {
    setInputValue(text);
    setShowClipboard(false); // Hide the clipboard dropdown after selection
  };

  const handleClipboardClick = () => {
    setShowClipboard(!showClipboard); // Toggle display of clipboard dropdown
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        readOnly
        placeholder="Click on clipboard to add text"
      />
      <div className="clipboardDropdown">
        <button onClick={handleClipboardClick}>Clipboard</button>
        {showClipboard && (
          <select onChange={(e) => handleTextClick(e.target.value)}>
            <option value="">Select</option>
            {clipboardTexts.map((text, index) => (
              <option key={index} value={text}>
                {text}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default App;
