import { Text, View } from "react-native";
import { Colors } from "../../../constants/colors";

const ServicesListItem = () => {
  return (
    <View
      style={{
        gap: 8,
      }}
    >
      <View
        style={{
          width: 63,
          height: 60,
          borderRadius: 15,
          backgroundColor: "#D6FAD1",
        }}
      ></View>
      <Text
        style={{
          fontFamily: "Mulish-400",
          color: Colors.blackAlt,
          fontSize: 12,
        }}
      >
        Send Money
      </Text>
    </View>
  );
};

export default ServicesListItem;
