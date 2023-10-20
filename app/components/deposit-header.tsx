import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { Box, Heading } from "native-base";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const DepositHeader: React.FC<BottomTabHeaderProps> = ({ ...props }) => {
  return (
    <SafeAreaView>
      <Box
        style={{
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#000",
          height: 50,
        }}
      >
        <TouchableOpacity
          style={{ zIndex: 100 }}
          onPress={() => props.navigation.navigate("home")}
        >
          <Ionicons name="chevron-back" size={30} color={theme.colors.white} />
        </TouchableOpacity>
        <Heading></Heading>
      </Box>
    </SafeAreaView>
  );
};

export default DepositHeader;
