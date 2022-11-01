import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const TimeTable = () => {
  return (
    <View style={styles.timeTable_container}>
      <Text style={styles.timeTable_topic}>Find Travel</Text>

      <ScrollView>
        <View style={styles.timeTable_search_container}>
          <Text style={styles.timeTable_search_label}>From</Text>
          <TextInput style={styles.timeTable_search_inputs}></TextInput>

          <Text style={styles.timeTable_search_label}>To</Text>
          <TextInput style={styles.timeTable_search_inputs}></TextInput>

          <TouchableOpacity style={styles.timeTable_search_button}>
            <Text style={styles.timeTable_search_button_text}>Search</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.timeTable_search_results_container}>
          <Text style={styles.timeTable_search_results_topic}>
            Search Results
          </Text>

          <View style={styles.timeTable_search_results_data_container}>
            <Text style={styles.timeTable_search_results_data_topic}>
              Kaduwela - Kollupitiya
            </Text>

            <Text style={styles.timeTable_search_results_data_route}>200</Text>

            <Text style={styles.timeTable_search_results_data_time}>
              9:12 a.m.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TimeTable;

const styles = StyleSheet.create({
  timeTable_container: {
    flex: 1,
  },

  timeTable_topic: {
    marginTop: 80,
    marginLeft: 35,
    color: "#003459",
    fontSize: 25,
  },

  timeTable_search_container: {
    margin: 30,
  },

  timeTable_search_label: {
    marginTop: 20,
    fontSize: 20,
    marginBottom: 20,
    marginLeft: 5,
  },

  timeTable_search_inputs: {
    backgroundColor: "#cdeefa",
    padding: 15,
    borderRadius: 10,
  },

  timeTable_search_button: {
    backgroundColor: "#1b7ea6",
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  timeTable_search_button_text: {
    color: "#fff",
    fontSize: 16,
  },

  timeTable_search_results_container: {
    marginTop: 30,
  },

  timeTable_search_results_topic: {
    marginLeft: 35,
    fontSize: 20,
    color: "#1b7ea6",
  },

  timeTable_search_results_data_container: {
    margin: 25,
    backgroundColor: "#2196f31a",
    borderRadius: 10,
    padding: 20,
  },

  timeTable_search_results_data_topic: {
    fontSize: 18,
    marginLeft: 10,
  },

  timeTable_search_results_data_route: {
    marginLeft: 10,
    marginTop: 20,
  },

  timeTable_search_results_data_time: {
    position: "absolute",
    top: 60,
    right: 0,
    marginRight: 10,
  },
});
