import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constans";
import { Link } from "@react-navigation/native";
import { Box, Text, Checkbox, useTheme, Heading, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import {
  useForm,
  Controller,
  SubmitHandler,
  FormProvider,
} from "react-hook-form";
import TextInput from "@/app/components/text-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  mobile: z.string().min(11),
  userId: z.string(),
  password: z.string().min(6),
});
const Login = () => {
  const themes = useTheme();
  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      mobile: "",
      userId: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = (data) => {
    console.log(data);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Box style={styles.shape} aria-label="" />
      <View>
        <Image
          style={styles.logo}
          source={require("@/assets/logo-login.png")}
          contentFit="cover"
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.top}>
          <Heading style={styles.welcomeText}>স্বাগতম !!</Heading>
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              style={{
                width: 180,
                height: 180,
                objectFit: "cover",
              }}
              contentFit="contain"
              source={require("@/assets/welcome-login.png")}
            />
          </View>
        </View>
        <View style={styles.form}>
          <FormProvider {...form}>
            <TextInput
              name="mobile"
              rules={{ required: true }}
              keyboardType="number-pad"
              placeholder="মোবাইল নম্বর"
              containerStyle={{
                borderRadius: 14,
                backgroundColor: themes.colors.gray[500],
              }}
              InputLeftElement={
                <Ionicons name="call" size={20} color={"#1ba5b3"} />
              }
              placeholderTextColor={themes.colors.gray[900]}
            />
            <TextInput
              placeholder="কর্ম ভাই আইডি"
              keyboardType="numbers-and-punctuation"
              placeholderTextColor={themes.colors.gray[900]}
              name="userId"
              rules={{ required: true }}
              containerStyle={{
                borderRadius: 14,
                backgroundColor: themes.colors.gray[500],
                paddingLeft: 0,
              }}
              InputLeftElement={
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={require("@/assets/logo-login.png")}
                  contentFit="cover"
                />
              }
            />
            <TextInput
              name="password"
              placeholder="পাসওয়ার্ড"
              secureTextEntry
              rules={{ required: true }}
              keyboardType="numbers-and-punctuation"
              placeholderTextColor={themes.colors.gray[900]}
              containerStyle={{
                borderRadius: 14,
                backgroundColor: themes.colors.gray[500],
                paddingLeft: 0,
              }}
              InputLeftElement={
                <Ionicons
                  name="key-outline"
                  size={20}
                  style={{ marginLeft: 10 }}
                  color={"#1ba5b3"}
                />
              }
            />

            <TouchableOpacity
              style={styles.loginButton}
              onPress={form.handleSubmit(onSubmit)}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                লগ ইন করুন
              </Text>
            </TouchableOpacity>
          </FormProvider>
        </View>

        <VStack
          style={{
            rowGap: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Checkbox value="checked" />
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                পাসওয়ার্ড মনে রাখুন
              </Text>
            </View>
            <Link to={"/home"} style={{ fontSize: 14, fontWeight: "bold" }}>
              পাসওয়ার্ড ভুলে গেছেন?
            </Link>
          </View>
          <Text
            style={{
              textAlign: "center",
            }}
          >
            আপনার অ্যাকাউন্ট চালানোর জন্য অবশ্যই বিস্তারিত
            <Text underline>
              <Link
                style={{
                  color: Colors.secondary,
                  fontWeight: "bold",
                  fontSize: 16,
                  textDecorationStyle: "solid",
                  paddingHorizontal: 5,
                }}
                to={"/toc"}
              >
                {" শর্তাবলী "}
              </Link>
            </Text>
            মেনে চলতে হবে
          </Text>
          <Text style={{ textAlign: "center" }}>
            নতুন
            <Text underline>
              <Link
                style={{
                  color: Colors.secondary,
                  fontWeight: "bold",
                  fontSize: 16,
                  paddingHorizontal: 5,
                }}
                to={"/"}
              >
                {" অ্যাকাউন্ট "}
              </Link>
            </Text>
            তৈরী করুন!
          </Text>
        </VStack>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: Dimensions.get("screen").height,
  },
  top: {
    zIndex: 10,
  },
  shape: {
    height: 500,
    width: 500,
    backgroundColor: "#baf7eb",
    borderRadius: 250,
    position: "absolute",
    top: -250,
    left: 180,
    transform: [{ translateX: -250 }],
    zIndex: -100,
  },
  logo: {
    width: 80,
    height: 80,
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 30,
    color: Colors.primary,
    fontWeight: "bold",
  },
  form: {
    rowGap: 10,
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  loginButton: {
    backgroundColor: Colors.secondary,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 10,
  },
});
