import { createSlice } from "@reduxjs/toolkit";

const matchSlice = createSlice({
    name: "match",
    initialState: {
        teamA:"Team A",
        teamB:"Team B",
        battingfirst:"",
        battingsecond:"",
        overs:1,
        wickets:1,
        battingfirstscore:0,
        winner:"",
        isfirstinningcompleted:false,
        issecondinningcompleted:false,
    },
    reducers:{
        setTeamA:(state,action)=>{
            state.teamA=action.payload;
        },
        setTeamB:(state,action)=>{
            state.teamB=action.payload;
        },
        setbattingFirst:(state,actions)=>{
            state.battingfirst=actions.payload;
        },
        setbattingSecond:(state,actions)=>{
            state.battingsecond=actions.payload;
        },
        setOvers:(state,actions)=>{
            state.overs=actions.payload;
        },
        setWickets:(state,actions)=>{
            state.wickets=actions.payload;
        },
        setbattingfirstscore:(state,actions)=>{
            state.battingfirstscore=actions.payload;
        },
        setWinner:(state,actions)=>{
            state.winner=actions.payload;
        },
        setisfirstinningcompleted:(state,actions)=>{
            state.isfirstinningcompleted=actions.payload;
        },
        setissecondinningcompleted:(state,actions)=>{
            state.issecondinningcompleted=actions.payload;
        },
        resetMatch:(state)=>{
            state.winner="";
            state.battingfirstscore=0;
            state.wickets=1;
            state.overs=1;
            state.battingfirst="";
            state.battingsecond="";
            state.teamA="Team B";
            state.teamB="Team A";
            state.isfirstinningcompleted=false;
            state.issecondinningcompleted=false;
        },
    }
})

export const  {setOvers,setWickets,setbattingFirst
    ,setbattingSecond,setTeamA,setTeamB
    ,setbattingfirstscore,setWinner,setisfirstinningcompleted,setissecondinningcompleted,resetMatch}=matchSlice.actions;
export default matchSlice.reducer;