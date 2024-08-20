import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../constants/colors";
import React from "react";

//types of accepted varrying props- background color,
//icon in svg and type of service text
type props = {
  bgColor: string;
  svg: React.ReactNode;
  serviceText: string;
};

//Each service items on the service section of the home page
const ServicesListItem = (props: props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.serviceBG, { backgroundColor: props.bgColor }]}>
        {props.svg}
      </View>
      <Text style={styles.serviceText}>{props.serviceText}</Text>
    </TouchableOpacity>
  );
};

export default ServicesListItem;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: 69,
    height: 84,
  },
  serviceBG: {
    width: 63,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#D6FAD1",
    alignItems: "center",
    justifyContent: "center",
  },
  serviceText: {
    fontFamily: "Mulish-400",
    color: Colors.blackAlt,
    fontSize: 12,
    textAlign: "center",
  },
});
