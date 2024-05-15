import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { resetMatch } from "../../Redux/Slices/MatchSlice";
import {resetfirstinning} from "../../Redux/Slices/FirstInningSlice";
import {resetsecondinning} from "../../Redux/Slices/SecondinningSlice";


function Winner({ navigation }) {
    const { winner } = useSelector((state) => state.match);
    const dispatch = useDispatch();
    let [winer, setwiner] = useState("");
    // useEffer
    // React.useEffect(() => {
    //     return navigation.addListener('beforeRemove', (e) => {
    //         console.log("call stack is cllaedsx")
    //         navigation.popToTop()
    //         e.preventDefault();

    //     })
    // })
    function newgame() {
        dispatch(resetfirstinning());
        dispatch(resetsecondinning());
        dispatch(resetMatch());
        navigation.navigate("Captain");
    }

    return (
        <View className="bg-black flex-1 justify-center">
            <Text className="text-center text-2xl ">Winner is {winner}  </Text>
            {/* New Game  */}
            <Button title="New Game" onPress={newgame} />
        </View>
    )
}

export default Winner;