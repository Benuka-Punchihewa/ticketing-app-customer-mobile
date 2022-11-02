import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

//importing service
import { timeTable } from "../service/timetable.service";

const TimeTable = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [searchData, setSearchData] = useState([]);

  const handleSubmit = async () => {
    const response = await timeTable(from, to);

    if (response.success) {
      setSearchData(response.data);
    } else {
      response?.data?.message && alert(response?.data?.message);
    }
  };

  console.log(searchData);

  return (
    <View style={styles.timeTable_container}>
      <ScrollView>
        <View style={styles.timeTable_search_container}>
          <Text style={styles.timeTable_search_label}>From</Text>
          <TextInput
            style={styles.timeTable_search_inputs}
            onChange={(e) => setFrom(e.target.value)}
          ></TextInput>

          <Text style={styles.timeTable_search_label}>To</Text>
          <TextInput
            style={styles.timeTable_search_inputs}
            onChange={(e) => setTo(e.target.value)}
          ></TextInput>

          <TouchableOpacity
            style={styles.timeTable_search_button}
            onPress={handleSubmit}
          >
            <Text style={styles.timeTable_search_button_text}>Search</Text>
          </TouchableOpacity>
        </View>

        {searchData ? (
          <View style={styles.timeTable_search_results_container}>
            <Text style={styles.timeTable_search_results_topic}>
              Search Results
            </Text>
            {searchData.map((data, index) => {
              return (
                <>
                  <View
                    style={styles.timeTable_search_results_data_container}
                    key={index}
                  >
                    <Text style={styles.timeTable_search_results_data_topic}>
                      {data.name}
                    </Text>

                    <Text style={styles.timeTable_search_results_data_route}>
                      {data.routeId}
                    </Text>

                    <Text style={styles.timeTable_search_results_data_time}>
                      {data.arrivalTimes}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default TimeTable;

const styles = StyleSheet.create({
  timeTable_container: {
    flex: 1,
    backgroundColor: "#fff",
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
