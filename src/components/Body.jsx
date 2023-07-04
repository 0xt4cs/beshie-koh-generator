import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Body() {
  const [text, setText] = useState("");
  const emojis = ["🤸‍♂️", "🤸‍♀️", "🤸"];

  const randomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];
  const generateString = (text) =>
    randomEmoji() + text.split(" ").join(randomEmoji()) + randomEmoji();

  return (
    <div className="container">
      <h1>
        Result: <br />
        {generateString(text)}
      </h1>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="form-control"
      />
      <CopyToClipboard
        text={generateString(text)}
        onCopy={() => alert("🤸‍♂️Beshie🤸copied 🤸‍♂️na!🤸‍♀️")}
      >
        <button className="btn">🤸‍♂️Copy🤸‍♂️</button>
      </CopyToClipboard>
    </div>
  );
}

export default Body;
