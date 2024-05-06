// import React from "react"

// import {Text,View,SafeAreaView} from "react-native";

// function App(){
//   return (
//     <SafeAreaView>
//       <View>
//       <View className="">
//         <View className="w-12 h-12 bg-yellow-300"><Text>red</Text></View>
//         <View className="w-12 h-12 bg-yellow-300"><Text> blue</Text></View>
//         <View className="w-12 h-12 bg-yellow-300"><Text>green</Text> </View>
//         <View className="w-12 h-12 bg-yellow-300"><Text>yellow</Text></View>
//       </View>
//         {/* <Text>
//         heelog 
//         once again heelog 
//         </Text>
//         <Text className="text-3xl text-yell">
//         heelog 
//         once again heelogsss 
//         </Text> */}
//       </View>
//     </SafeAreaView>
//   )
// }


import { Text, View,ScrollView,StyleSheet} from "react-native";
import Componentone from "./Components/Componentone";
import ComponentTwo from "./Components/ComponentTwo";
import Componentthree from "./Components/Componentthree";
const App = () => {
  return (
    <ScrollView  >
      {/* first div */}
      <Componentone/>
      {/* sendond div */}
      <ComponentTwo/>
      {/* third div */}
      <Componentthree/>
      {/* fourth div */}
      <Componentone/>
    </ScrollView>
  );
};
export default App;




