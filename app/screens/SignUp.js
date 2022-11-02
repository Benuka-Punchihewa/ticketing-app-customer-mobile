import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.signUp_container}>
      <Text style={styles.signUp_topic}>Sign Up</Text>

      <Text style={styles.signUp_lables}>Nationl ID</Text>
      <TextInput style={styles.signUp_inputs}></TextInput>

      <Text style={styles.signUp_lables}>Full Name</Text>
      <TextInput style={styles.signUp_inputs}></TextInput>

      <Text style={styles.signUp_lables}>Password</Text>
      <TextInput
        style={styles.signUp_inputs}
        secureTextEntry={true}
      ></TextInput>

      <Text style={styles.signUp_lables}>Confirm Password</Text>
      <TextInput
        style={styles.signUp_inputs}
        secureTextEntry={true}
      ></TextInput>

      <TouchableOpacity style={styles.signUp_button}>
        <Text style={styles.signUp_button_text}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.signUp_oldAccout_text}>
        {" "}
        Already have an accout?
        <Text
          style={styles.signUp_oldAccout_button}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signUp_container: {
    flex: 1,
    justifyContent: "center",
  },

  signUp_topic: {
    fontSize: 40,
    color: "#003459",
    textAlign: "center",
    marginBottom: 40,
  },

  signUp_lables: {
    marginTop: 20,
    fontSize: 20,
    marginLeft: 35,
    marginBottom: 10,
  },

  signUp_inputs: {
    backgroundColor: "#cdeefa",
    marginLeft: 30,
    marginRight: 30,
    padding: 15,
    borderRadius: 10,
  },

  signUp_button: {
    backgroundColor: "#1b7ea6",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  signUp_button_text: {
    color: "#fff",
    fontSize: 16,
  },

  signUp_oldAccout_text: {
    marginTop: 20,
    textAlign: "center",
  },

  signUp_oldAccout_button: {
    color: "#00A8E8",
    marginLeft: 10,
  },
});
