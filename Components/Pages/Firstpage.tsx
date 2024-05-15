import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {setOvers,setWickets} from "../../Redux/Slices/MatchSlice"

function Firstpage({ navigation}) {
    const dispatch=useDispatch();
    const {teamA,teamB}=useSelector((state)=>state.match);
    let [totalovers, settotalovers] = useState(1);
    let [totalwickets,settotalwickets]=useState(4); 
    
    
    function nextpage(){
        dispatch(setOvers(totalovers));
        dispatch(setWickets(totalwickets));
        navigation.navigate("Battingfirst");
    }
    return (
        <View className="flex-1 bg-black justify-start pt-32 gap-7 ">
            <Text className="text-center text-4xl text-red-700">{teamA} Vs {teamB}</Text>
            <Text className="text-4xl text-center">Choose OVers:</Text>
            {/* selecting overs */}
            <View className="flex-row  justify-center gap-9 items-center ">
                <View className="w-10 h-15">
                    <Button title="-" onPress={() => totalovers > 1 && settotalovers(totalovers = totalovers - 1)} />
                </View>
                <Text className="text-4xl">{totalovers} </Text>
                <View className="w-10 h-15">
                    <Button title="+" onPress={() => settotalovers(totalovers = totalovers + 1)} />
                </View>
            </View>
            {/* slecting wickets */}
            <Text className="text-4xl text-center">Total Players Each Side</Text>
            <View className="flex-row  justify-center gap-9 items-center ">
                <View className="w-10 h-15">
                    <Button title="-" onPress={() => totalwickets > 1 && settotalwickets(totalwickets = totalwickets - 1)} />
                </View>
                <Text className="text-4xl">{totalwickets} </Text>
                <View className="w-10 h-15">
                    <Button title="+" onPress={() => totalwickets<11&& settotalwickets(totalwickets = totalwickets + 1)} />
                </View>
            </View>
            <View>
                <Button title="Next" onPress={nextpage}></Button>
            </View>
        </View>
    )
}

export default Firstpage;