import { Text, VStack, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";

const menu = [
  {
    title: "হোম",
    uri: "home",
  },
  {
    title: "কাজ",
    uri: "work",
  },
  {
    title: "রেফার",
    uri: "refer",
  },
  {
    title: "পেমেন্ট হিস্টোরি",
    uri: "payment-history",
  },
  {
    title: "সাপোর্ট",
    uri: "support",
  },
  {
    title: "টেলিগ্রাম",
    uri: "telegram",
  },
  {
    title: "ফেসবুক",
    uri: "facebook",
  },
  {
    title: "ইউটিউব",
    uri: "youtube",
  },
  {
    title: "ইনকাম হিস্টোরি",
    uri: "earning-history",
  },
];

const RightDrawerMenu = ({ navigation }: { navigation: any }) => {
  return (
    <View height={"100%"} px={10} py={10}>
      <VStack
        space={5}
        justifyContent={"center"}
        paddingRight={2}
        borderRightColor={theme.colors.primary[900]}
        borderRightWidth={2}
      >
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            navigation={navigation}
            text={item.title}
            uri={item.uri}
          />
        ))}
      </VStack>
    </View>
  );
};

const MenuItem = ({
  text,
  navigation,
  uri,
}: {
  text: string;
  navigation: any;
  uri: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(uri)}
      style={styles.menuItem}
    >
      <Text fontSize={18} color={theme.colors.primary[900]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default RightDrawerMenu;

const styles = StyleSheet.create({
  menuItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary[900],
    borderRadius: 5,
    height: 40,
  },
});
