import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";

import * as Clipboard from "expo-clipboard";
import { CopySvg, TestSlideSvg, UserInfoSummaryDesign } from "../svgs";
import { useState } from "react";
import { Colors } from "../../constants/colors";

//User Account details summary card/section
//Includes, account balance, account number
//and ability to copy it to clipboard
//and ability to hide balance
const UserInfoSummary = () => {
  const accountNumber = "2040011238"; //test account number

  const [hideBalance, setHideBalance] = useState(false);

  //Function that toggle balance visibility
  const toggleSwitch = () => setHideBalance((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <UserInfoSummaryDesign />
      <View style={styles.info}>
        <View style={{ gap: 8 }}>
          <Text style={styles.infoText}>Savings Account Balance</Text>
          <Text style={styles.priceText}>
            {hideBalance ? "..." : "NGN102,238.71"}
          </Text>
        </View>
        <View style={{ gap: 8 }}>
          <Text style={styles.infoText}>Adewole Temitope</Text>
          <View style={styles.interactableSection}>
            <View style={styles.accountNumberSection}>
              <Text style={styles.infoText}>{accountNumber}</Text>
              <TouchableOpacity
                onPress={
                  //Function that copies to clipboard
                  async () => {
                    await Clipboard.setStringAsync(accountNumber);
                    Alert.alert("Account Number Copied!");
                  }
                }
              >
                <CopySvg />
              </TouchableOpacity>
            </View>
            <View style={styles.hideBalanceSection}>
              <Text style={styles.infoText}>Hide Balance</Text>
              <Switch
                trackColor={{ false: "#767577", true: Colors.greenLight }}
                thumbColor={hideBalance ? Colors.greenAlt : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={hideBalance}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.testSlideSvgContainer}>
        <TestSlideSvg />
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
    padding: 30,
    gap: 32,
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
  interactableSection: {
    flexDirection: "row",
    gap: 60,
  },
  accountNumberSection: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  hideBalanceSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  testSlideSvgContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
