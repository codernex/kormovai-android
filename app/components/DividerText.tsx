import { Box, Divider, HStack, Text, IStackProps } from "native-base";
import React from "react";
import { theme } from "../theme";

interface DividerTextProps extends IStackProps {
  title: string;
}
const DividerText: React.FC<DividerTextProps> = ({ title, ...props }) => {
  return (
    <HStack alignItems={"center"} {...props}>
      <Box flex={1}>
        <Divider />
      </Box>
      <Text color={theme.colors.gray[400]} mx={5}>
        {title}
      </Text>
      <Box flex={1}>
        <Divider />
      </Box>
    </HStack>
  );
};

export default DividerText;
