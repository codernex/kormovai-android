import { Box, HStack, Text, VStack, View } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "@/app/theme";

const Team = () => {
  return (
    <View px={10} py={10}>
      <Box
        borderColor={theme.colors.customGray["250"]}
        borderWidth={1}
        py={5}
        px={3}
        rounded={5}
      >
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} space={2}>
            <Text fontSize={22} color={theme.colors.primary[900]}>
              টিম মেম্বার
            </Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color={theme.colors.primary[900]}
            />
          </HStack>
          <Box backgroundColor={theme.colors.primary[900]} px={8} rounded={5}>
            <Text color={"white"} fontSize={30}>
              1000
            </Text>
          </Box>
        </HStack>
      </Box>

      <VStack mt={10} space={3}>
        <TeamItem n={900} level={"Levle 1"} />
        <TeamItem n={20} level={"Levle 2"} />
        <TeamItem n={30} level={"Levle 3"} />
        <TeamItem n={20} level={"Levle 4"} />
        <TeamItem n={30} level={"Levle 5"} />
      </VStack>
    </View>
  );
};

export default Team;

export const TeamItem = ({ n, level }: { n: number; level: string }) => {
  return (
    <HStack
      borderColor={theme.colors.primary[900]}
      borderWidth={2}
      py={1}
      px={3}
      rounded={5}
      justifyContent={"space-between"}
    >
      <Text fontSize={20} color={theme.colors.primary[900]}>
        {level}
      </Text>
      <Text fontSize={20} color={theme.colors.primary[900]}>
        মেম্বার
      </Text>
      <HStack
        justifyContent={"center"}
        background={theme.colors.primary[900]}
        rounded={5}
        width={"70px"}
      >
        <Text fontSize={20} color={"white"}>
          {n}
        </Text>
      </HStack>
    </HStack>
  );
};
