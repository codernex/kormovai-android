import React, { useEffect, useState } from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Heading, Text, VStack, ScrollView } from "native-base";
import { theme } from "../theme";
import { Image } from "expo-image";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../context/auth";
import Button from "./button";

const LeftDrawerContent = ({ ...props }: DrawerContentComponentProps) => {
  const { authState, users } = useAuth()!;

  console.log(users);

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.primary[800],
        }}
        onPress={() => {
          props.navigation.navigate("profile");
          props.navigation.closeDrawer();
        }}
      >
        <HStack
          justifyContent={"space-between"}
          paddingY={4}
          paddingX={4}
          alignItems={"center"}
        >
          <HStack space={2}>
            <Image
              source={require("@/assets/logo.png")}
              style={{
                backgroundColor: theme.colors.white,
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
            />
            <VStack>
              <Heading fontFamily={"mono"} color={theme.colors.white}>
                My Account
              </Heading>
              <Text
                style={{ fontFamily: "LiAdoreRegular" }}
                color={theme.colors.gray[500]}
              >
                Account Details
              </Text>
            </VStack>
          </HStack>
          <Box
            style={{
              flex: 1,
              alignItems: "flex-end",
            }}
          >
            <Ionicons
              name="chevron-forward"
              style={{
                backgroundColor: theme.colors.white,
                borderRadius: 4,
              }}
              size={20}
            />
          </Box>
        </HStack>
      </TouchableOpacity>
      <VStack
        py={2}
        borderTopColor={theme.colors.primary[800]}
        borderBottomColor={theme.colors.primary[800]}
        mt={3}
        borderTopWidth={3}
        borderBottomWidth={3}
        ml={5}
        h={"80%"}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {users?.map(({ user: user, token }, i) => {
            return (
              <HStack space={5} alignItems={"center"} key={user?.id}>
                <Text
                  color={theme.colors.primary[800]}
                  borderColor={theme.colors.primary[800]}
                  borderWidth={1}
                  fontSize={16}
                  width={"30px"}
                  textAlign={"center"}
                  rounded={3}
                >
                  {i + 1}.
                </Text>
                <Text
                  color={theme.colors.primary[800]}
                  borderColor={theme.colors.primary[800]}
                  borderWidth={1}
                  fontSize={16}
                  textAlign={"center"}
                  flex={1}
                  rounded={3}
                >
                  Kormo Vai ID - {user?.id}
                </Text>
                <Ionicons size={20} name="trash" />
              </HStack>
            );
          })}
        </ScrollView>
      </VStack>
      <TouchableOpacity>
        <FontAwesome name="plus" />

        <Text>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LeftDrawerContent;
