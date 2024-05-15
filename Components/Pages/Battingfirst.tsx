import React, { useEffect, useState } from "react";
import { setbattingfirstscore,setisfirstinningcompleted } from "../../Redux/Slices/MatchSlice";
import {setfirstingtotal,setfirstingwicket} from "../../Redux/Slices/FirstInningSlice";
import { View, Text, Button, TouchableHighlight } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function Battingfirst({ navigation }) {
    const dispatch = useDispatch();
    const { teamA, teamB, battingfirst, battingsecond, isfirstinningcompleted,wickets, overs } = useSelector((state) => state.match)
    const {firstingtotal,firstingwicket} =useSelector((state)=>state.firstinning);
    let [ballbowled, setballbowled] = useState(0);
    let [firstinningscore, setfirstinningscore] = useState(0);
    let [wicketfalled, setwicketfalled] = useState(0);
    let a = `${Math.floor((ballbowled / 6))}`;
    let b = `${ballbowled % 6}`
    let CurrentOVer = a + "." + b;
    let balltobebowled = overs * 6;


    useEffect(() => {
        if (ballbowled >= balltobebowled || wicketfalled >= wickets) {
            dispatch(setbattingfirstscore(firstinningscore));
            dispatch(setisfirstinningcompleted(true));
            dispatch(setfirstingtotal(firstinningscore));
            dispatch(setfirstingwicket(wicketfalled));
        }
    }, [ballbowled, wicketfalled])

    function extraruns() {
        setfirstinningscore(firstinningscore = firstinningscore + 1);
    }
    function runadder(run) {
        setballbowled(ballbowled = ballbowled + 1);
        setfirstinningscore(firstinningscore = firstinningscore + run);
    }
    function wicket() {
        setballbowled(ballbowled = ballbowled + 1);
        setwicketfalled(wicketfalled = wicketfalled + 1);
    }

    return (
        <View className="bg-red-400 P-3 gap-4 pt-20 flex-1">
            <Text className="text-center  text-4xl text-red-700">{teamA} Vs {teamB}</Text>
            {
                isfirstinningcompleted ? <View className="flex-auto justify-evenly">
                    <Text className="text-4xl text-center "> Inning Completed</Text>
                    <View className="flex-col gap-2">
                        <Text className="text-4xl text-center "> Score-{firstingtotal}/{firstingwicket} </Text>
                        {/* <Text className="text-4xl text-center "> In </Text> */}
                        {/* <Text className="text-4xl text-center "> in {CurrentOVer}/{overs} Overs </Text> */}
                    </View>
                    <Button title="2nd Inning" onPress={() => navigation.navigate("Chase")}></Button>
                </View> : <View className="flex-col justify-start">

                    <Text className="text-4xl text-center my-8 ">Let's Play</Text>
                    <View className="flex-row justify-evenly my-8 ">
                        <Text className="text-4xl flex-1  ">{battingfirst}:{firstinningscore}/{wicketfalled}     </Text>
                        <Text className="text-4xl  ">Overs:{CurrentOVer}/{overs} </Text>
                    </View>
                    <View className="flex-col gap-5">
                        {/* Batters */}
                        <View className="flex-col justify-center">
                            <View>
                                <Button title="Dot Ball" onPress={() => runadder(0)} />
                            </View>
                            <View className="flex-row justify-evenly my-4 ">
                                <Button title="one" onPress={() => runadder(1)} />
                                <Button title="two" onPress={() => runadder(2)} />
                                <Button title="Three" onPress={() => runadder(3)} />
                            </View>
                        </View>

                        {/* Bourndry */}
                        <View className="flex-row justify-evenly">
                            <Button title="six" onPress={() => runadder(6)} />
                            <Button title="Four" onPress={() => runadder(4)} />
                        </View>

                        {/* bowlers */}
                        <View className="flex-row justify-around border-2">
                            <Button title="Wide" onPress={() => extraruns()} />
                            <Button title="Wicket" onPress={() => wicket()} />
                        </View>
                    </View>

                </View>
            }
        </View>
    )
}

export default Battingfirst;