import { theme } from "@/app/theme";
import { Box, HStack, Text, View } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
const Refer = () => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("hello world");
  };
  return (
    <View px={10} py={10}>
      <HStack space={5}>
        <TouchableOpacity style={styles.button}>
          <Text
            fontFamily={"body"}
            fontWeight={"semibold"}
            style={styles.btnText}
          >
            রেফার
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text
            fontFamily={"body"}
            fontWeight={"semibold"}
            style={styles.btnText}
          >
            রেফার টিম
          </Text>
        </TouchableOpacity>
      </HStack>

      <Box
        width={"full"}
        height={100}
        borderWidth={2}
        borderRadius={5}
        borderColor={theme.colors.customGray[250]}
        alignItems={"center"}
        justifyContent={"center"}
        mt={10}
        mb={10}
      >
        <Text letterSpacing={4}>Animation</Text>
      </Box>

      <HStack
        backgroundColor={theme.colors.primary[900]}
        justifyContent={"center"}
        borderRadius={6}
        mx={10}
      >
        <Text
          fontSize={20}
          color={"white"}
          fontWeight={700}
          textAlign={"center"}
        >
          কর্ম ভাই আইডি
        </Text>
      </HStack>

      <Box
        width={"5/6"}
        height={75}
        borderWidth={2}
        borderRadius={5}
        borderColor={theme.colors.customGray[250]}
        alignItems={"center"}
        justifyContent={"center"}
        mt={5}
        mx={"auto"}
        mb={35}
      >
        <Text fontWeight={700} fontSize={30} color={theme.colors.primary[900]}>
          656524
        </Text>
      </Box>
      <HStack px={65} justifyContent={"center"}>
        <TouchableOpacity
          onPress={copyToClipboard}
          style={[{ width: 120 }, styles.button]}
        >
          <Text fontWeight={700} fontSize={20} color={theme.colors.white}>
            কপি কোড
          </Text>
        </TouchableOpacity>
      </HStack>
    </View>
  );
};

export default Refer;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary[900],
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 5,
  },
  btnText: {
    color: theme.colors.white,
    fontSize: 18,
    lineHeight: 30,
  },
});
