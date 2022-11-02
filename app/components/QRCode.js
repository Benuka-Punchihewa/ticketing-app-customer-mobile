import { StyleSheet, View } from "react-native";
import React from "react";

//importing the dependency
import ReactNativeQRCode from "react-native-qrcode-svg";

/**
 * 
 * @param {*} {value -> value to be converted to a QR} 
 * 
 * QR Code common component
 */
const QRCode = ({ value }) => {
  return (
    <View style={styles.qrCode}>
      <ReactNativeQRCode value={value} size={300} />
    </View>
  );
};

export default QRCode;

// styles
const styles = StyleSheet.create({
  qrCode: {
    justifyContent: "center",
    alignItems: "center",
  },
});
