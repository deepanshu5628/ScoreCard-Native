import React, { useState } from "react";
import { Text, View, Button } from "react-native";

function Firstpage({ navigation }) {
    let [totalovers, settotalovers] = useState(1);

    return (
        <View className="flex-1 bg-black justify-center gap-7 ">
            <Text className="text-4xl text-center">Choose OVers:</Text>
            <View className="flex-row  justify-center gap-9 items-center ">
                <View className="w-10 h-15">
                    <Button title="-" onPress={() => totalovers > 0 && settotalovers(totalovers=totalovers-1)} />
                </View>
                <Text className="text-4xl">{totalovers} </Text>
                <View  className="w-10 h-15">
                    <Button title="+" onPress={() => settotalovers(totalovers=totalovers+1)} />
                </View>
            </View>
            <View>
                <Button title="Next" onPress={() => navigation.navigate("Second" ,{overs:totalovers})}></Button>
            </View>
        </View>
    )
}

export default Firstpage;