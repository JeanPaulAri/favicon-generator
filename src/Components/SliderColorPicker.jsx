import React from 'react';
import {SliderPicker} from "react-color";

export class SliderColorPicker extends React.Component{

    handleChange(color){
        color = {
           hsl: {
             h: 0,
             s: 0,
             l: .20,
             a: 1,
           },
         }
    }

    render(){

        return(
            <SliderPicker
                onChangeComplete={this.handleChange}
                position='relative'
            />
        );
    }

}

