import { createSlice } from "@reduxjs/toolkit"

const firstinningSlice=createSlice({
    name:"firstinning",
    initialState:{
        firstingtotal:0,
        firstingwicket:0,
    },
    reducers:{
        setfirstingtotal:(state,actions)=>{
            state.firstingtotal=actions.payload;
        },
        setfirstingwicket:(state,actions)=>{
            state.firstingwicket=actions.payload;
        },
        resetfirstinning:(state)=>{
            state.firstingtotal=0;
            state.firstingwicket=0;
        }
    }
})
export const {setfirstingtotal,setfirstingwicket,resetfirstinning}=firstinningSlice.actions; 
export default firstinningSlice.reducer;