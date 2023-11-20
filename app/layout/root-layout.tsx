import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/auth";
import TabNavigator from "./tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Header,
  RightDrawerContent,
  LeftDrawerContent,
} from "@/app/components";
import {
  EarningHistory,
  Work,
  Media,
  Packages,
  SignUp,
  FundTransfer,
  PaymentHistory,
  Refer,
  Support,
  Login,
  Profile,
  FreePackage,
  PackageTwo,
  PackageThree,
} from "../screens";

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
      <RootStack.Screen
        name="fund-transfer"
        component={FundTransfer}
        options={{
          header: (props) => <Header title="ফান্ড ট্রান্সফার" {...props} />,
        }}
      />
      <RootStack.Screen
        name="packages"
        component={Packages}
        options={{
          header: (props) => <Header title="প্যাকেজ " {...props} />,
        }}
      />
      <RootStack.Screen
        name="earning-history"
        component={EarningHistory}
        options={{
          header: (props) => <Header title="ইনকাম হিস্টোরি" {...props} />,
        }}
      />
      <RootStack.Screen
        name="media"
        component={Media}
        options={{
          header: (props) => <Header title="মিডিয়া" {...props} />,
        }}
      />
      <RootStack.Screen
        name="free-package"
        component={FreePackage}
        options={{
          header: (props) => <Header title="ফিরে যান" {...props} />,
        }}
      />
      <RootStack.Screen
        name="package-two"
        component={PackageTwo}
        options={{
          header: (props) => <Header title="ফিরে যান" {...props} />,
        }}
      />
      <RootStack.Screen
        name="package-three"
        component={PackageThree}
        options={{
          header: (props) => <Header title="ফিরে যান" {...props} />,
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
        <RightDrawer.Group>
          <RightDrawer.Screen name="login" component={Login} />
          <RightDrawer.Screen name="signup" component={SignUp} />
        </RightDrawer.Group>
      )}
    </RightDrawer.Navigator>
  );
};
