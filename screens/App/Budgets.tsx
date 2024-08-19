import { Text, View, StyleSheet } from "react-native";

const Budgets = () => {
  return (
    <View style={styles.container}>
      <Text>Budgets Screen</Text>
    </View>
  );
};

export default Budgets;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
