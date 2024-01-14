import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home, Payment, Deposit } from "../screens";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../theme";
import { StyleSheet, TouchableOpacity, Keyboard } from "react-native";
import { HStack, Heading, Text } from "native-base";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import React, { useEffect, useState } from "react";
import { Header, TabHeader } from "@/app/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";

const Tabs = createBottomTabNavigator();

interface ITabArr {
  name: string;
  component: ({ navigation }: any) => React.JSX.Element;
  icon: (typeof Ionicons)[keyof typeof Ionicons];
  title: string;
}

const tabArr: ITabArr[] = [
  {
    name: "deposit",
    component: Deposit,
    icon: "credit-card-plus-outline",
    title: "টাকা অ্যাড",
  },
  {
    name: "home",
    component: Home,
    icon: "home",
    title: "হোম",
  },
  {
    name: "withdraw",
    component: Payment,
    icon: "wallet-outline",
    title: "পেমেন্ট",
  },
];

const TabButton = React.memo(
  ({ props, item }: { props: BottomTabBarButtonProps; item: ITabArr }) => {
    const { accessibilityState } = props;

    const [showTabs, setShowTabs] = useState(true);

    useEffect(() => {
      const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
        setShowTabs(false);
      });

      const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
        setShowTabs(true);
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);
    const animateStyles = useAnimatedStyle(() => {
      return {
        scaleX: accessibilityState?.selected && showTabs ? 1.2 : 1,
        scaleY: accessibilityState?.selected && showTabs ? 1.2 : 1,
        top: accessibilityState?.selected && showTabs ? -20 : 0,
      };
    }, [accessibilityState?.selected, showTabs]);

    const focusedIcon = useAnimatedStyle(() => {
      if (accessibilityState?.selected && showTabs) {
        return {
          borderRadius: 25,
          backgroundColor: theme.colors.primary[800],
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderColor: theme.colors.white,
          borderWidth: 4,
        };
      } else {
        return {
          borderRadius: 0,
          backgroundColor: theme.colors.primary[800],
          width: "auto",
          height: "auto",
          borderColor: "",
          borderWidth: 0,
        };
      }
    }, [accessibilityState?.selected, showTabs]);

    return (
      <TouchableOpacity style={styles.tabButton} onPress={props.onPress}>
        <Animated.View style={[styles.tabButton, animateStyles]}>
          <Animated.View style={[styles.icon, focusedIcon]}>
            <MaterialCommunityIcons
              name={item.icon}
              size={24}
              color={theme.colors.white}
            />
          </Animated.View>
          <Text color={theme.colors.white}>{item.title}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
);

export default function TabNavigator({ ...props }: any) {
  const tabProps = props;

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme.colors.primary[800],
          alignItems: "center",
          height: 60,
        },
        tabBarHideOnKeyboard: true,
      })}
      initialRouteName="home"
    >
      {tabArr.map((item, index) => {
        return (
          <Tabs.Screen
            name={item.name}
            key={index}
            component={item.component}
            options={{
              tabBarButton(props) {
                return <TabButton item={item} props={props} />;
              },
              header(props) {
                if (props.route.name === "deposit") {
                  return (
                    <SafeAreaView>
                      <ImageBackground
                        source={require("@/assets/header_layer.png")}
                        style={{
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 50,
                          paddingHorizontal: 20,
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            zIndex: 100,
                            position: "absolute",
                            left: 15,
                            justifyContent: "center",
                          }}
                          onPress={() => props.navigation.navigate("home")}
                        >
                          <Ionicons
                            name="chevron-back"
                            size={30}
                            color={theme.colors.white}
                            style={{
                              fontWeight: "bold",
                            }}
                          />
                        </TouchableOpacity>
                        <Heading color={theme.colors.white}>কর্ম ভাই</Heading>
                      </ImageBackground>
                    </SafeAreaView>
                  );
                }
                return <TabHeader {...tabProps} />;
              },
            }}
          />
        );
      })}
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});
