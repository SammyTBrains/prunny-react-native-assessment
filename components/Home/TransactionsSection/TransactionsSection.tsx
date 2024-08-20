import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { Colors } from "../../../constants/colors";
import TransctionListItem from "./TransactionListItem";

//Recent Transactions History Section of home page
const TransactionsSection = () => {
  return (
    <View>
      <View style={styles.transactionsCard}>
        <View style={styles.transactionsCardsTopRow}>
          <Text style={styles.transactionsCardTopRowText}>
            Recent Transactions
          </Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <TransctionListItem
          name="Grace Ameh"
          transactionDetails="15 Oct 2022, 10:00PM"
          transactionAmount="+N20,983"
          updatedBalance="NGN156,203.94"
        />
        <TransctionListItem
          name="Mike Oshadami"
          transactionDetails="08 Aug 2020, 11:00AM"
          transactionAmount="-N20,983"
          updatedBalance="NGN156,203.94"
        />
        <TransctionListItem
          name="Kane Ritchie"
          transactionDetails="20 Sept 2018, 10:00PM"
          transactionAmount="-N20,000"
          updatedBalance="NGN156,203.94"
        />
      </View>
    </View>
  );
};

export default TransactionsSection;

const styles = StyleSheet.create({
  transactionsHeaderLabel: {
    color: Colors.greenLight,
    fontSize: 13,
    fontWeight: "bold",
  },
  transactionsCard: {
    padding: 24,
    marginTop: 16,
  },
  viewAllButton: {
    width: 75,
    height: 30,
    backgroundColor: "rgba(32, 130, 32, 0.1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  viewAllText: {
    fontFamily: "Mulish-400",
    fontSize: 12,
    color: Colors.greenPrimary,
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
