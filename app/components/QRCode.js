import { StyleSheet, View } from "react-native";
import React from "react";

//importing the dependency
import ReactNativeQRCode from "react-native-qrcode-svg";

const QRCode = ({ value }) => {
  return (
    <View style={styles.qrCode}>
      <ReactNativeQRCode value={value} size={300} />
    </View>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  qrCode: {
    justifyContent: "center",
    alignItems: "center",
  },
});
