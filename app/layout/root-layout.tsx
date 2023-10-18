import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/auth";
import Login from "../screens/auth/login";
import TabNavigator from "./tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LeftDrawerContent from "../components/LeftDrawerContent";
import Profile from "../screens/user/profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <RootLayoutStack />
    </NavigationContainer>
  );
}
const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

const RootLayoutStack = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="Drawer"
        component={RightDrawerScreen}
      />
      <RootStack.Screen
        name="profile"
        options={{ presentation: "modal" }}
        component={Profile}
      />
    </RootStack.Navigator>
  );
};

const LeftDrawerScreen = () => {
  return (
    <LeftDrawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <LeftDrawerContent {...props} />}
    >
      <LeftDrawer.Screen name="tab" component={TabNavigator} />
    </LeftDrawer.Navigator>
  );
};

const RightDrawerScreen = () => {
  const { authState } = useAuth();
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      {authState.isAuth ? (
        <RightDrawer.Screen name="HomeDrawer" children={LeftDrawerScreen} />
      ) : (
        <RightDrawer.Screen name="login" component={Login} />
      )}
    </RightDrawer.Navigator>
  );
};
