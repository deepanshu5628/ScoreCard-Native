import { configureStore } from "@reduxjs/toolkit";
import MatchSlice from "./Slices/MatchSlice";
import FirstInningSlice from "./Slices/FirstInningSlice";
import SecondinningSlice from "./Slices/SecondinningSlice";
const Store=configureStore({
    reducer:{
        match:MatchSlice,
        firstinning:FirstInningSlice,
        secondinning:SecondinningSlice,
    }
})

export default Store;