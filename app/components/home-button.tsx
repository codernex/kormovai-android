import { TouchableOpacity, StyleProp, TextStyle } from "react-native";
import React from "react";
import { theme } from "../theme";
import { Box, Text } from "native-base";
import {
  ITextProps,
  InterfaceTextProps,
} from "native-base/lib/typescript/components/primitives/Text/types";
interface HomeButtonProps {
  Icon: ({ style }: { style?: StyleProp<TextStyle> }) => React.JSX.Element;
  Text: ({ style }: { style?: StyleProp<TextStyle> }) => React.JSX.Element;
  onPress?: () => void;
}
const HomeButton: React.FC<HomeButtonProps> = ({ Icon, Text }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        padding: 10,
        borderWidth: 2,
        borderColor: theme.colors.primary[900],
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        width: 130,
        height: 60,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <Box
        w={10}
        height={12}
        position={"absolute"}
        background={theme.colors.primary[900]}
        style={{
          transform: [
            {
              rotate: "135deg",
            },
          ],
          top: -25,
          right: -25,
        }}
      />
      <Box
        style={{
          width: 30,
          height: 30,
          backgroundColor: theme.colors.primary[800],
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Icon style={{ color: "white", fontSize: 20 }} />
      </Box>
      <Text
        style={{
          color: "#565858",
          fontSize: 18,
          lineHeight: 30,
        }}
      />
    </TouchableOpacity>
  );
};

export default HomeButton;
