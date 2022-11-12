import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { useSelector } from "react-redux";

//importing screens
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import PreviousRides from "./app/screens/PreviousRides";
import TimeTable from "./app/screens/TimeTable";
import Home from "./app/screens/Home";
import Credit from "./app/screens/Credit";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const authState = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {authState.isLoggedIn ? (
          <>
            <Stack.Screen name="HomeStack" component={HomeStack} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Credit" component={Credit} />
      <Drawer.Screen name="My Trips" component={PreviousRides} />
      <Drawer.Screen name="Timetables" component={TimeTable} />
    </Drawer.Navigator>
  );
};

export default StackNavigator;
