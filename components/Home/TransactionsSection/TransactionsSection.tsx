import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { Colors } from "../../../constants/colors";
import TransctionListItem from "./TransactionListItem";

const TransactionsSection = () => {
  return (
    <View style={styles.transactionsSection}>
      <View style={styles.transactionsCard}>
        <View style={styles.transactionsCardsTopRow}>
          <Text style={styles.transactionsCardTopRowText}>
            Recent Transactions
          </Text>
          <TouchableOpacity
            style={{
              width: 75,
              height: 30,
              backgroundColor: "rgba(32, 130, 32, 0.1)",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Mulish-400",
                fontSize: 12,
                color: Colors.greenPrimary,
              }}
            >
              View all
            </Text>
          </TouchableOpacity>
        </View>
        <TransctionListItem
          name="Grace Ameh"
          bankDetails="15 Oct 2022, 10:00PM"
          amount="+N20,983"
        />
        <TransctionListItem
          name="Habib Yogurt"
          bankDetails="15 Oct 2022, 10:00PM"
          amount="-N20,983"
        />
        <TransctionListItem
          name="Kane Ritchie"
          bankDetails="15 Oct 2022, 10:00PM"
          amount="-N20,000"
        />
      </View>
    </View>
  );
};

export default TransactionsSection;

const styles = StyleSheet.create({
  transactionsSection: {
    marginTop: 32,
  },
  transactionsHeaderLabel: {
    color: Colors.greenLight,
    fontSize: 13,
    fontWeight: "bold",
  },
  transactionsCard: {
    padding: 24,
    marginTop: 16,
  },
  transactionsCardsTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionsCardTopRowText: {
    color: Colors.blackAlt,
    fontSize: 20,
    fontFamily: "Mulish-700",
  },
});
