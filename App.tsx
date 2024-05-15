import React from "react";
import { Text, View,ScrollView,StyleSheet,Button} from "react-native";
import Firstpage from "./Components/Pages/Firstpage";
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Battingfirst from "./Components/Pages/Battingfirst";
import Chasepage from "./Components/Pages/Chasepage";
import Home from "./Components/Pages/Home"
import Toss from "./Components/Pages/Toss";
import Winner from "./Components/Pages/Winner";
import Testing from "./Components/Pages/Testing";
const Stack=createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name="Captain" component={Home} />
          <Stack.Screen name="Toss" component={Toss}/>
          <Stack.Screen  name="Match_conditions" component={Firstpage}  />
          <Stack.Screen  name="Battingfirst" component={Battingfirst} options={{title:"1st Innings",headerLeft:()=>""}}/>
          <Stack.Screen name="Chase" component={Chasepage} options={{title:"2nd Innings",headerLeft:()=>""}}/>
          <Stack.Screen name="Winner" component={Winner} options={{headerLeft:()=>""}} />
          <Stack.Screen name="Testing" component={Testing} options={{headerLeft:()=>""}}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;




