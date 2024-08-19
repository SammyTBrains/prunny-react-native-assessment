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
import Transactions from "./screens/App/Transactions";
import Cards from "./screens/App/Cards";
import More from "./screens/App/More";
import {
  CreditCardActive,
  CreditCardInActive,
  HomeActive,
  HomeInActive,
  MoreActive,
  MoreInActive,
  TransactionsActive,
  TransactionsInActive,
} from "./components/svgs";

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
    "Mulish-med": require("./assets/fonts/Mulish-Medium.ttf"),
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
          backgroundColor: "white",
        },
        tabBarActiveTintColor: Colors.greenPrimary,
        tabBarInactiveTintColor: Colors.greyAlt30,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HomeActive /> : <HomeInActive />,
        }}
      />
      <BottomTabs.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <TransactionsActive /> : <TransactionsInActive />,
        }}
      />
      <BottomTabs.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <CreditCardActive /> : <CreditCardInActive />,
        }}
      />
      <BottomTabs.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <MoreActive /> : <MoreInActive />,
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
