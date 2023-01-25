import  React from "react";
import "../Style/filters.css"

import {useDispatch,useSelector} from "react-redux";
import { store } from "../redux/store";
import { brightness,saturate, contrast, sepia,darkness,status,text } from "../redux/action";
function Filter_column(){

   let gandhi=useSelector((store)=>store);
//    console.log(gandhi.brightness_value);

   let dispatch=useDispatch();
 



   let handleBrightness=(e)=>{
        dispatch(brightness(e.target.value));
        dispatch(status(true));
       
   }

   let handleSaturate=(e)=>{
    dispatch(saturate(e.target.value));
    dispatch(status(true));
   }


   let handleContrast=(e)=>{
    dispatch(contrast(e.target.value));
    dispatch(status(true));
   }

   let handleSepia=(e)=>{
    dispatch(sepia(e.target.value));
    dispatch(status(true));
   }

   let handleDarkness=(e)=>{
    dispatch(darkness(e.target.value));
    dispatch(status(true));


   }


   let handleTextChange=(e)=>{
    dispatch(text(e.target.value));
   }

   let handleReset=()=>{
    dispatch(status(false));
   }









    return(
        <div className="right_box">

            <div className="right_navbar">
                <h1>Filters</h1>
                <button onClick={handleReset} id="reset_button">Reset</button>
            </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}}>
          <div>
            <lebel>Brightness</lebel>
            <input onChange={(e)=>(handleBrightness(e))} type="range" min="0.00" max="1.00" step="0.10" />
            </div>
            <div>
            <lebel>Saturate</lebel>
            <input onChange={(e)=>(handleSaturate(e))} type="range" min="0" max="1"  step=".1"/>
            </div>
            <div>
            <lebel>Contrast</lebel>
            <input onChange={(e)=>(handleContrast(e))} type="range" min="0" max="1" step=".1"  />
            </div>
            <div>
            <lebel>Sepia</lebel>
            <br></br>
            <input onChange={(e)=>(handleSepia(e))} type="range" min="0" max="1" step=".10" />
            </div>
            <div>
            <lebel>Black/White</lebel>
            <input onChange={(e)=>(handleDarkness(e))} type="range" min="0" max="1" step=".10"  />
            </div>
          
        </div>

        <div className="text_div">
            <h1 >Text</h1>
            <lebel>Content</lebel>
            <br></br>
            <input type="text" onChange={(e)=>(handleTextChange(e))}/>
        </div>
        </div>
        
    )
}

export default Filter_column;