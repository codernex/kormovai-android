import { theme } from "@/app/theme";
import { Ionicons } from "@expo/vector-icons";
import { Box, HStack, ScrollView, Text, VStack, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const packagesList = [
  {
    sl: "১.",
    title: "প্রতিদিন আয় ১০ টাকা",
    available: true,
  },
  {
    sl: "২.",
    title: "প্রতিদিন একবার পেমেন্ট",
    available: true,
  },
  {
    sl: "৩.",
    title: "এজেন্ট সাপোর্ট",
    available: true,
  },
  {
    sl: "৪.",
    title: "ফান্ড ট্রান্সফার",
    available: true,
  },
  {
    sl: "৫.",
    title: "লটারি",
    available: true,
  },
  {
    sl: "৬.",
    title: "এক বছর মেয়াদ",
    available: false,
  },
  {
    sl: "৭.",
    title: "দুই বছর মেয়াদ",
    available: true,
  },
  {
    sl: "৮.",
    title: "সমস্ত সুবিধা",
    available: true,
  },
  {
    sl: "৯.",
    title: "",
    available: undefined,
  },
];

const List = ({ ...data }: (typeof packagesList)[number]) => {
  return (
    <HStack space={5}>
      <HStack flex={1} style={styles.listBox} space={3} textAlign={"center"}>
        <Text color={theme.colors.gray[600]} fontSize={16}>
          {data.sl}
        </Text>
        <Text color={theme.colors.gray[600]} fontSize={16}>
          {data.title}
        </Text>
      </HStack>

      <Box style={styles.lisIcon}>
        {data?.available !== undefined ? (
          data.available ? (
            <Ionicons
              color={theme.colors.primary[900]}
              size={20}
              name="checkmark"
              style={{
                fontWeight: "700",
              }}
            />
          ) : (
            <Ionicons
              color={theme.colors.primary[900]}
              size={20}
              name="close"
              style={{
                fontWeight: "700",
              }}
            />
          )
        ) : (
          ""
        )}
      </Box>
    </HStack>
  );
};

const PackageThree = () => {
  return (
    <ScrollView px={10}>
      <VStack mt={10} style={styles.box}>
        <Text fontSize={22} color={theme.colors.gray[500]}>
          অ্যাকাউন্ট এর ধরন
        </Text>
        <Text fontSize={24} bold color={theme.colors.primary[900]}>
          ২৪০০ টাকা প্যাকেজ !
        </Text>
      </VStack>
      <VStack mt={8} space={2}>
        {packagesList.map((item) => {
          return <List key={item.sl} {...item} />;
        })}
      </VStack>
      <HStack justifyContent={"center"}>
        <TouchableOpacity style={styles.subscribe}>
          <Text fontSize={18} bold textAlign={"center"} color={"white"}>
            সাবস্ক্রিপশন
          </Text>
        </TouchableOpacity>
      </HStack>
    </ScrollView>
  );
};

export default PackageThree;

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderColor: theme.colors.primary[900],
    borderRadius: 8,
    alignItems: "center",
  },
  listBox: {
    borderWidth: 2,
    borderColor: theme.colors.primary[900],
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  lisIcon: {
    width: 50,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary[900],
    alignItems: "center",
    borderRadius: 8,
  },
  subscribe: {
    backgroundColor: theme.colors.primary[900],
    borderRadius: 8,
    marginTop: 40,
    width: 150,
    paddingVertical: 7,
    marginHorizontal: "auto",
  },
});
