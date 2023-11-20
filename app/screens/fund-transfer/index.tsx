import React from "react";
import { Box, HStack, ScrollView, Text, VStack } from "native-base";
import { theme } from "@/app/theme";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Spacer from "@/app/components/spacer";
import TextInput from "@/app/components/text-input";
import GradientIcon from "@/app/components/gradien-icon";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import Button from "@/app/components/button";

const fundTransferSchema = z.object({
  mobile: z.string().min(11, { message: "মোবাইল নাম্বার দিন " }),
  userId: z.string(),
  password: z
    .string()
    .min(6, { message: "পাসওয়ার্ড দিন (সর্বনিম্ন  ৬ সংখ্যা )" }),
  amount: z
    .string()
    .regex(/^(?!0).*/, { message: "টাকার পরিমাণ দিন  (সর্বনিম্ন ১০০ টাকা  )" })
    .min(3, { message: "টাকার পরিমাণ দিন  (সর্বনিম্ন ১০০ টাকা  )" }),
});
const FundTransfer = () => {
  const form = useForm<z.infer<typeof fundTransferSchema>>({
    defaultValues: {
      amount: "",
      mobile: "",
      userId: "",
      password: "",
    },
    resolver: zodResolver(fundTransferSchema),
  });

  const submit: SubmitHandler<z.infer<typeof fundTransferSchema>> = async (
    data
  ) => {
    console.log(data);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box
        width={"280px"}
        height={"120px"}
        borderWidth={2}
        borderColor={theme.colors.primary[900]}
        mt={"50px"}
        mx={"auto"}
        borderRadius={10}
      ></Box>
      <Spacer size={15} />
      <HStack
        justifyContent={"space-between"}
        alignItems={"center"}
        px={5}
        space={2}
      >
        <Box height={0.5} background={theme.colors.gray[300]} flex={1} />
        <Text
          textAlign={"center"}
          fontSize={12}
          color={theme.colors.gray[500]}
          flex={1}
        >
          ফান্ড ট্রান্সফারের তথ্য দিন
        </Text>
        <Box height={0.5} background={theme.colors.gray[300]} flex={1} />
      </HStack>
      <FormProvider {...form}>
        <VStack space={3} px={10}>
          <TextInput
            InputLeftElement={
              <GradientIcon
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
                name={"call"}
                size={16}
              />
            }
            keyboardType="number-pad"
            name="mobile"
            placeholder="মোবাইল নম্বর"
            inputMode="numeric"
            placeholderTextColor={theme.colors.gray[500]}
            containerStyle={{
              borderRadius: 15,
            }}
          />
          <TextInput
            InputLeftElement={
              <Image
                source={require("@/assets/logo-login.png")}
                style={{
                  width: 30,
                  height: 30,
                  marginLeft: -5,
                  marginRight: -5,
                }}
              />
            }
            name="userId"
            placeholder="কর্ম ভাই আইডি"
            placeholderTextColor={theme.colors.gray[500]}
            containerStyle={{
              borderRadius: 15,
            }}
          />
          <TextInput
            InputLeftElement={
              <GradientIcon
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
                name={"key-outline"}
                size={16}
              />
            }
            secureTextEntry
            name="password"
            placeholder="পাসওয়ার্ড"
            placeholderTextColor={theme.colors.gray[500]}
            containerStyle={{
              borderRadius: 15,
            }}
          />
        </VStack>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          px={5}
          space={2}
          mt={3}
          mb={3}
        >
          <Box height={0.5} background={theme.colors.gray[300]} flex={1} />
          <Text
            textAlign={"center"}
            fontSize={12}
            color={theme.colors.gray[500]}
            flex={1}
          >
            অবশ্যই টাকার পরিমান দিন
          </Text>
          <Box height={0.5} background={theme.colors.gray[300]} flex={1} />
        </HStack>
        <VStack px={10} space={3}>
          <TextInput
            InputLeftElement={
              <GradientIcon
                colors={[
                  theme.colors.gradient.color1,
                  theme.colors.gradient.color2,
                ]}
                start={[0.3, 0.4]}
                name={"key-outline"}
                size={16}
              />
            }
            name="amount"
            placeholder="টাকার পরিমাণ"
            placeholderTextColor={theme.colors.gray[500]}
            containerStyle={{
              borderRadius: 15,
            }}
            inputMode="numeric"
            keyboardType="number-pad"
          />
        </VStack>
        <HStack justifyContent={"center"} mt={20}>
          <Button
            onPress={form.handleSubmit(submit)}
            style={{
              paddingHorizontal: 20,
            }}
            title="সাবমিট"
          />
        </HStack>
      </FormProvider>
    </ScrollView>
  );
};

export default FundTransfer;
