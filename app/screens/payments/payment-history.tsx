import { theme } from "@/app/theme";
import { Image } from "expo-image";
import { Divider, HStack, ScrollView, Text, VStack } from "native-base";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

interface IPayment {
  index: number;
  method: "bkash" | "nagad" | "upay" | "rocket" | "bank";
  status: "complete" | "pending";
  amount: string;
}

const renderPayment = ({
  index,
  amount,
  method,
  status,
}: IPayment): React.JSX.Element => {
  switch (method) {
    case "bkash":
      return (
        <PaymentItem
          key={index}
          title="বিকাশ"
          imageUri={require("@/assets/brand/bkash.png")}
          {...{ amount, status }}
        />
      );
    case "nagad":
      return (
        <PaymentItem
          key={index}
          title="নগদ"
          imageUri={require("@/assets/brand/nagad.png")}
          {...{ amount, status }}
        />
      );
    case "upay":
      return (
        <PaymentItem
          key={index}
          title="উপায়"
          imageUri={require("@/assets/brand/upay.png")}
          {...{ amount, status }}
        />
      );
    case "rocket":
      return (
        <PaymentItem
          key={index}
          title="রকেট"
          imageUri={require("@/assets/brand/rocket.png")}
          {...{ amount, status }}
        />
      );
    case "bank":
      return (
        <PaymentItem
          key={index}
          title="ফান্ড ট্রান্সফার"
          imageUri={require("@/assets/brand/bank.png")}
          {...{ amount, status }}
        />
      );
  }
};

const PaymentItem = ({
  imageUri,
  title,
  amount,
}: {
  imageUri: string;
  amount: string;
  title: string;
  status: IPayment["status"];
}) => {
  return (
    <HStack
      borderWidth={1}
      borderColor={theme.colors.primary[900]}
      w={"full"}
      justifyContent={"space-between"}
      px={5}
      py={2}
      borderRadius={5}
      alignItems={"center"}
    >
      <Image
        source={imageUri}
        style={{
          width: 35,
          height: 40,
        }}
        contentFit="contain"
      />
      <Text fontSize={18} color={theme.colors.primary[900]}>
        {title}
      </Text>
      <Divider
        bg={"#a1a1a1"}
        height={0.5}
        style={{
          width: 50,
        }}
      />
      <Text fontSize={18} color={theme.colors.primary[900]}>
        {amount}
      </Text>
    </HStack>
  );
};

const transactions: IPayment[] = [
  {
    index: 0,
    method: "bkash",
    status: "complete",
    amount: "100",
  },
  {
    index: 1,
    method: "nagad",
    status: "complete",
    amount: "100",
  },
  {
    index: 2,
    method: "upay",
    status: "complete",
    amount: "100",
  },
  {
    index: 3,
    method: "rocket",
    status: "complete",
    amount: "100",
  },
  {
    index: 4,
    method: "bank",
    status: "complete",
    amount: "100",
  },
  {
    index: 3,
    method: "rocket",
    status: "pending",
    amount: "100",
  },
  {
    index: 4,
    method: "bank",
    status: "pending",
    amount: "100",
  },
];

const AnimatedVStack = Animated.createAnimatedComponent(VStack);
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedText = Animated.createAnimatedComponent(Text);
const PaymentHistory = () => {
  const [currentTab, setCurrentTab] = useState<"completed" | "pending">(
    "completed"
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} px={10}>
      {/*******Tabs */}
      <HStack
        borderColor={theme.colors.primary[900]}
        borderWidth={1}
        mt={10}
        borderRadius={5}
        overflow={"hidden"}
      >
        <AnimatedTouchableOpacity
          onPress={() => {
            setCurrentTab("completed");
          }}
          style={[
            styles.button,
            currentTab === "completed"
              ? styles.acitveStyle
              : styles.inactiveStyle,
            currentTab === "completed" && {
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            },
          ]}
        >
          <AnimatedText
            style={[
              styles.text,
              currentTab === "completed"
                ? styles.activeText
                : styles.inactiveText,
            ]}
          >
            পেমেন্ট সফল
          </AnimatedText>
        </AnimatedTouchableOpacity>
        <AnimatedTouchableOpacity
          onPress={() => {
            setCurrentTab("pending");
          }}
          style={[
            styles.button,
            currentTab === "pending"
              ? styles.acitveStyle
              : styles.inactiveStyle,
            currentTab === "pending" && {
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            },
          ]}
        >
          <AnimatedText
            style={[
              styles.text,
              currentTab === "pending"
                ? styles.activeText
                : styles.inactiveText,
            ]}
          >
            পেমেন্ট পেন্ডিং
          </AnimatedText>
        </AnimatedTouchableOpacity>
      </HStack>
      {/******Items*/}
      <AnimatedVStack space={2} mt={10}>
        {currentTab === "completed"
          ? transactions
              .filter((item) => item.status === "complete")
              .map((item) => {
                return renderPayment(item);
              })
          : transactions
              .filter((item) => item.status === "pending")
              .map((item) => {
                return renderPayment(item);
              })}
      </AnimatedVStack>
    </ScrollView>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  acitveStyle: {
    backgroundColor: theme.colors.primary[900],
  },
  inactiveStyle: {
    backgroundColor: theme.colors.white,
  },
  activeText: {
    color: theme.colors.white,
  },
  inactiveText: {
    color: theme.colors.primary[900],
  },
});
