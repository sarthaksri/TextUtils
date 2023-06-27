import React, { useState } from 'react'


export default function TextForms(props) {

    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convered to Upper Case", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convered to Lower Case", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }
    const handleCopy = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
            <div style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Text Summary</h1>
                <p>{text.trim().split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes read</p>
            </div>
        </>
    );
}
