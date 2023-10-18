import AuthProvider from "@/app/context/auth";
import Layout from "@/app/layout/root-layout";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "./app/theme";
import { useEffect, useMemo, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import * as Network from "expo-network";
import { Text, View } from "react-native";
import SplashScreen from "./app/components/splashcreen";
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

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

  if (!appIsReady) {
    return <SplashScreen setAppIsReady={setAppIsReady} />;
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
