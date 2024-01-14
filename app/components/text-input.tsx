import {
  View,
  TextInput as RnTextInput,
  TextInputProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Text } from "native-base";
import React, { ReactNode } from "react";
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
  labelStyle?: TextStyle;
  variant?: "outline" | "default";
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
  const {
    name,
    label,
    rules,
    defaultValue,
    variant = "default",
    ...inputProps
  } = props;

  const { field, fieldState } = useController({ name, rules, defaultValue });

  return (
    <View style={styles.container}>
      {label && (
        <Text
          style={[
            {
              color: theme.colors.primary[900],
              fontSize: 20,
              lineHeight: 28,
              textAlign: "center",
              marginVertical: 8,
            },
            props.labelStyle,
            variant === "outline"
              ? {
                  position: "absolute",
                  top: -22,
                  left: 20,
                  backgroundColor: "#f0f0f0",
                  zIndex: 10,
                  paddingHorizontal: 5,
                  fontSize: 16,
                }
              : {},
          ]}
        >
          {label}
        </Text>
      )}
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
    borderWidth: 2,
    borderColor: theme.colors.primary[900],
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
