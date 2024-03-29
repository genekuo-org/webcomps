import Slider from '../slider2/slider.js';
import CoordinatePicker from '../coordpicker/coordpicker.js';

export default {
    render() {
        return `${this.css()}
                ${this.html()}`;
    },

    mapDOM(scope) {
        return {
            hue: scope.getElementById('hue-slider'),
            transparency: scope.getElementById('transparency-slider'),
            satbright: scope.getElementById('saturation-brightness'),
            textInputR: scope.getElementById('textInputR'),
            textInputG: scope.getElementById('textInputG'),
            textInputB: scope.getElementById('textInputB'),
            textInputA: scope.getElementById('textInputA'),
            textInputHex: scope.getElementById('textInputHex'),
        }
    },

    html() {
        return `<div class="container">  
                    <div class="row">
                        <div class="slider-container">
                            <webcomps-slider id="hue-slider" value="50"></webcomps-slider>
                            <webcomps-slider id="transparency-slider" value="0"></webcomps-slider>
                        </div>
                        
                        <webcomps-coord-picker x="50" y="50" id="saturation-brightness"></webcomps-coord-picker>
                    </div>
   
                    <div class="row">
                        <div class="text-inputs">
                            <div>
                              <label class="top" for="textInputR">Red</label>
                              <input id="textInputR" type="number" value="0" max="255" size="4" min="0">
                            </div>
                            
                            <div>
                              <label class="top" for="textInputG">Green</label>
                              <input id="textInputG" type="number" value="0" max="255" size="4" min="0">
                            </div>
                            
                            <div>
                              <label class="top" for="textInputB">Blue</label>
                              <input id="textInputB" type="number" value="0" max="255" size="4" min="0">
                            </div>
                            
                            <div>
                              <label class="top" for="textInputA">Alpha</label>
                              <input id="textInputA" type="number" value="0" max="100" min="0" size="4">
                            </div>
                            
                            <div>
                              <label class="top" for="textInputHex">Hex</label>
                              <input id="textInputHex" type="text" width="50px" size="8">
                            </div>
                        </div>
                    </div>
                </div>`
    },

    css() {
        return `<style>
                    :host {
                        width: 100%;
                        display: inline-block;
                    }
 
                    .container {
                        padding: 10px;
                    }
                    
                    .text-inputs {
                        display: flex;
                        width: 100%;
                        justify-content: center;
                    }
                    
                    .row {
                        display: flex;
                    }
           
                    .slider-container {
                        flex: 1;
                        padding-right: 10px;
                    }
  
                    #hue-slider, #transparency-slider {
                        width: 100%;
                        height: 40px;
                        margin-bottom: 5px;
                        border-radius: 3px;
                    }
                    
                    #saturation-brightness {
                        width: 90px;
                        height: 90px;
                        border-radius: 3px;
                    }
                    
                    #hue-slider {
                        background: linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
                    }
                    
                    #transparency-slider {
                        background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),linear-gradient(-45deg, #ccc 25%, transparent 25%),linear-gradient(45deg, transparent 75%, #ccc 75%),linear-gradient(-45deg, transparent 75%, #ccc 75%);
                        background-size: 16px 16px;
                        background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
                    }
                </style>`;
    }
}
