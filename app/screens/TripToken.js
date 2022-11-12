import { StyleSheet, Text, View } from "react-native";
import React from "react";

//importing components
import QRCode from "../components/QRCode";

/**
 *
 * Trip Token Screen
 */
const TripToken = ({ route }) => {
  const { token } = route.params;

  return (
    <View style={styles.home_container}>
      <Text style={styles.home_topic}>
        Please Show This Token to the Ticket Inspector If Requested.
      </Text>

      <View style={styles.home_Qrcode_container}>
        <QRCode value={token} />
      </View>
    </View>
  );
};

export default TripToken;

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
