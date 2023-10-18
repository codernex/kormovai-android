import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, HStack, Heading, Text, VStack, Button } from "native-base";
import { theme } from "../theme";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const LeftDrawerContent = ({ ...props }: DrawerContentComponentProps) => {
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
              <Heading color={theme.colors.white}>My Account</Heading>
              <Text color={theme.colors.gray[500]}>Account Details</Text>
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
    </SafeAreaView>
  );
};

export default LeftDrawerContent;
