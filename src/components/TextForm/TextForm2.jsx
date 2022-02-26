import React, { useEffect, useState } from "react";
import "./textForm2.css";

export default function TextForm2(props) {
  useEffect(() => {
    document.title = props.title;
  })
  const [text, setText] = useState("");
  const [buttonText, setButtonText] = useState("Upper Case");

  const changingText = (event) => {
    setText(event.target.value);
  };

  const upperCase = () => {
    console.log("-->>");
    let newText = "";
    if (buttonText === "Upper Case") {
      newText = text.toUpperCase();
      setText(newText);
      setButtonText("Lower Case");
      props.alertMsg("Words are converted to upper case", "success");
    } else if (buttonText === "Lower Case") {
      newText = text.toLowerCase();
      setText(newText);
      setButtonText("Upper Case");
      props.alertMsg("Words are converted to lower case", "success");
    }
  };
  const calculateWords = (text) => {
    while (text[text.length - 1] === " ") {
      text = text.slice(0, -1);
    }
    if (text.length !== 0) return text.split(" ").length;
    return 0;
  };

  const selectColor = (color) => {
    if (color === "dark") {
      return "#042743";
    } else if (color === "black") {
      return "#052a05";
    } else {
      return "white";
    }
  };

  const selectTextColor = (color) => {
    if (color === "dark" || color === "black") {
      return "white";
    } else {
      return "black";
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: selectColor(props.modeText),
          marginTop: "5px",
          padding: "5px",
          fontFamily: "Baloo Bhai 2, cursive",
        }}
      >
        <div>
          <h1
            style={{
              color: selectTextColor(props.modeText),
            }}
          >
            {props.heading}
          </h1>
          <div
            style={{
              color: selectTextColor(props.modeText),
              backgroundColor: selectColor(props.modeText),

              marginTop: "5px",
            }}
            className="form-floating"
          >
            <textarea
              style={{
                color: selectTextColor(props.modeText),
                backgroundColor: selectColor(props.modeText),
              }}
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              value={text}
              onChange={changingText}
            ></textarea>
            <label htmlFor="floatingTextarea">
              Enter you commnets Comments
            </label>
            <button onClick={upperCase} className="btn btn-primary my-2">
              {buttonText}
            </button>
          </div>
        </div>
        <div className="container my3">
          <h2 style={{ color: selectTextColor(props.modeText) }}>
            You text summary
          </h2>
          <p style={{ color: selectTextColor(props.modeText) }}>
            Words: {calculateWords(text)} Characters: {text.length}
          </p>
          <h2 style={{ color: selectTextColor(props.modeText) }}>
            Preview
          </h2>
          <p style={{ color: selectTextColor(props.modeText) }}>
            {text.length > 0 ? text : "Enter text to preview"}
          </p>
        </div>
      </div>
    </>
  );
}
