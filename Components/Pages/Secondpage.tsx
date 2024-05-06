import React, { useState } from "react";

import { View, Text, Button,TouchableHighlight } from "react-native";
function Secondpage({ navigation, route }) {
    let totalovers = route.params.overs;
    let [currover,setcurrover]=useState(0);
    let [totalscore,settotalscore]=useState(0);
    let [wickets,setwickets]=useState(0);
    let a=`${Math.floor((currover/6))}` ;
    let b=`${currover%6}`
    let CurrentOVer=a+"."+b;

    if((totalovers*6)==currover){
        navigation.navigate("Chase",{target:totalscore,overs:totalovers})
    }

    function extraruns(){
        settotalscore(totalscore=totalscore+1);
    }
    function runadder(run){
        setcurrover(currover=currover+1);
        settotalscore(totalscore=totalscore+run);
    }
    function wicket(){
        setcurrover(currover=currover+1);
        setwickets(wickets=wickets+1);
    }
    return (
        <View className="bg-red-400 P-3">
            <Text className="text-4xl text-center ">Let's Play</Text>
            <View className="flex-row justify-evenly  ">
                <Text className="text-4xl ">Runs:{totalscore}/{wickets}     </Text>
                <Text className="text-4xl ">Overs:{CurrentOVer}/{totalovers} </Text>
            </View>
            <View>
                {/* <Button title="Wide"  onPress={()=>settotalscore(totalscore++)}/> */}
                <Button title="six"  onPress={()=>runadder(6)}/>
                <Button title="Four"  onPress={()=>runadder(4)}/>
                <Button title="Three"  onPress={()=>runadder(3)}/>
                <Button title="two"  onPress={()=>runadder(2)}/>
                <Button title="one"  onPress={()=>runadder(1)}/>
                <Button title="Dot Ball"  onPress={()=>runadder(0)}/>
                <Button title="Wide"  onPress={()=>extraruns()}/>
                <Button title="Wicket"  onPress={()=>wicket()}/>

            </View>
        </View>
    )
}

export default Secondpage;