import React from "react";
import { StyleSheet, View, Image,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import 'react-native-gesture-handler';
import Login from "./Login";
import ListUsers from "./ListUsers";
import Register from "./Register";
import Camera from "./Camera";
import Menu from "./Menu";
import Camera1 from "./Camera1";
import Import from "./Import";
import Thongke from "./Thongke";
import Kiemke from "./Kiemke";
import ListImport from "./ListImport";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator useLegacyImplementation initialRouteName="Menu">
      <Tab.Screen name="Camera" component={Camera} options={{ headerShown: false }} />
      <Tab.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}


function Drawer1() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Chức năng" >
      <Drawer.Screen name="ListUsers1" component={ListUsers} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/import.png")} />
      }} />
      <Drawer.Screen name="Camera" component={MyTabs} />
      <Drawer.Screen name="Chức năng" component={MyTabs} />
      <Drawer.Screen name="Nhập vật tư" component={Import} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/import.png")} />
      }} />
      <Drawer.Screen name="Xuất vật tư" component={ListImport} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/export.png")} />
      }} />
      <Drawer.Screen name="Thống kê kho" component={Camera1} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/statistics.png")} />
      }} />
      <Drawer.Screen name="Thẻ kho" component={Camera1} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/planning.png")} />
      }} />
      <Drawer.Screen name="Giao hàng" component={MyTabs} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/transfer.png")} />
      }} />
       <Drawer.Screen name="Kiểm kê" component={Kiemke} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/planning.png")} />
      }} />
       <Drawer.Screen name="In khác" component={MyTabs} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/printer_orther.png")} />
      }} />
      <Drawer.Screen name="In nhãn" component={MyTabs} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/printer.png")} />
      }} />
       <Drawer.Screen name="Tách nhãn" component={MyTabs} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/tachnhan.png")} />
      }} />
       <Drawer.Screen name="Đổi mật khẩu" component={MyTabs} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/padlock.png")} />
      }} />
      <Drawer.Screen name="Cài đặt" component={MyTabs} options={{
        drawerIcon: config => <Image style={styles.box_image} source={require("../image/settings.png")} />
      }} />
    </Drawer.Navigator>
  )
}



function Main() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Menu" component={Drawer1} options={{ headerShown: false }} />
        <Stack.Screen name="ListUsers" component={ListUsers} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}

const styles = StyleSheet.create({
  tittle: {
    fontWeight: "900"
  },
  box_image: {
    height: 40,
    width: 40,
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Main;