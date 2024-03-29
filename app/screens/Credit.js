import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

//importing service
import { getUserProfile } from "../service/auth.service";

//importing loader
import Loader from "../components/Loader";
import { useSelector } from "react-redux";

/**
 *
 * Credit Screen
 */
const Credit = () => {
  // access auth state
  const authState = useSelector((state) => state.auth);

  // usestates
  const [credits, setCredits] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) setLoading(true);

    // get user profile
    const fetchData = async () => {
      const response = await getUserProfile();
      
      if (response.success) {
        if (!unmounted) {
          setCredits(response.data.credits);
        }
      }

      if (!unmounted) setLoading(false);
    };

    fetchData();

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.topUp_container}>
          <View style={styles.topUp_img_container}>
            <Image
              source={require("../assets/profile_pic.png")}
              style={styles.topUp_avatar_img}
              resizeMode={"cover"}
            />

            <Text style={styles.topUp_userName}>{authState.userName}</Text>
          </View>

          <View style={styles.topUp_blance_container}>
            <Text style={{ fontSize: 18 }}>Yor current balance</Text>
            <Text style={styles.topUp_blance}>Rs {credits}</Text>
          </View>

          <View style={styles.topUp_topUpAcoount_container}>
            <Text style={styles.topUp_topUpAcoount_topic}>
              Top Up Your Accout
            </Text>

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
      )}
    </>
  );
};

export default Credit;

// styles
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
