import { theme } from "@/app/theme";
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Box, ScrollView, VStack, Text, Link } from "native-base";
import { StyleSheet } from "react-native";

const Support = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} px={10} pt={10}>
      <Box style={styles.liveChat}>
        <Text fontWeight={"bold"} color={theme.colors.gray[400]} fontSize={20}>
          Live Chat
        </Text>
      </Box>

      <VStack space={5} mt={10} pb={100}>
        <Link href="mailto:support@kormovai.com">
          <VStack space={2} width={"full"}>
            <Text style={styles.supportLabel}>ই-মেইল</Text>
            <Box style={styles.supportButton}>
              <Ionicons name="mail" style={styles.supportIcon} />
              <Text style={styles.supportText}>support@kormovai.com</Text>
            </Box>
          </VStack>
        </Link>

        <Link href="mailto:payment@kormovai.com">
          <VStack space={2} width={"full"}>
            <Text style={styles.supportLabel}>পেমেন্ট</Text>
            <Box style={styles.supportButton}>
              <MaterialIcons name="payments" style={styles.supportIcon} />
              <Text style={styles.supportText}>payment@kormovai.com</Text>
            </Box>
          </VStack>
        </Link>

        <Link href="mailto:report@kormovai.com">
          <VStack space={2} width={"full"}>
            <Text style={styles.supportLabel}>রিপোর্ট</Text>
            <Box style={styles.supportButton}>
              <Octicons name="checklist" style={styles.supportIcon} />
              <Text style={styles.supportText}>report@kormovai.com</Text>
            </Box>
          </VStack>
        </Link>

        <Link href="tel:0969696847">
          <VStack space={2} width={"full"}>
            <Text style={styles.supportLabel}>মোবাইল</Text>
            <Box style={styles.supportButton}>
              <Ionicons name="call" style={styles.supportIcon} />
              <Text style={styles.supportText}>0969696847</Text>
            </Box>
          </VStack>
        </Link>

        <Link href="tel:0969696847">
          <VStack space={2} width={"full"}>
            <Text style={styles.supportLabel}>মোবাইল</Text>
            <Box style={styles.supportButton}>
              <Ionicons name="call" style={styles.supportIcon} />
              <Text style={styles.supportText}>0969696847</Text>
            </Box>
          </VStack>
        </Link>

        <Link href="tel:0969696847">
          <VStack space={2} width={"full"}>
            <Text style={styles.supportLabel}>মোবাইল</Text>
            <Box style={styles.supportButton}>
              <Ionicons name="call" style={styles.supportIcon} />
              <Text style={styles.supportText}>0969696847</Text>
            </Box>
          </VStack>
        </Link>
      </VStack>
    </ScrollView>
  );
};

export default Support;

const styles = StyleSheet.create({
  liveChat: {
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    height: 130,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  supportButton: {
    backgroundColor: theme.colors.gray[200],
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
    columnGap: 10,
  },
  supportIcon: {
    color: theme.colors.primary[900],
    fontSize: 26,
  },
  supportText: {
    color: theme.colors.primary[900],
    lineHeight: 25,
    fontSize: 18,
    fontWeight: "600",
    top: -2,
  },
  supportLabel: {
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.primary[900],
    fontSize: 18,
    color: theme.colors.primary[900],
    fontWeight: "600",
    lineHeight: 25,
  },
});
