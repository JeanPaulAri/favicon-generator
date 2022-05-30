import React,{useState} from "react";
import "../Styles/Pixel-editor.scss"
import {CompactPicker, SliderPicker} from 'react-color';
import DrawingPanel from "./DrawingPanel";

//import {SliderColorPicker} from './SliderColorPicker';
//import {Slider} from "react-color/lib/components/slider/Slider";


export default function PixelEditor(){
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("Render Canvas");
    const [color, setColor] = React.useState({hex:"#fff"});

    function initializeDrawingPanel(){
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);

        buttonText === "Render Canvas"
            ? setButtonText("Re-render")
            : setButtonText("Render Canvas");
    }

    function changeColor(color){
        setColor(color.hex);
    }


    return(

      <div id="PixelEditor">

          <h1>Favicon Editor</h1>
          {hideDrawingPanel && <h2>ver 1.0</h2>}
          {hideDrawingPanel &&<h3>Canvas Size:</h3>}
          {hideDrawingPanel && <div id="options">
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
          </div>}
          <button className="button" onClick={initializeDrawingPanel}>{buttonText}</button>
          {hideOptions && (
              <SliderPicker
              color={color}
              onChange={changeColor}
              />)}
          {hideOptions && (
              <div style={{paddingTop:15}}>
              <CompactPicker
              color={color}
              onChange={changeColor}
              />
              </div>)}

          {hideOptions && (
              <DrawingPanel
                  width={panelWidth}
                  height={panelHeight}
                  selectedColor={color}
              />
          )}



      </div>


    );


}