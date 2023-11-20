import { theme } from "@/app/theme";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Box, HStack, Link, ScrollView, Text, VStack } from "native-base";
import React from "react";

const Media = () => {
  return (
    <ScrollView px={10}>
      <Text
        textAlign={"center"}
        color={theme.colors.primary[900]}
        bold
        fontSize={20}
        mt={10}
      >
        নোটিশ
      </Text>

      <Box
        width={"90%"}
        borderWidth={1}
        mx={"auto"}
        borderColor={theme.colors.gray[400]}
        height={"130px"}
        borderRadius={5}
        mt={2}
      ></Box>

      <VStack space={3} pt={10}>
        <SocialButton icon="telegram" title="টেলিগ্রাম" />
        <SocialButton icon="youtube" title="ইউটিউব" />
        <SocialButton icon="facebook" title="ফেসবুক পেজ" />
        <SocialButton icon={"users"} title="ফেসবুক গ্রুপ" />
        <SocialButton icon={"tiktok"} title="টিকটক" />
      </VStack>
    </ScrollView>
  );
};

export default Media;

interface ISocialButton {
  icon: any;
  title: string;
  url?: string;
}
const SocialButton: React.FC<ISocialButton> = ({ icon, title, url }) => {
  return (
    <HStack alignItems={"center"} space={5}>
      <HStack
        flex={1}
        borderWidth={1}
        borderColor={theme.colors.primary[900]}
        px={15}
        style={{
          paddingVertical: 8,
        }}
        borderRadius={5}
        space={5}
      >
        <Box width={"12%"}>
          <FontAwesome5
            style={{
              fontSize: 24,
            }}
            name={icon}
            color={theme.colors.primary[900]}
          />
        </Box>
        <Text
          textAlign={"left"}
          bold
          fontSize={15}
          flex={1}
          color={theme.colors.primary[900]}
        >
          {title}
        </Text>
      </HStack>
      <Link
        style={{
          backgroundColor: theme.colors.primary[900],
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
          borderRadius: 5,
        }}
        isUnderlined={false}
        href={url}
      >
        <Text color={"white"}>জয়েন</Text>
      </Link>
    </HStack>
  );
};
