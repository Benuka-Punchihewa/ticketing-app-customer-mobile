import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View style={styles.loader_container}>
      <ActivityIndicator size="large" color="#003459" />
      <Text>Loading</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
