import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/auth";
import Login from "../screens/auth/login";
import TabNavigator from "./tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LeftDrawerContent from "../components/LeftDrawerContent";
import Profile from "../screens/user/profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RightDrawerContent from "../components/RightDrawerContent";
import Header from "../components/header";
import Work from "../screens/work";
import Support from "../screens/support";
import Refer from "../screens/refer";
import PaymentHistory from "../screens/payments/payment-history";

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
        options={{
          presentation: "modal",
          header: (props) => <Header title="প্রোফাইল" {...props} />,
        }}
        component={Profile}
      />
      <RootStack.Screen
        name="work"
        component={Work}
        options={{
          header: (props) => <Header title="কাজ করুন" {...props} />,
        }}
      />
      <RootStack.Screen
        name="support"
        component={Support}
        options={{
          header: (props) => <Header title="সাপোর্ট" {...props} />,
        }}
      />

      <RootStack.Screen
        name="refer"
        component={Refer}
        options={{
          header: (props) => <Header title="রেফার" {...props} />,
        }}
      />
      <RootStack.Screen
        name="payment-history"
        component={PaymentHistory}
        options={{
          header: (props) => <Header title="লেনদেন" {...props} />,
        }}
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
      drawerContent={(props) => <RightDrawerContent {...props} />}
    >
      {authState.isAuth ? (
        <RightDrawer.Screen name="HomeDrawer" children={LeftDrawerScreen} />
      ) : (
        <RightDrawer.Screen name="login" component={Login} />
      )}
    </RightDrawer.Navigator>
  );
};
