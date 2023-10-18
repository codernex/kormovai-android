import {
  View,
  TextInput as RnTextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Box, Popover, Text, Tooltip } from "native-base";
import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  useRef,
} from "react";
import {
  useController,
  useFormContext,
  UseControllerProps,
} from "react-hook-form";
import { theme } from "../theme";
import { Ionicons } from "@expo/vector-icons";

interface ITextInputProps extends TextInputProps, UseControllerProps {
  defaultValue?: string;
  label?: string;
  containerStyle?: ViewStyle;
  InputLeftElement?: ReactNode;
  InputRightElemnt?: ReactNode;
}

const TextInput: React.FC<ITextInputProps> = ({ ...props }) => {
  /* GET THE FORMS CONTEXT */
  const formContext = useFormContext();

  const { name } = props;

  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    return null;
  }
  return <ControlledInput {...props} />;
};

const ControlledInput = ({
  InputLeftElement,
  InputRightElemnt,
  containerStyle,
  ...props
}: ITextInputProps) => {
  const { name, label, rules, defaultValue, ...inputProps } = props;

  const { field, fieldState } = useController({ name, rules, defaultValue });

  const initalFocusRef = useRef(null);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[{ ...containerStyle }, styles.inputContainer]}>
        {InputLeftElement && InputLeftElement}
        <RnTextInput
          style={styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
        />
        {InputRightElemnt && InputRightElemnt}

        {fieldState.error && fieldState.isTouched && (
          <Ionicons name="information-circle-outline" size={20} color="red" />
        )}
      </View>
      {fieldState.error && fieldState.isTouched && (
        <Text
          style={{
            color: "red",
          }}
        >
          {fieldState.error.message}
        </Text>
      )}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    color: "white",
    margin: 20,
    marginLeft: 0,
  },
  container: {
    flex: -1,
    justifyContent: "center",
  },
  input: {
    height: 40,
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: theme.colors.darkText,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: theme.colors.primary[900],
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
