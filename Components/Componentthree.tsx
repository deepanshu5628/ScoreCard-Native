import { View, Text, Image } from 'react-native'
import React from 'react'

import Photo from "../sampledata/Photo.jpg"
const Componentthree = () => {
  return (
    <View className="my-1 px-3">
      <Text className="text-2xl">Trending Place</Text>
      <View className="my-1">
        <Image source={Photo}   className="w-full  h-60 m-auto "/>
      </View>
      <Text className="text-3xl">Deepanshu</Text>
      <Text className="text-xl">Ch.Dadri, Haryana</Text>
      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident cum qui, 
        consequuntur maiores dolore, nisi ea impedit aut similique libero dolores harum, 
        exercitationem odit nesciunt quasi incidunt rem in. Molestias?</Text>
    </View>
  )
}

export default Componentthree