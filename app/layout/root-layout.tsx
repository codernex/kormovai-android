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
  Team,
  Bkash,
  Nagad,
  Bank,
  Upay,
  Rocket,
} from "../screens";
import { HStack, Text } from "native-base";
import { Image } from "expo-image";

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

      <RootStack.Screen
        name="team"
        component={Team}
        options={{
          header: (props) => <Header title="আমার টিম" {...props} />,
        }}
      />
      <RootStack.Screen
        name="bkash"
        component={Bkash}
        options={{
          header: (props) => (
            <Header
              TitleComponent={
                <HStack alignItems={"center"} space={1}>
                  <Image
                    source={require("@/assets/brand/bkash.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text color={"white"} fontSize={24} fontWeight={"bold"}>
                    বিকাশ
                  </Text>
                </HStack>
              }
              {...props}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="nagad"
        component={Nagad}
        options={{
          header: (props) => (
            <Header
              TitleComponent={
                <HStack alignItems={"center"} space={1}>
                  <Image
                    source={require("@/assets/brand/nagad.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text color={"white"} fontSize={24} fontWeight={"bold"}>
                    নগদ
                  </Text>
                </HStack>
              }
              {...props}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="bank"
        component={Bank}
        options={{
          header: (props) => (
            <Header
              TitleComponent={
                <HStack alignItems={"center"} space={1}>
                  <Image
                    source={require("@/assets/brand/bank.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text color={"white"} fontSize={24} fontWeight={"bold"}>
                    ব্যাংক
                  </Text>
                </HStack>
              }
              {...props}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="upay"
        component={Upay}
        options={{
          header: (props) => (
            <Header
              TitleComponent={
                <HStack alignItems={"center"} space={1}>
                  <Image
                    source={require("@/assets/brand/bkash.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text color={"white"} fontSize={24} fontWeight={"bold"}>
                    উপায়
                  </Text>
                </HStack>
              }
              {...props}
            />
          ),
        }}
      />
      <RootStack.Screen
        name="rocket"
        component={Rocket}
        options={{
          header: (props) => (
            <Header
              TitleComponent={
                <HStack alignItems={"center"} space={1}>
                  <Image
                    source={require("@/assets/brand/rocket.png")}
                    style={{ width: 30, height: 30 }}
                    contentFit="contain"
                  />
                  <Text color={"white"} fontSize={24} fontWeight={"bold"}>
                    রকেট
                  </Text>
                </HStack>
              }
              {...props}
            />
          ),
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
  const { authState } = useAuth()!;
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
