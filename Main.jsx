import React from "react";
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Login from "./Login";
import ListUsers from "./ListUsers";
import Register from "./Register";
import Camera from "./Camera";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Drawer1() {
    return (
        <Drawer.Navigator useLegacyImplementation initialRouteName="ListUsers" >
            <Drawer.Screen name="ListUsers1" component={ListUsers} />
            <Drawer.Screen name="Camera" component={Camera} />
        </Drawer.Navigator>
    )
}

function Main() {

    return (
        <NavigationContainer>
   
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="ListUsers" component={Drawer1} options={{ headerShown: false }}  />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          </Stack.Navigator>
   
   
       </NavigationContainer>

     );

}

export default Main;