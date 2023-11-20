import React, { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Checkbox, HStack, ScrollView, Text, VStack } from "native-base";
import { Image } from "expo-image";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { theme } from "@/app/theme";
import TextInput from "@/app/components/text-input";
import GradientIcon from "@/app/components/gradien-icon";
import {
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ToastAndroid, TouchableOpacity } from "react-native";
import Button from "@/app/components/button";
import { useNavigation } from "@react-navigation/native";
import Spacer from "@/app/components/spacer";
import { useSignUpFlow } from "@/app/store/useSignUpFlow";
import DividerText from "@/app/components/DividerText";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
  name: z.string().min(5, { message: "অনুগ্রহ করে নাম লিখো" }),
  mobile: z
    .string()
    .min(11, { message: "অনুগ্রহ করে ১১ সংখ্যার মোবাইল নম্বর দিন" }),
  nid: z
    .string()
    .min(10, { message: "অনুগ্রহ করে নতুন জাতীয় পরিচয়পত্র লিখো" }),
  dob: z.string(),
  fatherName: z.string().min(5, {
    message: "অনুগ্রহ করে পিতার নাম লিখো",
  }),
  motherName: z.string().min(5, {
    message: "অনুগ্রহ করে মাতার নাম লিখো",
  }),
  occuption: z.string().min(2, { message: "অনুগ্রহ করে আপনার পেশা দিন" }),
  email: z.string().email().optional(),
  referCode: z.string().min(6, { message: "অনুগ্রহ করে রেফার কোড দিন " }),
  password: z.string().min(6, { message: "অনুগ্রহ করে পাসওয়ার্ড দিন " }),
  confirmPassword: z
    .string()
    .min(6, { message: "অনুগ্রহ করে কনফার্ম পাসওয়ার্ড দিন " }),
  toc: z.boolean({
    description: "অনুগ্রহ করে সাথে যুক্ত করো",
  }),
});
const Header = () => {
  return (
    <HStack px={5}>
      <Image
        source={require("@/assets/logo.png")}
        style={{
          width: 60,
          height: 60,
        }}
      />
    </HStack>
  );
};

const Steps: React.FC<IStep> = ({ ...props }) => {
  const { step } = useSignUpFlow();
  return (
    <Box>
      {step === "step-one" ? <StepOne {...props} /> : <StepTwo {...props} />}
    </Box>
  );
};

const isTouched = (arr: string[], formState: any): boolean => {
  return arr.every((item) => formState[item]);
};

const StepOne: React.FC<IStep> = ({ formState }) => {
  const navigation = useNavigation();
  const { setStep } = useSignUpFlow();

  const tocuhed = useMemo(() => {
    return isTouched(
      ["name", "mobile", "dob", "fatherName", "motherName", "nid"],
      formState.touchedFields
    );
  }, [formState]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} px={10}>
      <Text
        fontSize={24}
        textAlign={"center"}
        fontFamily={"LiZahir"}
        color={theme.colors.secondary[900]}
      >
        {`নতুন অ্যাকাউন্ট তৈরি \nকরুন !!`}
      </Text>
      <Image
        source={require("@/assets/brand/signup1.png")}
        contentFit="contain"
        style={{
          width: "auto",
          height: 200,
        }}
      />

      <VStack space={5}>
        <TextInput
          InputLeftElement={
            <GradientIcon
              name="person"
              colors={[
                theme.colors.gradient.color1,
                theme.colors.gradient.color2,
              ]}
              size={20}
            />
          }
          name="name"
          placeholder="পুরো নাম"
          placeholderTextColor={theme.colors.gray[500]}
          containerStyle={{
            borderRadius: 15,
          }}
        />

        <TextInput
          InputLeftElement={
            <GradientIcon
              name="call"
              colors={[
                theme.colors.gradient.color1,
                theme.colors.gradient.color2,
              ]}
              size={20}
            />
          }
          name="mobile"
          placeholder="মোবাইল নম্বর"
          placeholderTextColor={theme.colors.gray[500]}
          containerStyle={{
            borderRadius: 15,
          }}
        />

        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <FontAwesome
                  name="address-card"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <FontAwesome
                  name="address-card"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="nid"
          placeholder="আইডি কার্ড নম্বর"
          placeholderTextColor={theme.colors.gray[500]}
          containerStyle={{
            borderRadius: 15,
          }}
        />

        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <FontAwesome
                  name="calendar-plus-o"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <FontAwesome
                  name="calendar-plus-o"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="dob"
          placeholder="আপনার জন্ম-তারিখ"
          placeholderTextColor={theme.colors.gray[500]}
          containerStyle={{
            borderRadius: 15,
          }}
        />

        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <FontAwesome
                  name="user-plus"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <FontAwesome
                  name="user-plus"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="fatherName"
          placeholder="আপনার বাবার নাম"
          placeholderTextColor={theme.colors.gray[500]}
          containerStyle={{
            borderRadius: 15,
          }}
        />
        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <FontAwesome
                  name="user-plus"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <FontAwesome
                  name="user-plus"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="motherName"
          placeholder="আপনার মায়ের নাম"
          placeholderTextColor={theme.colors.gray[500]}
          containerStyle={{
            borderRadius: 15,
          }}
        />
      </VStack>
      <HStack mt={10} justifyContent={"space-between"}>
        <Button title="লগ ইন " onPress={() => navigation.navigate("login")} />
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {
            if (tocuhed && Object.entries(formState.errors).length === 0) {
              setStep("step-two");
            } else {
              ToastAndroid.show(
                "অনুগ্রহ করে সকল তথ্য প্রদান করুন ",
                ToastAndroid.SHORT
              );
            }
          }}
        >
          <Text fontSize={20} color={theme.colors.secondary[900]} underline>
            পরবর্তী
          </Text>
          <Ionicons size={20} name="chevron-forward-circle" />
        </TouchableOpacity>
      </HStack>
      <Text textAlign={"center"} mt={10}>
        পরবর্তী পেজে গিয়ে আরও তথা দিয়ে আমাদের সহযোগীতা করুন.........
      </Text>
      <Spacer size={80} />
    </ScrollView>
  );
};

