/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from "react-redux"
import Store from "./Redux/Store";

const Appredux=()=>{
   return  <Provider store={Store}>
        <App/>
    </Provider>
}
AppRegistry.registerComponent(appName,()=>Appredux);
