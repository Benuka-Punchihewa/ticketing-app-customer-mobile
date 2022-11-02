import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

//importing service
import { trips } from "../service/myTrip.service";

const PreviousRides = () => {
  const [tripData, setTripData] = useState([]);

  useEffect(() => {
    let unmounted = false;

    const fetchData = async () => {
      const response = await trips();

      if (response.success) {
        if (!unmounted) {
          setTripData(response.data);
        }
      }
    };

    fetchData();

    return () => {
      unmounted = true;
    };
  }, []);

  console.log(tripData);

  return (
    <View style={styles.previousRides_container}>
      <ScrollView
        style={styles.previousRides_data_container}
        showsVerticalScrollIndicator={false}
      >
        {tripData.map((data, index) => {
          return (
            <View style={styles.previousRides_data} key={index}>
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
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PreviousRides;

const styles = StyleSheet.create({
  previousRides_container: {
    flex: 1,
    backgroundColor: "#fff",
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
