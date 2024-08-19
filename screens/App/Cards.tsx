import { Text, View, StyleSheet } from "react-native";

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text>Cards Screen</Text>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
