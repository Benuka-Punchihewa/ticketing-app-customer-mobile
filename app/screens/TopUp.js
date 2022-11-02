import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const TopUp = () => {
  return (
    <View style={styles.topUp_container}>
      <View style={styles.topUp_img_container}>
        <Image
          source={require("../assets/profile_pic.png")}
          style={styles.topUp_avatar_img}
          resizeMode={"cover"}
        />

        <Text style={styles.topUp_userName}>Benuka Punchihewa</Text>
      </View>

      <View style={styles.topUp_blance_container}>
        <Text style={{ fontSize: 18 }}>Yore current balance</Text>
        <Text style={styles.topUp_blance}>Rs 120000</Text>
      </View>

      <View style={styles.topUp_topUpAcoount_container}>
        <Text style={styles.topUp_topUpAcoount_topic}>Top up Your Accout</Text>

        <Text style={styles.topUp_topUpAcoount_amount}>Rs.</Text>

        <TextInput
          style={styles.topUp_topUpAcoount_input}
          placeholder="Enter the amount"
          keyboardType="numeric"
        ></TextInput>

        <TouchableOpacity style={styles.topUp_topUpAcoount_button}>
          <Text style={styles.topUp_topUpAcoount_text}>Top Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  topUp_container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  topUp_img_container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  topUp_avatar_img: {
    width: 200,
    height: 200,
  },

  topUp_userName: {
    fontSize: 20,
  },

  topUp_blance_container: {
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },

  topUp_blance: {
    position: "absolute",
    right: 0,
    fontSize: 18,
  },

  topUp_topUpAcoount_container: {
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
  },

  topUp_topUpAcoount_topic: {
    color: "#003459",
    fontSize: 25,
  },

  topUp_topUpAcoount_amount: {
    marginTop: 30,
    fontSize: 20,
  },

  topUp_topUpAcoount_input: {
    borderBottomColor: "#003459",
    borderBottomWidth: 1,
    fontSize: 20,
    position: "absolute",
    top: 60,
    right: 0,
    width: "80%",
  },

  topUp_topUpAcoount_button: {
    marginTop: 25,
    marginLeft: "auto",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1b7ea6",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },

  topUp_topUpAcoount_text: {
    color: "#fff",
    fontSize: 16,
  },
});
