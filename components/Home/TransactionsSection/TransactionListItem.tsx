import { Text, StyleSheet, View } from "react-native";
import { ArrowTransactionsSvg } from "../../svgs";
import { Colors } from "../../../constants/colors";

type props = {
  name: string;
  bankDetails: string;
  amount: string;
};

const TransactionListItem = (props: props) => {
  const textColor = props.amount.startsWith("+") ? "#05EF40" : "white";

  return (
    <View style={styles.container}>
      <View style={styles.transactionListItemLeft}>
        <ArrowTransactionsSvg />
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.dateTime}>{props.bankDetails}</Text>
        </View>
      </View>
      <Text style={[styles.amount, { color: textColor }]}>{props.amount}</Text>
    </View>
  );
};

export default TransactionListItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionListItemLeft: {
    flexDirection: "row",
    gap: 8,
  },
  nameLabelContainer: {
    backgroundColor: "#EEF2F8",
    height: 36,
    width: 36,
    borderRadius: 36,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    color: Colors.blackAlt,
    fontSize: 14,
    fontFamily: "Mulish-400",
  },
  dateTime: {
    color: Colors.greyAlt,
    fontSize: 10,
    fontFamily: "Mulish-400",
  },
  amount: {
    fontSize: 14,
    fontWeight: 600,
  },
});
