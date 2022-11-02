import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

//importing service file
import { loging } from "../service/auth.service";

const SignIn = ({ navigation }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  //creating the submit handler
  const handleSubmit = async () => {
    const data = {
      username: username,
      password: password,
    };

    const response = await loging(data);

    if (response.success) {
      //setting the data to the loaclstorage and redirect user to the home screen
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("id", response.data.user._id);
      localStorage.setItem("name", response.data.user.name);
      window.location.reload(true);
      navigation.navigate("Home");
    } else {
      //display the error message
      response?.data?.message && alert(response?.data?.message);
    }
  };

  return (
    <View style={styles.signIn_container}>
      <Text style={styles.signIn_topic}>Sign In</Text>

      <Text style={styles.signIn_lables}>Username</Text>
      <TextInput
        style={styles.signIn_inputs}
        onChange={(e) => setUserName(e.target.value)}
      ></TextInput>

      <Text style={styles.signIn_lables}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.signIn_inputs}
        onChange={(e) => setPassword(e.target.value)}
      ></TextInput>

      <TouchableOpacity style={styles.signIn_button} onPress={handleSubmit}>
        <Text style={styles.signIn_button_text}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signIn_newAccout_button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signIn_newAccout_text}>Create new accout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signIn_container: {
    flex: 1,
    justifyContent: "center",
  },

  signIn_topic: {
    fontSize: 50,
    color: "#003459",
    textAlign: "center",
  },

  signIn_lables: {
    marginTop: 50,
    fontSize: 20,
    marginLeft: 35,
    marginBottom: 10,
  },

  signIn_inputs: {
    backgroundColor: "#cdeefa",
    marginLeft: 30,
    marginRight: 30,
    padding: 15,
    borderRadius: 10,
  },

  signIn_button: {
    backgroundColor: "#1b7ea6",
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  signIn_button_text: { color: "#fff", fontSize: 16 },

  signIn_newAccout_button: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },

  signIn_newAccout_text: {
    color: "#00A8E8",
  },
});
