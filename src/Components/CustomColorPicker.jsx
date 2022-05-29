import React from 'react';
import {CustomPicker} from 'react-color';
import {Hue, Swatch} from "react-color/lib/components/common";
import SliderSwatches from "react-color/lib/components/slider/SliderSwatches";
import {Slider} from "react-color/lib/components/slider/Slider";
import SliderSwatch from "react-color/lib/components/slider/SliderSwatch";

const tinycolor= require("tinycolor2");

const inlineStyles={
    container: {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
        display: 'flex',
        flexDirection: 'column',
        height: 282,
        width: 200,
    },
    pointer: {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
    },
    slider: {
        marginTop: '0px',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
        background: '#fff',
        transform: 'translateX(-7px)'
    },
}

const CustomSlider=()=>{ return(<div style={inlineStyles.slider}></div>)}
//const CustomPointer=()=>{ return(<div style={inlineStyles.pointer}></div>)}
class CustomColorPicker extends React.Component{

    state={
        hsl:{h:0,s:0,l:0},
        hsv:{h:0,s:0,v:0},
        hex: 'aaaaaa'

    };
    handleChange() {
        const color= tinycolor(this.props.hex6);
        this.setState({
            hsv: color.toHsv,
            hsl:color.toHsl,
            hex: color.toHex,

        });

    }
    handleHueChange=hue=>{
        this.setState({hsl:hue,})
    }

    render(){
        return (



            <div>
                <div style={{ minHeight:15, minWidth:255, position:'relative', margin:6}}>
                    <Hue
                        hsl={this.state.hsl}
                        pointer={CustomSlider}
                        onChange={this.handleHueChange}
                        direction={'horizontal'}
                    />
                </div>
                <div style={{ minHeight:15, minWidth:255, position:'relative', margin:6}}>
                    <Swatch onChange={this.handleHueChange}/>

                </div>

                CustomColorPicker
            </div>
        );
    }

}
export default CustomPicker(CustomColorPicker);