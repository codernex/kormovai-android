import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Deposit from "../screens/deposit";
import Payment from "../screens/payment";
import { theme } from "../theme";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { Box, Text, VStack } from "native-base";
import TabHeader from "../components/TabHeader";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import React from "react";
import DepositHeader from "../components/deposit-header";

const Tabs = createBottomTabNavigator();

interface ITabArr {
  name: string;
  component: () => React.JSX.Element;
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

const TabButton = ({
  props,
  item,
}: {
  props: BottomTabBarButtonProps;
  item: ITabArr;
}) => {
  const { accessibilityState } = props;

  const animateStyles = useAnimatedStyle(() => {
    return {
      scaleX: accessibilityState?.selected ? 1.2 : 1,
      scaleY: accessibilityState?.selected ? 1.2 : 1,
      top: accessibilityState?.selected ? -20 : 0,
    };
  }, [accessibilityState?.selected]);

  const focusedIcon = useAnimatedStyle(() => {
    if (accessibilityState?.selected) {
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
  }, [accessibilityState?.selected]);

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
};

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
                  return <DepositHeader {...props} />;
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
