import AuthProvider from "@/app/context/auth";
import Layout from "@/app/layout/root-layout";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./app/theme";
import { useEffect, useMemo } from "react";
import * as Font from "expo-font";
import * as Network from "expo-network";
import { LogBox, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    DestinyMJ: require("@/assets/fonts/DestinyMJ.ttf"),
    LiAdoreExtraLight: require("@/assets/fonts/li-adore/extralight.ttf"),
    LiAdoreLight: require("@/assets/fonts/li-adore/light.ttf"),
    LiAdoreLightItalic: require("@/assets/fonts/li-adore/light-italic.ttf"),
    LiAdoreRegular: require("@/assets/fonts/li-adore/regular.ttf"),
    LiAdoreSemiBold: require("@/assets/fonts/li-adore/semibold.ttf"),
    LiAdoreSemiBoldItalic: require("@/assets/fonts/li-adore/semibold-italic.ttf"),
    LiAdoreBold: require("@/assets/fonts/li-adore/bold.ttf"),
    LiAdoreBoldItalic: require("@/assets/fonts/li-adore/bold-italic.ttf"),
    LiZahir: require("@/assets/fonts/zahir.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    prepare();
    return () => {
      prepare();
    };
  }, [fontsLoaded, LogBox]);

  const isConnected = useMemo(async () => {
    return (await Network.getNetworkStateAsync()).isConnected;
  }, []);

  if (!isConnected) {
    return (
      <View>
        <Text>Network is not connected</Text>
      </View>
    );
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <SafeAreaProvider>
          <Layout />
        </SafeAreaProvider>
      </AuthProvider>
    </NativeBaseProvider>
  );
}
