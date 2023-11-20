import { TouchableOpacity, StyleProp, TextStyle } from "react-native";
import React from "react";
import { theme } from "../theme";
import { Box, Text } from "native-base";
interface HomeButtonProps {
  Icon: ({ style }: { style?: StyleProp<TextStyle> }) => React.JSX.Element;
  Text: ({ style }: { style?: StyleProp<TextStyle> }) => React.JSX.Element;
  onPress?: () => void;
}
const HomeButtonTwo: React.FC<HomeButtonProps> = ({ Icon, Text, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderWidth: 2,
        padding: 10,
        borderColor: theme.colors.primary[900],
        backgroundColor: theme.colors.primary[900],
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        width: 130,
        height: 60,
      }}
      onPress={onPress}
    >
      <Icon style={{ color: "white", fontSize: 30 }} />
      <Text
        style={{
          color: "white",
          fontSize: 22,
          justifyContent: "center",
          lineHeight: 30,
        }}
      />
    </TouchableOpacity>
  );
};

export default HomeButtonTwo;
