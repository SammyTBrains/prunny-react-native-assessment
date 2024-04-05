import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";
import UserComponent from "../components/app/UserComponent";
import { UserDataType } from "../type-utilities/type";
import { Colors } from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const UsersScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let status = false;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getData();
  }, []);

  const renderUserData = (itemData: { item: UserDataType }) => {
    status = !status;
    return (
      <UserComponent
        data={itemData.item}
        status={status === false ? "Pending" : "Active"}
      />
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator size='large' color={Colors.greyDark} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.headerText}>Users</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        contentContainerStyle={{
          overflow: "hidden",
          borderRadius: 16,
          flexGrow: 1,
          paddingBottom: 20,
        }}
        keyExtractor={(item: UserDataType) => item.id}
        renderItem={renderUserData}
      />
    </SafeAreaView>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    marginTop: 20,
    lineHeight: 32,
    fontFamily: "Satoshi-700",
  },
  screen: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 30,
  },
  loadingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
