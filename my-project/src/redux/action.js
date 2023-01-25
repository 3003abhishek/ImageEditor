import { CHANGE_BRIGHTNESS,CHANGE_SATURATE,CHANGE_CONTRAST,CHANGE_SEPIA,CHANGE_DARKNESS, EDIT_STATUS, CHANGE_TEXT } from "./actionTypes";

export const brightness=(payload=1)=>({type:CHANGE_BRIGHTNESS,payload});

export const saturate=(payload=1)=>({type:CHANGE_SATURATE,payload});

export const contrast=(payload=1)=>({type:CHANGE_CONTRAST,payload});

export const sepia=(payload=1)=>({type:CHANGE_SEPIA,payload});

export const darkness=(payload=1)=>({type:CHANGE_DARKNESS,payload});



export const status=(payload=false)=>({type:EDIT_STATUS,payload});

export const text=(payload="")=>({type:CHANGE_TEXT,payload});