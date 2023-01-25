import React from "react";
import { useState } from "react";
import "../Style/filters.css"
import {useSelector} from "react-redux";

import { store } from "../redux/store";
import { useEffect } from "react";
function Left_column(){
    
    let [recent_data,setRecent_data]=useState([]);

    
    
    let custom_style=useSelector((store)=>store);
    let editStatus=useSelector((store)=>store.edit);
    console.log(custom_style);
    console.log(editStatus);
 
  

  let handleNext=()=>{
    let image=document.getElementById("main_image").src;
    addImage(image);
    window.location.reload()


    
  }



  let addImage=async(image)=>{
    let res=await fetch("http://localhost:8080/recent",{
        
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({id:Date.now(),image_url:image,title:custom_style.text_value})
        
    });

    res= await res.json();

    console.log(image);
   }
    

  let getRecentData=async()=>{
    let res=await fetch("http://localhost:8080/recent");
    res=await res.json();
    // console.log(res);

    setRecent_data(res);
    console.log(recent_data);
  }



  useEffect(()=>{
    getRecentData();
  },[recent_data])

   useEffect(()=>{
    if(editStatus==false){
        document.getElementById("main_image").style.filter="none";
    }
   })
  


   return(
    <div className="left_box">
       <div className="left_navbar">
       <h1>Untitled Image</h1>
       <button id="next_button" onClick={handleNext}>New</button>

       </div>

        <div className="main_img_box">

            
            
            


           <img id="main_image"  style={{height:"250px",width:"250px",filter:` brightness(${custom_style.brightness_value}) contrast(${custom_style.contrast_value}) saturate(${custom_style.saturate_value}) sepia(${custom_style.sepia_value}) grayscale(${custom_style.darkness_value})`}}  src="https://source.unsplash.com/random"/>
           <h1 id="typed_text">{custom_style.text_value}</h1>
        
        </div>
      
       <h1>Recent Images</h1>
      <div className="recent_data_box">
         {
            recent_data.map((el)=>{
              return(
                <div className="recent_img_box">
                    <img className="recent_image" src={el.image_url}/>
                    <p>{el.title}</p>
                </div>
              )
            })
                
            
         }

      </div>


    </div>
   )
}

export default Left_column;


