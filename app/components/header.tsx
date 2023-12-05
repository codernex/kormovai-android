import { TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { Text } from "native-base";

interface ICustomHeader {
  title?: string;
  TitleComponent?: React.JSX.Element;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

const Header: React.FC<ICustomHeader> = ({ ...props }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require("@/assets/header_layer.png")}
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            zIndex: 100,
            position: "absolute",
            left: 15,
            justifyContent: "center",
          }}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons
            name="chevron-back"
            size={30}
            color={theme.colors.white}
            style={{
              fontWeight: "bold",
            }}
          />
        </TouchableOpacity>
        {props.title && (
          <Text
            style={{
              fontSize: 24,
              lineHeight: 35,
              color: theme.colors.white,
              justifyContent: "center",
            }}
            fontWeight={600}
          >
            {props.title}
          </Text>
        )}
        {props.TitleComponent && props.TitleComponent}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Header;
