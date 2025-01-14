import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    };

    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("TextArea is clear!", "success");
    };

    const handleCopy = () => {
        let newText = document.getElementById("exampleFormControlTextarea1");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text is Copied to Clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!", "success");
    };

    // Use state hook
    const [text, setText] = useState('');

    // Define dynamic text color based on modes
    const dynamicTextColor = (props.modeBlue === 'dark' || props.modeGreen === 'dark') ? 'white' : 'black';
    const dynamicTextareaBachgroundColor = (props.modeBlue === 'dark' ? '#171e37' : (props.modeGreen==='dark'? '#14541e' : 'white'))

    return (
        <>
            <div className="container my-3" style={{ color: dynamicTextColor }}>
                <h1>{props.heading}</h1>
                <textarea
                    className={`form-control`}
                    id="exampleFormControlTextarea1"
                    value={text}
                    rows="8"
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: dynamicTextareaBachgroundColor,
                        color: dynamicTextColor,
                    }}
                ></textarea>
                <button
                    className={`btn btn-${props.modeGreen === 'dark' ? 'success' : 'primary'} my-3 mx-1`}
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    className={`btn btn-${props.modeGreen === 'dark' ? 'success' : 'primary'} my-3 mx-1`}
                    onClick={handleLowClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    className={`btn btn-${props.modeGreen === 'dark' ? 'success' : 'primary'} my-3 mx-1`}
                    onClick={handleClear}
                >
                    Clear
                </button>
                <button
                    className={`btn btn-${props.modeGreen === 'dark' ? 'success' : 'primary'} my-3 mx-1`}
                    onClick={handleCopy}
                >
                    Copy
                </button>
                <button
                    className={`btn btn-${props.modeGreen === 'dark' ? 'success' : 'primary'} my-3 mx-1`}
                    onClick={handleExtraSpaces}
                >
                    Remove Extra Spaces
                </button>
            </div>
            <div className="container" style={{ color: dynamicTextColor }}>
                <h3>Your Text Summary</h3>
                <b>{text.split(" ").filter((word) => word.length > 0).length} Words & {text.length} Characters<br /></b>
                <b>{0.008 * text.split(" ").filter((word) => word.length > 0).length} Reading time in mins</b>

                <h3>Preview</h3>
                <b>{text.length > 0 ? text : "Enter your text to preview in the textarea"}</b>
            </div>
        </>
    );
}
