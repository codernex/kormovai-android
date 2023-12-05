import React from "react";
import { HStack, Text, VStack, View } from "native-base";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import { theme } from "@/app/theme";

const Payment = ({ navigation }: any) => {
  return (
    <View px={10} py={5}>
      <VStack space={5}>
        <PaymentOption
          navigation={navigation}
          url={"bkash"}
          title={"বিকাশ"}
          icon={require("@/assets/brand/bkash.png")}
        />
        <PaymentOption
          navigation={navigation}
          url={"nagad"}
          title={"নগদ"}
          icon={require("@/assets/brand/nagad.png")}
        />
        <PaymentOption
          navigation={navigation}
          url={"bank"}
          title={"ব্যাংক"}
          icon={require("@/assets/brand/bank.png")}
        />
        <PaymentOption
          navigation={navigation}
          url={"upay"}
          title={"উপায়"}
          icon={require("@/assets/brand/upay.png")}
        />
        <PaymentOption
          navigation={navigation}
          url={"rocket"}
          title={"রকেট"}
          icon={require("@/assets/brand/rocket.png")}
        />
      </VStack>
    </View>
  );
};

export default Payment;

const PaymentOption = ({
  navigation,
  url,
  title,
  icon,
}: {
  navigation: any;
  url: string;
  title: string;
  icon: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(url)}
      style={{
        backgroundColor: theme.colors.primary[800],
        flexDirection: "row",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        columnGap: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        contentFit="contain"
        source={icon}
        style={{ width: 30, height: 30 }}
      />
      <Text color={"white"} fontSize={24} fontWeight={"bold"}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
