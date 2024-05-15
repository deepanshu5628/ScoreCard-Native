import React, { useState } from "react";

import { Text, View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setWinner,setissecondinningcompleted } from "../../Redux/Slices/MatchSlice";
import {setsecondingtotal,setsecondwicket} from "../../Redux/Slices/SecondinningSlice";

function Chasepage({ navigation }) {
    const dispatch = useDispatch();
    let target = useSelector((state) => state.match.battingfirstscore);
    let totalovers = useSelector((state) => state.match.overs);
    let { battingfirst, battingsecond, wickets, teamA, teamB,
        issecondinningcompleted,overs } = useSelector((state) => state.match);
    let { firstingtotal, firstingwicket } = useSelector((state) => state.firstinning);
    let { secondingtotal, secondingwicket } = useSelector((state) => state.secondinning);
    let [ballbowled, setballbowled] = useState(0);
    let [secondinningscore, setsecondinningscore] = useState(0);
    let [wicketfalled, setwicketfalled] = useState(0);
    let a = `${Math.floor((ballbowled / 6))}`;
    let b = `${ballbowled % 6}`
    let CurrentOVer = a + "." + b;
    let balltobebowled = overs * 6;

    // match end by achinving runs
    if (secondinningscore >= (target + 1)&& ballbowled <=balltobebowled && wicketfalled<wickets) {
        console.log("match ended chasing ");
        dispatch(setissecondinningcompleted(true));
        dispatch(setWinner(battingsecond));
        dispatch(setsecondingtotal(secondinningscore))
        dispatch(setsecondwicket(wicketfalled));
        // navigation.navigate("Winner");
    }
    // chasing temam has lost 
    if ( ballbowled ==balltobebowled && wicketfalled<=wickets&& secondinningscore < target) {
        console.log("chasing team has lost the match by playing all the balls  ");
        dispatch(setissecondinningcompleted(true));
        dispatch(setWinner(battingfirst));
        dispatch(setsecondingtotal(secondinningscore))
        dispatch(setsecondwicket(wicketfalled));
        // navigation.navigate("Winner");
    }

    // match end by all out or defending
    if (wicketfalled == wickets && ballbowled <=balltobebowled && secondinningscore <target ) {
        console.log("match ended by fall of all the wickets");
        dispatch(setissecondinningcompleted(true));
        dispatch(setWinner(battingfirst));
        dispatch(setsecondingtotal(secondinningscore))
        dispatch(setsecondwicket(wicketfalled));
        // navigation.navigate("Winner");
    }

    if((wicketfalled ==wickets || ballbowled ==balltobebowled) && secondinningscore==target){
        console.log("Tied Match");
        dispatch(setissecondinningcompleted(true));
        dispatch(setWinner("Tied Match"));
        dispatch(setsecondingtotal(secondinningscore))
        dispatch(setsecondwicket(wicketfalled));
    }

    function extraruns() {
        setsecondinningscore(secondinningscore = secondinningscore + 1);
    }
    function runadder(run) {
        setballbowled(ballbowled = ballbowled + 1);
        setsecondinningscore(secondinningscore = secondinningscore + run);
    }
    function wicket() {
        setballbowled(ballbowled = ballbowled + 1);
        setwicketfalled(wicketfalled = wicketfalled + 1);
    }

    // React.useEffect(() => {
    //     return navigation.addListener('beforeRemove', (e) => {
    //         e.preventDefault();
    //     })
    // })

    return (
        <View className="bg-red-400 P-3 gap-4 pt-20 flex-1">
            <Text className="text-center  text-4xl text-red-700">{teamA} Vs {teamB}</Text>
            {
                issecondinningcompleted ? <View className="flex-auto justify-evenly">
                    <Text className="text-4xl text-center "> Match Finished</Text>
                    <View className="flex-col gap-2">
                        <Text className="text-4xl text-center "> Score-{secondingtotal}/{secondingwicket} </Text>
                        {/* <Text className="text-4xl text-center "> In </Text> */}
                        {/* <Text className="text-4xl text-center "> in {CurrentOVer}/{overs} Overs </Text> */}
                    </View>
                    <Button title="Results" onPress={() => navigation.navigate("Winner")}></Button>
                </View> : <View>
                    <Text className="text-4xl text-center ">{battingfirst}:{firstingtotal}/{firstingwicket}</Text>
                    <Text className="text-4xl text-center ">Let's Chase {(target + 1)}</Text>
                    <View className="flex-row    ">
                        <Text className="text-3xl flex-1 ">{battingsecond}:{secondinningscore}/{wicketfalled}     </Text>
                        <Text className="text-3xl flex-1 ">Overs:{CurrentOVer}/{totalovers} </Text>
                    </View>
                    <View className="flex-col gap-5">
                        {/* Batters */}
                        <View className="flex-col justify-center">
                            <View className="mt-5">
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
export default Chasepage