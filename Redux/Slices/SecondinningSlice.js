import { createSlice } from "@reduxjs/toolkit"

const secondinningSlice=createSlice({
    name:"secondinning",
    initialState:{
        secondingtotal:0,
        secondingwicket:0,
    },
    reducers:{
        setsecondingtotal:(state,actions)=>{
            state.secondingtotal=actions.payload;
        },
        setsecondwicket:(state,actions)=>{
            state.secondingwicket=actions.payload;
        },
        resetsecondinning:(state)=>{
            state.secondingtotal=0;
            state.secondingwicket=0;
        }
    }
})
export const {setsecondingtotal,setsecondwicket,resetsecondinning}=secondinningSlice.actions; 
export default secondinningSlice.reducer;