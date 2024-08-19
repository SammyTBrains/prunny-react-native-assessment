import { Text, StyleSheet, View } from "react-native";

import { Colors } from "../../constants/colors";
import { UserInfoSummaryDesign } from "../svgs";

const UserInfoSummary = () => {
  return (
    <View style={styles.container}>
      <UserInfoSummaryDesign />
      <View style={styles.info}>
        <View style={{ gap: 8 }}>
          <Text style={styles.infoText}>Savings Account Balance</Text>
          <Text style={styles.priceText}>NGN102,238.71</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfoSummary;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  info: {
    position: "absolute",
    padding: 32,
    borderWidth: 1,
  },
  infoText: {
    fontFamily: "Mulish-400",
    fontSize: 12,
    color: "white",
  },
  priceText: {
    fontFamily: "Mulish-700",
    fontSize: 24,
    color: "white",
  },
});
