import { Text, View, StyleSheet } from "react-native";

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Mulish-400" }}>Transactions Screen</Text>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
