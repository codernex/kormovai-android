import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, ScrollView, VStack } from "native-base";
import { theme } from "@/app/theme";
import { Ionicons } from "@expo/vector-icons";
import Spacer from "@/app/components/spacer";

const works: {
  name: string;
  amount: string;
  status: "completed" | "uncompleted";
}[] = [
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "completed",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "completed",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
  {
    name: "কাজ",
    amount: "03",
    status: "uncompleted",
  },
];
const WorkItem = ({
  index,
  name,
  amount,
  status,
}: {
  index: number;
  name: string;
  amount: string;
  status: "completed" | "uncompleted";
}) => {
  return (
    <HStack space={3}>
      <Box style={styles.list}>
        <Text style={{ fontSize: 18, color: theme.colors.primary[900] }}>
          {index + 1}
        </Text>
      </Box>
      <TouchableOpacity style={styles.workButton}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{amount}</Text>
        {status === "completed" ? (
          <Ionicons name="checkmark-circle" style={styles.text} />
        ) : (
          <Text style={styles.text}>করুন</Text>
        )}
      </TouchableOpacity>
    </HStack>
  );
};

const Work = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      paddingX={10}
      paddingY={10}
    >
      <VStack space={5}>
        {works.map((work, index) => (
          <WorkItem key={index} index={index} {...work} />
        ))}
      </VStack>
      <Spacer size={50} />
    </ScrollView>
  );
};

export default Work;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: 50,
    height: 50,
    borderColor: theme.colors.primary[900],
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: 5,
  },
  workButton: {
    borderColor: theme.colors.primary[900],
    borderWidth: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: theme.colors.primary[900],
    fontFamily: "LiAdoreRegular",
  },
});
