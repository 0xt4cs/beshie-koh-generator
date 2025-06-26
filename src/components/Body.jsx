import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoMdMoon, IoMdSunny, IoMdTrash } from "react-icons/io";
import { ThemeContext, themes } from "./ThemeContext";

function Body({ toggleTheme }) {
  const theme = React.useContext(ThemeContext);
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Original Beshie Koh cartwheel emojis
  const emojis = ["🤸‍♂️", "🤸‍♀️", "🤸"];
  const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

  const generateBeshieKoh = () => {
    if (!text.trim()) return "";
    const beshieText = text + " beshie koh";
    return randomEmoji() + beshieText.split(" ").join(randomEmoji()) + randomEmoji();
  };

  const handleClear = () => {
    setText("");
    setShowResult(false);
    setAnimationKey(prev => prev + 1);
  };

  const handleGenerate = () => {
    if (text.trim()) {
      setShowResult(true);
      setAnimationKey(prev => prev + 1);
    }
  };

  return (
    <div className="container">
      <div className="generator-card">
        <div className="input-section">
          <div className="input-container">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="form-control"
              placeholder="Type your message here..."
              maxLength={150}
            />
            <div className="char-counter">
              {text.length}/150
            </div>
          </div>
          
          <div className="button-group">
            <button 
              className="btn btn-primary" 
              onClick={handleGenerate}
              disabled={!text.trim()}
            >
              Generate Beshie Koh! 🤸
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={handleClear}
              disabled={!text}
            >
              <IoMdTrash /> Clear
            </button>
            <button className="btn btn-theme" onClick={toggleTheme}>
              {theme === themes.light ? <IoMdMoon /> : <IoMdSunny />}
            </button>
          </div>
        </div>

        {showModal && (
          <div className="success-toast">
            🤸 Copied na beshie koh! 🤸
          </div>
        )}

        <div className="result-section">
          <h2>Your Beshie Koh Result:</h2>
          <div 
            key={animationKey}
            className={`result-display ${showResult ? 'show' : ''}`}
          >
            {showResult && text.trim()
              ? generateBeshieKoh()
              : `Type something and click "Generate" para sa Beshie Koh magic! ✨`
            }
          </div>
          
          {showResult && text.trim() && (
            <CopyToClipboard
              text={generateBeshieKoh()}
              onCopy={() => {
                setShowModal(true);
                setTimeout(() => setShowModal(false), 2000);
              }}
            >
              <button className="btn btn-copy">
                📋 Copy Beshie Koh
              </button>
            </CopyToClipboard>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
