import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const PreviousRides = () => {
  return (
    <View style={styles.previousRides_container}>
      <Text style={styles.previousRides_topic}>Previous Rides</Text>

      <ScrollView
        style={styles.previousRides_data_container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.previousRides_data}>
          <Text style={styles.previousRides_data_text_1}>
            Malabe To Colombo
          </Text>
          <Text style={styles.previousRides_data_text}>
            Ticket Price Rs.120.00
          </Text>
          <Text style={styles.previousRides_data_text}>
            Route &nbsp;&nbsp; 177
          </Text>

          <TouchableOpacity style={styles.previousRides_data_button}>
            <Text style={styles.previousRides_data_button_text}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.previousRides_data}>
          <Text style={styles.previousRides_data_text_1}>
            Malabe To Colombo
          </Text>
          <Text style={styles.previousRides_data_text}>
            Ticket Price Rs.120.00
          </Text>
          <Text style={styles.previousRides_data_text}>
            Route &nbsp;&nbsp; 177
          </Text>

          <TouchableOpacity style={styles.previousRides_data_button}>
            <Text style={styles.previousRides_data_button_text}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.previousRides_data}>
          <Text style={styles.previousRides_data_text_1}>
            Malabe To Colombo
          </Text>
          <Text style={styles.previousRides_data_text}>
            Ticket Price Rs.120.00
          </Text>
          <Text style={styles.previousRides_data_text}>
            Route &nbsp;&nbsp; 177
          </Text>

          <TouchableOpacity style={styles.previousRides_data_button}>
            <Text style={styles.previousRides_data_button_text}>View</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PreviousRides;

const styles = StyleSheet.create({
  previousRides_container: {
    flex: 1,
  },

  previousRides_topic: {
    marginTop: 80,
    marginLeft: 30,
    color: "#003459",
    fontSize: 25,
  },

  previousRides_data_container: {
    marginTop: 30,
  },

  previousRides_data: {
    margin: 20,
    borderRadius: 10,
    backgroundColor: "#2196f31a",
    padding: 20,
  },

  previousRides_data_text_1: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },

  previousRides_data_text: {
    fontSize: 16,
    marginTop: 20,
  },

  previousRides_data_button: {
    position: "absolute",
    top: 100,
    right: 0,
    marginRight: 20,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#1b7ea6",
    padding: 10,
  },

  previousRides_data_button_text: {
    color: "#fff",
    fontSize: 16,
  },
});
