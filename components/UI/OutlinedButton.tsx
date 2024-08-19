import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

type Props = {
  onPress: () => void;
  icon?: string;
  children: React.ReactNode;
};

const OutlinedButton = (props: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={props.onPress}
    >
      <Ionicons
        style={styles.icon}
        name={props.icon as any}
        size={18}
        color={Colors.greenAlt}
      />
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.greenAlt,
    borderRadius: 12,
    width: 90,
    height: 35,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.greenAlt,
    fontFamily: "Mulish-700",
  },
});
