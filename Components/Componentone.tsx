import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Componentone() {
    return (
        <View className="flex gap-3 my-1" >
            <Text className="text-2xl">Normal Div</Text>
            <View className="flex-row gap-3 justify-center">
                <View style={styles.textofdivcenter} className="w-28 h-28 bg-red-600"><Text>Red</Text></View>
                <View style={styles.textofdivcenter} className="w-28 h-28 bg-blue-600"><Text>blue</Text></View>
                <View style={styles.textofdivcenter} className="w-28 h-28 bg-green-600"><Text>Greren</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textofdivcenter: {
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})