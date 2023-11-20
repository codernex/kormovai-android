import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from "react-native";
import React from "react";
import { theme } from "../theme";

interface IButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  title: string;
}

const Button: React.FC<IButtonProps> = ({
  onPress,
  style,
  title,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary[900],
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
