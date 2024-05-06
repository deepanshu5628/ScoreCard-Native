import { View ,ScrollView,Text} from "react-native";

function ComponentTwo() {
    return (
        <View className="flex gap-3 my-1">
            <Text className="text-2xl">Second Div</Text>
            <ScrollView className="flex-row gap-3 overflow-x-scroll" horizontal={true}  >
                <View className="w-28 h-28 bg-red-600 justify-center items-center"><Text className="">Red </Text></View>
                <View className="w-28 h-28 bg-red-600 justify-center items-center"><Text className="">Blue</Text></View>
                <View className="w-28 h-28 bg-red-600 justify-center items-center"><Text className="">Green</Text></View>
                <View className="w-28 h-28 bg-red-600 justify-center items-center"><Text className="">Green</Text></View>
            </ScrollView>
        </View>
    )
}

export default ComponentTwo;