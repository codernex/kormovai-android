import { TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Image, ImageBackground } from "expo-image";
import { Box, HStack, ScrollView, Text, VStack, View } from "native-base";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { theme } from "@/app/theme";

const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Cover Photo */}
      <Box
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        overflow={"hidden"}
        width={"full"}
        position={"relative"}
      >
        <Box
          style={{
            width: "100%",
            height: 150,
            backgroundColor: theme.colors.gray[200],
          }}
        />
      </Box>
      {/*****Profile */}
      <Box width={"full"} alignItems={"center"} top={-60}>
        <Box
          style={{
            backgroundColor: "#fff",
            shadowColor: "#000",
            width: 120,
            height: 120,
            borderRadius: 60,
            overflow: "hidden",
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("@/assets/placeholder.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
        </Box>
        <Box position={"relative"}>
          <Box style={styles.profile}>
            <Text
              fontSize={22}
              color={theme.colors.primary[900]}
              fontWeight={"bold"}
            >
              Juyel
            </Text>
            <Text
              fontSize={22}
              color={theme.colors.secondary[900]}
              fontWeight={"bold"}
            >
              Hossain
            </Text>
          </Box>
          <TouchableOpacity style={styles.editButton2}>
            <Text
              fontSize={13}
              color={theme.colors.primary[900]}
              fontWeight={"600"}
            >
              Edit
            </Text>
            <Ionicons
              size={13}
              color={theme.colors.primary[900]}
              name="md-pencil-outline"
            />
          </TouchableOpacity>
        </Box>

        {/*****About */}
        <Box
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={theme.colors.black[900]}
          width={"100%"}
          style={{
            height: 40,
          }}
          borderRadius={10}
        >
          <HStack>
            {Array.from({ length: 5 }).map((item, i) => {
              let fillColor: string;
              if (i < 5) {
                fillColor = "#ffce01";
              } else {
                fillColor = "#fff";
              }
              return (
                <MaterialCommunityIcons
                  color={fillColor}
                  key={i}
                  size={20}
                  name="star"
                />
              );
            })}
          </HStack>
        </Box>

        {/*****Bio */}
        <Box width={"full"} paddingX={10} py={5}>
          <Text
            fontSize={20}
            textAlign={"center"}
            color={theme.colors.gray[400]}
            fontWeight={600}
          >
            টাকা টার্নওভার
          </Text>
          <Box
            width={"full"}
            borderColor={theme.colors.primary[900]}
            borderWidth={2}
            flexDir={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingX={10}
            paddingY={2}
            height={50}
            borderRadius={5}
          >
            <Text
              fontWeight={600}
              fontSize={18}
              color={theme.colors.primary[900]}
            >
              00tk
            </Text>
            <Box
              width={1}
              height={"full"}
              backgroundColor={theme.colors.gray["300"]}
            />
            <Text
              fontWeight={600}
              fontSize={18}
              color={theme.colors.primary[900]}
            >
              100tk
            </Text>
          </Box>
          {/******Information */}
          <Text
            width={"full"}
            borderLeftWidth={5}
            textAlign={"left"}
            borderLeftColor={theme.colors.primary[900]}
            paddingLeft={5}
            mt={5}
            color={theme.colors.primary[900]}
            fontWeight={"bold"}
            fontSize={16}
          >
            আপমার প্রোফাইল
          </Text>

          <VStack space={5} mt={5}>
            <Box
              width={"full"}
              h={20}
              backgroundColor={theme.colors.gray[200]}
              justifyContent={"center"}
              px={5}
              borderRadius={10}
              shadow={"3"}
            >
              <HStack space={2}>
                <FontAwesome
                  name="address-card-o"
                  size={20}
                  color={theme.colors.primary[900]}
                />
                <Text color={theme.colors.primary[900]}>আইডি নম্বর</Text>
              </HStack>
              <Text
                color={theme.colors.primary[900]}
                letterSpacing={2}
                fontSize={26}
                fontWeight={"extrabold"}
              >
                2929427875782
              </Text>
            </Box>
            <Box
              width={"full"}
              h={20}
              backgroundColor={theme.colors.gray[200]}
              justifyContent={"center"}
              px={5}
              borderRadius={10}
              shadow={"3"}
            >
              <HStack space={2}>
                <Ionicons
                  name="call"
                  size={20}
                  color={theme.colors.primary[900]}
                />
                <Text color={theme.colors.primary[900]}>আইডি নম্বর</Text>
              </HStack>
              <Text
                color={theme.colors.primary[900]}
                letterSpacing={2}
                fontSize={26}
                fontWeight={"extrabold"}
              >
                2929427875782
              </Text>
            </Box>

            <Box
              width={"full"}
              h={20}
              backgroundColor={theme.colors.gray[200]}
              justifyContent={"center"}
              px={5}
              borderRadius={10}
              shadow={"3"}
            >
              <HStack space={2}>
                <Ionicons
                  name="information-circle"
                  size={20}
                  color={theme.colors.primary[900]}
                />
                <Text color={theme.colors.primary[900]}>আইডি নম্বর</Text>
              </HStack>
              <Text
                color={theme.colors.primary[900]}
                letterSpacing={2}
                fontSize={26}
                fontWeight={"extrabold"}
              >
                2929427875782
              </Text>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Profile;

export const styles = StyleSheet.create({
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    columnGap: 5,
  },
  editButton2: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    columnGap: 5,
    right: -50,
    bottom: 2,
    position: "absolute",
  },
  profile: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    columnGap: 5,
  },
});
