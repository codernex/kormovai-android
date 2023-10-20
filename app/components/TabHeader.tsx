import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading } from "native-base";
import { Image } from "expo-image";
import { theme } from "../theme";

const TabHeader = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.colors.primary[800],
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={require("@/assets/left-menu.png")}
          />
        </TouchableOpacity>

        <Heading color={theme.colors.white}>কর্ম ভাই</Heading>

        <TouchableOpacity
          onPress={() => {
            navigation.getParent().openDrawer();
          }}
        >
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            source={require("@/assets/right-menu.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TabHeader;
