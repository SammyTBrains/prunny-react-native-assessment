import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeHeader from "../../components/Home/HomeHeader";
import UserInfoSummary from "../../components/Home/UserInfoSummary";
import TransactionsSection from "../../components/Home/TransactionsSection/TransactionsSection";
import Services from "../../components/Home/Services";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <UserInfoSummary />
        <Services />
        <TransactionsSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
