import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./screens/AuthScreen";
import UsersScreen from "./screens/UsersScreen";

const Stack = createNativeStackNavigator();

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Satoshi-700": require("./assets/fonts/Satoshi-Bold.otf"),
    "Satoshi-400": require("./assets/fonts/Satoshi-Regular.otf"),
    "Satoshi-600": require("./assets/fonts/Satoshi-Black.otf"),
    "Satoshi-500": require("./assets/fonts/Satoshi-Medium.otf"),
    "Mulish-700": require("./assets/fonts/Mulish-Bold.ttf"),
    "Mulish-500": require("./assets/fonts/Mulish-SemiBold.ttf"),
    "Mulish-400": require("./assets/fonts/Mulish-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                contentStyle: { backgroundColor: "#FFFFFF" },
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="LoginScreen"
                component={AuthScreen}
                options={{
                  title: "Authentication",
                }}
              />
              <Stack.Screen name="UsersScreen" component={UsersScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </>
  );
}
