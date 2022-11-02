import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//importing screens
import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import PreviousRides from "./app/screens/PreviousRides";
import TimeTable from "./app/screens/TimeTable";
import Home from "./app/screens/Home";
import Credit from "./app/screens/Credit";

const App = () => {
  const Stack = createNativeStackNavigator();

  const Drawer = createDrawerNavigator();

  const [user, setUser] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setUser(false);
    } else {
      setUser(true);
    }
  }, []);

  return (
    <>
      <NavigationContainer>
        {!user ? (
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
            <Drawer.Screen name="Credit" component={Credit} />
            <Drawer.Screen name="My Trips" component={PreviousRides} />
            <Drawer.Screen name="Timetables" component={TimeTable} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
