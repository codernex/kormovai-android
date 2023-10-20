import Spacer from "@/app/components/spacer";
import TextInput from "@/app/components/text-input";
import { theme } from "@/app/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Image } from "expo-image";
import { Box, Container, HStack, Text, VStack } from "native-base";
import { FormProvider, useForm } from "react-hook-form";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { z } from "zod";

const depositSchema = z.object({
  amount: z.number().min(1),
});

export default function Deposit() {
  const form = useForm<z.infer<typeof depositSchema>>({
    defaultValues: {
      amount: 0,
    },
    resolver: zodResolver(depositSchema),
  });
  return (
    <SafeAreaView>
      <Box
        style={{
          alignItems: "center",
        }}
        width={"full"}
      >
        {/******* Notice Start *******/}

        <Box
          width={"4/5"}
          height={120}
          borderWidth={2}
          borderRadius={20}
          marginTop={"80px"}
          borderColor={theme.colors.primary[900]}
        ></Box>
        <Container alignItems={"center"}>
          <HStack width={"full"} mt={30} justifyContent={"space-between"}>
            <VStack
              borderWidth={2}
              borderColor={theme.colors.primary[900]}
              width={90}
              height={90}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={15}
            >
              <Image
                source={require("@/assets/bkash.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text textAlign={"center"} fontSize={20} lineHeight={30}>
                বিকাশ
              </Text>
            </VStack>
            <VStack
              borderWidth={2}
              borderColor={theme.colors.primary[900]}
              width={90}
              height={90}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={15}
            >
              <Image
                source={require("@/assets/bkash.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text textAlign={"center"} fontSize={20} lineHeight={30}>
                নগদ
              </Text>
            </VStack>
            <VStack
              borderWidth={2}
              borderColor={theme.colors.primary[900]}
              width={90}
              height={90}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={15}
            >
              <Image
                source={require("@/assets/bkash.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text textAlign={"center"} fontSize={20} lineHeight={30}>
                ব্যাংক
              </Text>
            </VStack>
          </HStack>
          <Spacer size={20} />
          <FormProvider {...form}>
            <TextInput
              containerStyle={{
                width: "100%",
                borderRadius: 10,
              }}
              name="amount"
              label="টাকার পরিমাণ "
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button}>
              <Text>পরবর্তী</Text>
            </TouchableOpacity>
          </FormProvider>
        </Container>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary[900],
  },
});
