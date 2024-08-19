import { Text, View, StyleSheet } from "react-native";

const More = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Mulish-400" }}>More Screen</Text>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
