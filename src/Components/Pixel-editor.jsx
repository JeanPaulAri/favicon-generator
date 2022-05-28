import React,{useState} from "react";
import "../Styles/Pixel-editor.scss"


export default function PixelEditor(){
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("Render Canvas");
    const [selectedColor, setColor] = useState("#000000");

    function initializeDrawingPanel(){
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "Render Canvas"
            ? setButtonText("Re-render")
            : setButtonText("Render Canvas");
    }
    return(

      <div id="PixelEditor">
          <h1>Favicon Editor</h1>
          <h2>ver 1.0</h2>

          <h3>Canvas Size:</h3>
          <div id="options">
              <div className="option">

                  <input
                      type="number"
                      className="panelInput"
                      defaultValue={panelWidth}
                      onChange={(e)=>
                      {setPanelWidth(e.target.value)}}
                  />
                  <span>[ Width ]</span>

              </div>
              <div className="option">

                  <input
                      type="number"
                      className="panelInput"
                      defaultValue={panelHeight}
                      onChange={(e)=>
                      setPanelHeight(e.target.value)}
                  />
                  <span>[ Height ]</span>

              </div>
          </div>
          <button className="button" onClick={initializeDrawingPanel}>{buttonText}</button>
      </div>

    );


}