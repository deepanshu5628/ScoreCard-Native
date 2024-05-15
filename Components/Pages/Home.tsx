import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import {setTeamA,setTeamB} from "../../Redux/Slices/MatchSlice"

function Home({navigation}) {
    const dispatch=useDispatch();
    let [teamA, setteamA] = useState("Team A");
    let [teamB, setteamB] = useState("Team B");

    function nextpage(){
        dispatch(setTeamA(teamA));
        dispatch(setTeamB(teamB));
        navigation.navigate("Toss");
    }
    return (
        <View className="bg-black flex-1 gap-4 items-center justify-start pt-32">
            <Text className="text-4xl my-10">Choose the Captian </Text>
            <TextInput
                placeholder="enter name"
                className="bg-slate-600 w-[50%]"
                onChangeText={(e) => setteamA(e)}
                value={teamA}
            />
            <Text className="text-7xl">VS </Text>
            <TextInput
                placeholder="enter name"
                className="bg-slate-600 w-[50%]"
                onChangeText={(e) => setteamB(e)}
                value={teamB}
            />
            <View className="w-full ">
                <Button title="Next" onPress={nextpage}></Button>
            </View>
        </View>
    )
}
export default Home;