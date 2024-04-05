import { StyleSheet, Text, View } from "react-native";
import { UserDataType } from "../../type-utilities/type";
import { Colors } from "../../constants/colors";

type Props = {
  data: UserDataType;
  status: string;
};

function getInitials(fullName: string) {
  const names = fullName.split(" ");

  const firstName = names[0];
  const lastName = names.length > 1 ? names[names.length - 1] : "";

  const firstInitial = firstName ? firstName[0] : "";
  const lastInitial = lastName ? lastName[0] : "";

  return `${firstInitial}${lastInitial}`.toUpperCase();
}

const UserComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userDetailsContainer}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{getInitials(props.data.name)}</Text>
        </View>
        <View>
          <Text style={styles.topText}>{props.data.name}</Text>
          <Text style={styles.secondText}>{props.data.email}</Text>
        </View>
      </View>
      <View
        style={[
          styles.statusContainer,
          {
            backgroundColor: props.status === "Active" ? Colors.greenLight : "",
          },
        ]}
      >
        <Text
          style={[
            styles.status,
            { color: props.status === "Active" ? Colors.appGreen : "" },
          ]}
        >
          {props.status}
        </Text>
      </View>
    </View>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  status: {
    fontSize: 10.58,
    fontFamily: "Satoshi-400",
    lineHeight: 18,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    height: 84,
    backgroundColor: Colors.greyLight,
    marginBottom: 1,
  },
  userDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  initialsContainer: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 13,
  },
  initials: { fontSize: 16, fontFamily: "Satoshi-500" },
  topText: {
    fontSize: 13,
    fontFamily: "Satoshi-500",
    marginBottom: 3,
  },
  secondText: {
    fontSize: 11,
    color: Colors.greyDark,
    fontFamily: "Satoshi-400",
  },
  statusContainer: {
    borderRadius: 17,
    borderWidth: 2,
    borderColor: "white",
    paddingHorizontal: 8,
  },
});
