import React from "react";
import { Box, FlatList, HStack, ScrollView, Text } from "native-base";
import { theme } from "@/app/theme";
import { StyleSheet } from "react-native";

const earnings = [
  {
    type: "রেফার বোনাস",
    amount: "১০০ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 1,
  },
  {
    type: "রেফার কমিশন",
    amount: "১০ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 2,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 3,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 4,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 5,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 6,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 7,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 8,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 9,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 10,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 11,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 12,
  },
  {
    type: "কাজ",
    amount: "১ টাকা",
    date: "২০ / ০৭ / ১৯",
    id: 13,
  },
];

const EarningItem = ({ ...data }: (typeof earnings)[number]) => {
  return (
    <HStack style={styles.item}>
      <Text
        bold
        color={theme.colors.primary[900]}
        textAlign={"center"}
        flex={1}
        fontSize={15}
      >
        {data.type}
      </Text>
      <Text
        style={{
          borderRightWidth: 1,
          borderRightColor: theme.colors.primary[900],
          borderLeftColor: theme.colors.primary[900],
          borderLeftWidth: 1,
          paddingHorizontal: 5,
        }}
        fontSize={15}
        bold
        color={theme.colors.primary[900]}
      >
        {data.date}
      </Text>
      <Text
        bold
        color={theme.colors.primary[900]}
        flex={1}
        fontSize={15}
        textAlign={"center"}
      >
        {data.amount}
      </Text>
    </HStack>
  );
};
const IncomeHistory = () => {
  return (
    <ScrollView px={10}>
      <Text
        borderLeftColor={theme.colors.primary[900]}
        borderLeftWidth={2}
        color={"#565858"}
        mt={6}
        textAlign={"center"}
        borderRightColor={theme.colors.primary[900]}
        borderRightWidth={2}
        fontSize={15}
        underline
        fontFamily={"LiAdoreSemiBold"}
      >
        আপনার প্রয়োজনীয় সেবা সিলেক্ট করুন
      </Text>

      <FlatList
        data={earnings}
        renderItem={(props) => (
          <EarningItem key={props.index} {...props.item} />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 2,
    borderColor: theme.colors.primary[900],
    marginTop: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    borderRadius: 5,
  },
});
export default IncomeHistory;
