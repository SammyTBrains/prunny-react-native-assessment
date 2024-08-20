import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../constants/colors";
import ServicesListItem from "./ServicesListItem";
import {
  AirtimeSvg,
  ArrowServicesSvg,
  CableTvSvg,
  ElectricitySvg,
  InvestSvg,
  LoanSvg,
  PayBillsSvg,
  RemitaSvg,
} from "../../svgs";

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
        <View style={styles.servicesItems}>
          <ServicesListItem
            bgColor="#D6FAD1"
            svg={<ArrowServicesSvg />}
            serviceText="Send Money"
          />
          <ServicesListItem
            bgColor="#F9E7DB"
            svg={<RemitaSvg />}
            serviceText="Remita"
          />
          <ServicesListItem
            bgColor="#EFC7B6"
            svg={<PayBillsSvg />}
            serviceText="Pay Bills"
          />
          <ServicesListItem
            bgColor="#DDEDF4"
            svg={<AirtimeSvg />}
            serviceText="Airtime"
          />
          <ServicesListItem
            bgColor="#FFF2C9"
            svg={<LoanSvg />}
            serviceText="Loans"
          />
          <ServicesListItem
            bgColor="#EBEBEB"
            svg={<CableTvSvg />}
            serviceText="Cable TV"
          />
          <ServicesListItem
            bgColor="#DDEDF4"
            svg={<InvestSvg />}
            serviceText="Invest"
          />
          <ServicesListItem
            bgColor="#BFE9D5"
            svg={<ElectricitySvg />}
            serviceText="Electricity"
          />
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
  servicesItems: {
    marginTop: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
});
