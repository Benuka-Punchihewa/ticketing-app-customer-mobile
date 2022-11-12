import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

//importing the service
import { createCustomer } from "../service/auth.service";

/**
 *
 * sign up screen
 */
const SignUp = ({ navigation }) => {
  // usestates
  const [NIC, setNIC] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [reEnterPassword, setReEnterPassword] = useState();

  // Create an account
  const handleSubmit = async () => {
    if (!password === reEnterPassword) {
      alert("Password mismatched!");
    } else {
      const data = {
        _id: NIC,
        name: name,
        password: password,
      };

      const response = await createCustomer(data);

      if (response.success) {
        //redirect user to the sign in screen
        navigation.navigate("SignIn");
      } else {
        //display the error message
        response?.data?.message && alert(response?.data?.message);
      }
    }
  };

  return (
    <View style={styles.signUp_container}>
      <Text style={styles.signUp_topic}>Sign Up</Text>

      <Text style={styles.signUp_lables}>NIC</Text>
      <TextInput
        style={styles.signUp_inputs}
        onChangeText={(value) => setNIC(value)}
        defaultValue={NIC}
      ></TextInput>

      <Text style={styles.signUp_lables}>Full Name</Text>
      <TextInput
        style={styles.signUp_inputs}
        onChangeText={(value) => setName(value)}
        defaultValue={name}
      ></TextInput>

      <Text style={styles.signUp_lables}>Password</Text>
      <TextInput
        style={styles.signUp_inputs}
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        defaultValue={password}
      ></TextInput>

      <Text style={styles.signUp_lables}>Confirm Password</Text>
      <TextInput
        style={styles.signUp_inputs}
        secureTextEntry={true}
        onChangeText={(value) => setReEnterPassword(value)}
        defaultValue={reEnterPassword}
      ></TextInput>

      <TouchableOpacity style={styles.signUp_button} onPress={handleSubmit}>
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

// styles
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
