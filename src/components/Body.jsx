import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { ThemeContext, themes } from "./ThemeContext";

function Body({ toggleTheme }) {
  const theme = React.useContext(ThemeContext);
  const [text, setText] = useState("");
  const emojis = ["🤸‍♂️", "🤸‍♀️", "🤸"];
  const [showModal, setShowModal] = useState(false);

  const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

  const generateString = () =>
    randomEmoji() + text.split(" ").join(randomEmoji()) + randomEmoji();

  return (
    <div className="container">
      <h1>
        Result: <br />
        {generateString(text)}
      </h1>
      <br />

      {showModal && (
        <div
          className="alert alert-success"
          style={{
            opacity: showModal ? "1" : "0",
            transition: "opacity 2s linear",
          }}
        >
          🤸Copied🤸na🤸Beshie🤸koh🤸
        </div>
      )}
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="form-control"
      />
      <CopyToClipboard
        text={generateString()}
        onCopy={() => {
          if (text.trim() !== "") {
            setShowModal(true);
            setTimeout(() => setShowModal(false), 2000);
          }
        }}
      >
        <button className="btn">Copy</button>
      </CopyToClipboard>
      <button className="btn" onClick={toggleTheme}>
        {theme === themes.light ? <IoMdMoon /> : <IoMdSunny />}
      </button>
    </div>
  );
}

export default Body;
