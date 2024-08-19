import { Text, StyleSheet, View } from "react-native";
import { ArrowTransactionsSvg } from "../../svgs";
import { Colors } from "../../../constants/colors";

type props = {
  name: string;
  bankDetails: string;
  transactionAmount: string;
  balance: string;
};

const TransactionListItem = (props: props) => {
  const textColor = props.transactionAmount.startsWith("+")
    ? Colors.greenPrimary
    : "red";

  return (
    <View style={styles.container}>
      <View style={styles.transactionListItemLeft}>
        <ArrowTransactionsSvg />
        <View style={{ gap: 8 }}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.smallText}>{props.bankDetails}</Text>
        </View>
      </View>
      <View style={{ gap: 8 }}>
        <Text style={[styles.amount, { color: textColor }]}>
          {props.transactionAmount}
        </Text>
        <Text style={styles.smallText}>{props.balance}</Text>
      </View>
    </View>
  );
};

export default TransactionListItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "rgba(183, 183, 183,0.3)",
    paddingBottom: 16,
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
  smallText: {
    color: Colors.greyAlt,
    fontSize: 10,
    fontFamily: "Mulish-400",
  },
  amount: {
    fontSize: 14,
    fontWeight: 600,
  },
});