interface IStep extends UseFormReturn<any, any, undefined> {}
const StepTwo: React.FC<IStep> = ({ ...props }) => {
  const navigation = useNavigation();

  const onSubmit: SubmitHandler<z.infer<typeof signUpSchema>> = (data: any) => {
    console.log(data);
    console.log(props.formState.errors);
  };

  return (
    <ScrollView px={10} showsVerticalScrollIndicator={false}>
      <Text
        fontSize={24}
        textAlign={"center"}
        fontFamily={"LiZahir"}
        color={theme.colors.secondary[900]}
      >
        {`নতুন অ্যাকাউন্ট তৈরি \nকরুন !!`}
      </Text>
      <Image
        source={require("@/assets/brand/signup1.png")}
        contentFit="contain"
        style={{
          width: "auto",
          height: 200,
        }}
      />
      <DividerText title="আরোও তথ্য দিন" />

      <VStack my={5} space={4}>
        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <FontAwesome
                  name="briefcase"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <FontAwesome
                  name="briefcase"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="occuption"
          placeholder="আপনার পেশা"
        />
        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <FontAwesome
                  name="envelope-open"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <FontAwesome
                  name="envelope-open"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="email"
          placeholder="ই-মেইল"
        />
        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <FontAwesome
                  name="share"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <FontAwesome
                  name="share"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="referCode"
          placeholder="কর্মভাই আইডি - আপলাইন"
        />
        <DividerText title="পাসওয়ার্ড সেট করুন" />
        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <FontAwesome5
                  name="key"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <FontAwesome5
                  name="key"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="password"
          placeholder="পাসওয়ার্ড দিন"
        />
        <TextInput
          InputLeftElement={
            <MaskedView
              maskElement={
                <Foundation
                  name="refresh"
                  color={theme.colors.gradient.color1}
                  size={20}
                />
              }
            >
              <LinearGradient
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
              >
                <Foundation
                  name="refresh"
                  size={20}
                  style={{
                    opacity: 0,
                  }}
                />
              </LinearGradient>
            </MaskedView>
          }
          name="confirmPassword"
          placeholder="পুনরায় পাসওয়ার্ড দিন"
        />
      </VStack>
      <HStack my={5} alignItems={"center"} space={5}>
        <Button
          style={{ borderRadius: 15 }}
          textStyle={{ textAlign: "center" }}
          title="লগ ইন "
          onPress={() => navigation.navigate("login")}
        />
        <VStack>
          <Controller
            control={props.control}
            render={({ field }) => (
              <Checkbox
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                }}
                aria-label="Terms And Condition"
              />
            )}
            name="toc"
          />
          <Text>
            আমি বিস্তারিত{" "}
            <Text
              fontSize={14}
              bold
              underline
              color={theme.colors.primary[900]}
            >
              শর্তাবলী
            </Text>{" "}
            মেনে চলবো
          </Text>
        </VStack>
      </HStack>
      <Button
        style={{ borderRadius: 15 }}
        textStyle={{ textAlign: "center" }}
        title="সাবমিট করুন "
        onPress={props.handleSubmit(onSubmit)}
      />
      <Spacer size={70} />
    </ScrollView>
  );
};

const SignUp = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      mobile: "",
      nid: "",
      dob: "",
      fatherName: "",
      motherName: "",
      occuption: "",
      email: "",
      referCode: "",
      password: "",
      confirmPassword: "",
      toc: false,
    },
    mode: "onTouched",
  });
  return (
    <SafeAreaView>
      <Header />
      <FormProvider {...form}>
        <Steps {...form} />
      </FormProvider>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
});
