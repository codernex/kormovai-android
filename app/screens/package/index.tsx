import { theme } from "@/app/theme";
import { useNavigation } from "@react-navigation/native";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const packages = [
  {
    type: "ফ্রি",
    id: 0,
    desc: {
      title: "ফ্রি প্যাকেজ",
      content: [
        "প্রতিদিন আয় ৩ টাকা ",
        "প্রতি মাসে একবার পেমেন্ট",
        "এজেন্ট সাপোর্ট",
      ],
    },
    url: "free-package",
  },
  {
    type: "১ বছর",
    id: 1,
    desc: {
      title: "১ বছর প্যাকেজ",
      content: [
        "প্রতিদিন আয় ১০ টাকা",
        "প্রতিদিন একবার পেমেন্ট",
        "এজেন্ট সাপোর্ট",
        "ফান্ড ট্রান্সফার",
      ],
    },
    url: "package-two",
  },
  {
    type: "২ বছর",
    id: 2,
    desc: {
      title: "২ বছর প্যাকেজ",
      content: [
        "প্রতিদিন আয় ১০ টাকা",
        "প্রতিদিন একবার পেমেন্ট",
        "এজেন্ট সাপোর্ট",
        "ফান্ড ট্রান্সফার",
        "ফান্ড ট্রান্সফার",
      ],
    },
    url: "package-three",
  },
];
const Packages = ({ navigation }: any) => {
  const [selected, setSelected] = React.useState(0);
  return (
    <ScrollView paddingX={10} height={"100%"}>
      <Text
        fontSize={22}
        textAlign={"center"}
        mt={10}
        color={theme.colors.primary[900]}
      >
        আপনার পছন্দ অনুযায়ী প্যাকেজ নির্বাচন করুন !
      </Text>

      <HStack space={2} mt={10}>
        {packages.map(({ type, id }) => (
          <TouchableOpacity
            style={[styles.button, selected === id && styles.activeButton]}
            key={id}
            onPress={() => setSelected(id)}
          >
            <Text
              style={[
                { color: selected === id ? "white" : theme.colors.gray[500] },
              ]}
              textAlign={"center"}
              fontSize={18}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </HStack>
      <Box height={"400px"} mt={5} style={styles.box}>
        <Text style={styles.title}>{packages[selected].desc.title}</Text>
        <VStack px={10} space={2} my={5}>
          {packages[selected].desc.content.map((item, index) => (
            <HStack key={index} space={4} alignItems={"center"}>
              <Box
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 7.5,
                }}
                backgroundColor={theme.colors.primary[900]}
              />
              <Text>{item}</Text>
            </HStack>
          ))}
        </VStack>
        <HStack
          position={"absolute"}
          bottom={10}
          width={"100%"}
          justifyContent={"center"}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate(packages[selected].url)}
            style={styles.readMore}
          >
            <Text textAlign={"center"} fontWeight={600}>
              আরো দেখুন
            </Text>
          </TouchableOpacity>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default Packages;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: theme.colors.primary[900],
    width: "30%",
    paddingVertical: 5,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: theme.colors.primary[900],
  },
  box: {
    borderColor: theme.colors.primary[900],
    borderWidth: 2,
    borderRadius: 5,
    position: "relative",
  },
  title: {
    color: "white",
    fontSize: 28,
    lineHeight: 36,
    paddingVertical: 10,
    textAlign: "center",
    backgroundColor: theme.colors.primary[900],
  },
  readMore: {
    borderWidth: 2,
    borderColor: theme.colors.primary[900],
    borderRadius: 10,
    width: 120,
    paddingVertical: 5,
  },
});
