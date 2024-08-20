import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../constants/colors";
import ServicesListItem from "./ServicesListItem";

const Services = () => {
  return (
    <View>
      <View style={styles.servicesCard}>
        <View style={styles.servicesCardsTopRow}>
          <Text style={styles.servicesCardTopRowText}>Services</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 16,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <ServicesListItem />
        </View>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  servicesHeaderLabel: {
    color: Colors.greenLight,
    fontSize: 13,
    fontWeight: "bold",
  },
  servicesCard: {
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
  servicesCardsTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  servicesCardTopRowText: {
    color: Colors.blackAlt,
    fontSize: 20,
    fontFamily: "Mulish-700",
  },
});
