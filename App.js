import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//importing screens
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import TopUp from "./app/screens/TopUp";
import PreviousRides from "./app/screens/PreviousRides";
import TimeTable from "./app/screens/TimeTable";
import Home from "./app/screens/Home";

const App = () => {
  const Stack = createNativeStackNavigator();

  const Drawer = createDrawerNavigator();

  const user = "new-user";

  return (
    <>
      <NavigationContainer>
        {user === "new-use" ? (
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Top Up" component={TopUp} />
            <Drawer.Screen name="My Trips" component={PreviousRides} />
            <Drawer.Screen name="Timetables" component={TimeTable} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
