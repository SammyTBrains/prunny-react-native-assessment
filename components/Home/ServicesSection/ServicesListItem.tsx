import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../constants/colors";
import React from "react";

type props = {
  bgColor: string;
  svg: React.ReactNode;
  serviceText: string;
};

const ServicesListItem = (props: props) => {
  return (
    <View
      style={{
        gap: 8,
      }}
    >
      <View style={[styles.serviceBG, { backgroundColor: props.bgColor }]}>
        {props.svg}
      </View>
      <Text style={styles.serviceText}>{props.serviceText}</Text>
    </View>
  );
};

export default ServicesListItem;

const styles = StyleSheet.create({
  serviceBG: {
    width: 63,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#D6FAD1",
  },
  serviceText: {
    fontFamily: "Mulish-400",
    color: Colors.blackAlt,
    fontSize: 12,
  },
});
