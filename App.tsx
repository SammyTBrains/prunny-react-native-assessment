import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthScreen from "./screens/Auth/AuthScreen";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";
import { RootNavParamList } from "./type-utilities/type";
import { Colors } from "./constants/colors";
import Home from "./screens/App/Home";
import { Ionicons } from "@expo/vector-icons";
import Budgets from "./screens/App/Budgets";
import Insights from "./screens/App/Insights";
import Profile from "./screens/App/Profile";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator<RootNavParamList>();

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

  const AppNavigation = () => (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.greenPrimary,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Budgets"
        component={Budgets}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "pie-chart" : "pie-chart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Insights"
        component={Insights}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "bar-chart" : "bar-chart-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );

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
                name="AuthScreen"
                component={AuthScreen}
                options={{
                  title: "Authentication",
                }}
              />
              <Stack.Screen name="App" component={AppNavigation} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaProvider>
    </>
  );
}
