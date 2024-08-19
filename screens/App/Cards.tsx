import { Text, View, StyleSheet } from "react-native";

const Cards = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Mulish-400" }}>Cards Screen</Text>
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
