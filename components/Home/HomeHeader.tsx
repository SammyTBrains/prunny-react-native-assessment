import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";
import { ProfileTestSvg } from "../svgs";

//The home page header
//profile icon, name greeting,
//notification button and appearance button
const HomeHeader = () => {
  return (
    <View style={styles.homeHeader}>
      <View style={styles.homeHeaderLeft}>
        <ProfileTestSvg />
        <View style={styles.homeHeaderLeftText}>
          <Text style={styles.welcomeText}>Hi, Temitope</Text>
          <Text style={styles.greetingText}>How are you today?</Text>
        </View>
      </View>
      <View style={styles.homeHeaderRight}>
        <TouchableOpacity style={styles.iconBG}>
          <Ionicons name="moon" color="#000000" size={18} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBG}>
          <Ionicons name="notifications-outline" color="#000000" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  homeHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  homeHeaderLeft: {
    flexDirection: "row",
    gap: 4,
  },
  homeHeaderLeftText: {
    justifyContent: "space-around",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "medium",
    fontFamily: "Mulish-700",
    color: Colors.blackAlt,
  },
  greetingText: {
    fontSize: 12,
    fontFamily: "Mulish-400",
    color: Colors.blackAlt,
  },
  homeHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBG: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
