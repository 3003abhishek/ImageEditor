import { CHANGE_BRIGHTNESS,CHANGE_SATURATE,CHANGE_CONTRAST,CHANGE_SEPIA,CHANGE_DARKNESS, EDIT_STATUS, CHANGE_TEXT} from "./actionTypes";

const  initState={
    brightness_value:1,
    saturate_value:1,
    contrast_value:1,
    sepia_value:0,
    darkness_value:0,
    edit:false,
    text_value:""
   
}

export const imageReducer=(state=initState,action)=>{
switch(action.type){
 
    case CHANGE_BRIGHTNESS:{
        return {
            ...state,brightness_value:action.payload
        }
    }

    case CHANGE_SATURATE:{
        return {
            ...state,saturate_value:action.payload
        }
    }

    case CHANGE_CONTRAST:{
        return {
            ...state,contrast_value:action.payload
        }
    }

    case CHANGE_SEPIA:{
        return {
            ...state,sepia_value:action.payload
        }
    }

    case CHANGE_DARKNESS:{
        return {
            ...state,darkness_value:action.payload
        }
    }

    



    case EDIT_STATUS:{
        return {
            ...state,edit:action.payload
        }
    }


    case CHANGE_TEXT:{
        return {
            ...state,text_value:action.payload
        }
    }
    
  

    default:{
        return state;
    }


  
    }




}
