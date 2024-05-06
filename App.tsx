import React from "react";
import { Text, View,ScrollView,StyleSheet} from "react-native";
import Firstpage from "./Components/Pages/Firstpage";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Secondpage from "./Components/Pages/Secondpage";
import Chasepage from "./Components/Pages/Chasepage";
const Stack=createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name="Home" component={Firstpage}  />
          <Stack.Screen  name="Second" component={Secondpage}/>
          <Stack.Screen name="Chase" component={Chasepage}/>
          
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;




