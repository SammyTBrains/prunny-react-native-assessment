import { Text, View, StyleSheet } from "react-native";

const Insights = () => {
  return (
    <View style={styles.container}>
      <Text>Insights Screen</Text>
    </View>
  );
};

export default Insights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
