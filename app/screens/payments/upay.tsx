import { Button, TextInput } from "@/app/components";
import { theme } from "@/app/theme";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Box, HStack, ScrollView, Text, VStack, View } from "native-base";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const Upay = () => {
  const form = useForm({
    defaultValues: {
      method: "upay",
      accountNumber: "",
      accountType: "",
      ammount: "",
      password: "",
    },
  });

  const onSubmit = () => {};
  return (
    <ScrollView px={10} pt={12}>
      <AccountInfo />
      <FormProvider {...form}>
        <VStack mt={8} space={8}>
          <TextInput
            variant="outline"
            label="উপায় নাম্বার "
            name="accountNumber"
            keyboardType="number-pad"
          />
          <TextInput
            variant="outline"
            label="টাকার পরিমান"
            name="ammount"
            keyboardType="number-pad"
          />
          <TextInput
            variant="outline"
            label="পার্সোনাল/এজেন্ট "
            name="accountType"
          />
          <TextInput variant="outline" label="পাসওয়ার্ড" name="password" />
          <HStack justifyContent={"center"}>
            <Button onPress={form.handleSubmit(onSubmit)} title="সাবমিট" />
          </HStack>
        </VStack>
      </FormProvider>
    </ScrollView>
  );
};

export default Upay;

const AccountInfo = () => {
  return (
    <VStack space={3}>
      <HStack
        borderColor={theme.colors.primary[900]}
        borderWidth={1}
        rounded={5}
        alignItems={"center"}
      >
        <Box width={"80px"} alignItems={"center"}>
          <Ionicons name="call" color={theme.colors.primary[900]} size={24} />
        </Box>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          background={theme.colors.primary[900]}
          flex={1}
        >
          <Text color={"white"} fontSize={24}>
            017xxxxxxxx
          </Text>
        </Box>
      </HStack>
      <HStack
        borderColor={theme.colors.primary[900]}
        borderWidth={1}
        rounded={5}
        alignItems={"center"}
      >
        <Box width={"80px"} alignItems={"center"}>
          <FontAwesome
            name="address-card"
            color={theme.colors.primary[900]}
            size={24}
          />
        </Box>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          background={theme.colors.primary[900]}
          flex={1}
        >
          <Text color={"white"} fontSize={24}>
            017xxxxxxxx
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
};
