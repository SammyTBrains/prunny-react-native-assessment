import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import CustomButtonA from "../../components/UI/CustomButtonA";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavParamList } from "../../type-utilities/type";
import { Colors } from "../../constants/colors";
import { FloatingInput } from "../../components/UI/FloatingInput";
import { Ionicons } from "@expo/vector-icons";
import { BiometricSvg, LockSvg } from "../../components/svgs";
import OutlinedButton from "../../components/UI/OutlinedButton";
import { useState } from "react";

type FormData = {
  phoneNumber: string;
  password: string;
};

type UsersScreenScreenNavigationProp = NativeStackNavigationProp<
  RootNavParamList,
  "BankApp"
>;

type AuthScreenProps = {
  navigation: UsersScreenScreenNavigationProp;
};

//Screen Component that handles authenticating user
const AuthScreen = (props: AuthScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const [passwordVisibile, setPasswordVisible] = useState(false);

  const onSubmit = () => props.navigation.navigate("BankApp");

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageTopSectionContainer}>
          <View style={styles.cancelContainer}>
            <OutlinedButton onPress={() => {}}>Cancel</OutlinedButton>
          </View>
          <Text style={styles.topText}>Login to your account</Text>
          <Text style={styles.infoText}>
            We are glad to have you, kindly enter
          </Text>
          <Text style={styles.infoText}>your login details.</Text>
        </View>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "This is required.",
              },
              pattern: {
                value: /^\+?(\d{1,3})?[-\.\s]?\d{6,11}$/,
                message: "Invalid phone number.",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <FloatingInput
                  onBlur={onBlur}
                  onChangeText={(text) => onChange(text)}
                  value={value}
                  autoCapitalize="none"
                  keyboardType="phone-pad"
                  leftIcon={
                    <Ionicons name="call" size={18} color={Colors.greyDark} />
                  }
                  label="Phone Number"
                />
              );
            }}
            name="phoneNumber"
          />

          {errors.phoneNumber && (
            <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>
          )}

          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "This is required.",
              },
              minLength: { value: 4, message: "Password too short." },
              maxLength: { value: 12, message: "Password too long." },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingInput
                containerStyle={{ marginTop: 16 }}
                leftIcon={<LockSvg />}
                label="Your Password"
                onBlur={onBlur}
                onChangeText={(text) => onChange(text)}
                value={value}
                secureTextEntry={passwordVisibile ? false : true}
                rightElement={
                  <TouchableOpacity
                    onPress={() => {
                      setPasswordVisible((prev) => !prev);
                    }}
                  >
                    <Ionicons
                      name={passwordVisibile ? "eye" : "eye-off"}
                      size={23}
                      color={Colors.greyDark}
                    />
                  </TouchableOpacity>
                }
              />
            )}
            name="password"
          />

          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
        </View>
        <CustomButtonA onPress={handleSubmit(onSubmit)}>Login</CustomButtonA>
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.signUpText}>
              Don’t have an account? Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <BiometricSvg />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 32,
          }}
        >
          <Text style={styles.versionText}>v1.1.1</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },
  pageTopSectionContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 40,
  },
  cancelContainer: { marginBottom: 42 },
  infoText: {
    color: Colors.greyDark,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Mulish-med",
    marginBottom: 5,
  },
  topText: {
    color: Colors.greenPrimary,
    fontFamily: "Mulish-500",
    fontSize: 24,
    marginBottom: 14,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginVertical: 15,
  },
  optionsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    gap: 24,
  },
  signUpText: {
    color: Colors.greenPrimary,
    fontFamily: "Mulish-400",
    fontSize: 14,
  },
  forgotText: {
    color: Colors.greyAlt,
    fontFamily: "Mulish-400",
    fontSize: 14,
  },
  versionText: {
    color: Colors.greyAlt,
    fontFamily: "Mulish-400",
    fontSize: 14,
  },
  errorText: {
    color: "red",
  },
});
