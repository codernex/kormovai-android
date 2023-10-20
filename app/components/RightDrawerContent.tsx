import { View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Text, HStack, VStack, Heading, Box } from "native-base";
import { Image } from "expo-image";
import { theme } from "../theme";

const RightDrawerContent: React.FC<DrawerContentComponentProps> = ({
  ...props
}) => {
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

export default RightDrawerContent;
