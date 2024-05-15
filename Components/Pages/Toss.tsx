import { useState } from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setbattingSecond, setbattingFirst } from "../../Redux/Slices/MatchSlice";

function Toss({ navigation }) {
    const dispatch = useDispatch();
    let { teamA, teamB } = useSelector((state) => state.match);
    let [istossdone, setistossdone] = useState(false);

    function teamAbat() {
        dispatch(setbattingFirst(teamA));
        dispatch(setbattingSecond(teamB));
        navigation.navigate("Match_conditions");
    }
    function teamBbat() {
        dispatch(setbattingFirst(teamB));
        dispatch(setbattingSecond(teamA));
        navigation.navigate("Match_conditions");
    }
    return (
        <View className="bg-black flex-1 flex-col">
            <Text>Toss Page</Text>
            <Text>Who will Bat First ?</Text>
            <Button
                onPress={teamAbat}
                title={teamA}></Button>
            <Button
                onPress={teamBbat}
                title={teamB}></Button>
        </View>
    )
}
export default Toss;