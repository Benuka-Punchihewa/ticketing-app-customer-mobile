import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//importing components
import QRCode from "../components/QRCode";
import constants from "../../constants";

/**
 *
 * Home Screen
 */
const Home = () => {
  const [userId, setUserId] = useState();

  useEffect(() => {
    let unmounted = false;

    const getUserId = async () => {
      // get user id from async storage
      const value = await AsyncStorage.getItem(constants.ASYNC_STORAGE_KEYS.ID);
      
      if (!unmounted) {
        setUserId(value);
      }
    };

    getUserId();

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <View style={styles.home_container}>
      <Text style={styles.home_topic}>
        Please Show this QR Code to the Bus Driver
      </Text>

      <View style={styles.home_Qrcode_container}>
        <QRCode value={userId} />
      </View>
    </View>
  );
};

export default Home;

// styles
const styles = StyleSheet.create({
  home_container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  home_topic: {
    marginTop: 80,
    marginLeft: 30,
    marginRight: 30,
    color: "#003459",
    fontSize: 25,
  },

  home_Qrcode_container: {
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
  },
});
