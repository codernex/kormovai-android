import React from "react";
import {
  Box,
  HStack,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { theme } from "../theme";
import HomeButton from "../components/home-button";
import HomeButtonTwo from "../components/home-button-2";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Image
        width={"full"}
        height={"100px"}
        source={require("@/assets/home-header-shape.png")}
        alt=""
        style={{
          objectFit: "cover",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      />
      <ScrollView
        scrollEnabled
        paddingX={10}
        paddingTop={10}
        paddingBottom={50}
        top={-100}
      >
        {/******* Account Information Start *******/}
        <Box
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowOffset: {
              height: 3,
              width: 4,
            },
            position: "relative",
            borderRadius: 10,
            width: "100%",
            height: 180,
          }}
          backgroundColor={theme.colors.white}
        >
          <Box
            flexDirection={"row"}
            justifyContent={"space-between"}
            background={theme.colors.customGray[900]}
            alignItems={"center"}
            marginTop={5}
            left={0}
            paddingX={5}
          >
            <HStack
              style={{
                width: 40,
                height: 40,
                backgroundColor: theme.colors.primary[800],
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                borderWidth: 2,
                borderColor: "white",
              }}
            >
              <MaterialCommunityIcons
                name="camera-plus"
                color={theme.colors.white}
                size={20}
                style={{
                  borderRadius: 5,
                }}
              />
            </HStack>
            <Text fontWeight={600} fontSize={15} marginLeft={2}>
              জুয়েল হোসেন
            </Text>
            <HStack style={{ flex: 1, justifyContent: "flex-end" }}>
              {Array.from({ length: 5 }).map((item, i) => {
                let fillColor: string;
                if (i === 0) {
                  fillColor = "#ffce01";
                } else {
                  fillColor = "#fff";
                }
                return (
                  <MaterialCommunityIcons
                    color={fillColor}
                    key={i}
                    size={18}
                    name="star"
                  />
                );
              })}
            </HStack>
          </Box>
          <VStack alignItems={"center"} marginTop={5}>
            <Text bold color={theme.colors.customGray[600]}>
              - আপনার বর্তমান ব্যালেন্স -
            </Text>
            <Heading color={theme.colors.primary[800]}>৳ ১০০০.০০</Heading>
          </VStack>
          <Box
            width={"100%"}
            height={10}
            position={"absolute"}
            bottom={0}
            backgroundColor={theme.colors.primary[900]}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            alignItems={"center"}
            justifyContent={"space-between"}
            paddingX={5}
            flexDirection={"row"}
          >
            <Box flexDirection={"row"} style={{ gap: 5 }} alignItems={"center"}>
              <View
                style={{
                  width: 25,
                  height: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.colors.lightGreen,
                  borderRadius: 12.5,
                }}
              >
                <Ionicons
                  size={18}
                  name="checkmark-outline"
                  color={theme.colors.white}
                />
              </View>
              <Text bold color={theme.colors.white}>
                অ্যাকাউন্টের ধরণ
              </Text>
            </Box>
            <Box flexDirection={"row"} alignItems={"center"} style={{ gap: 5 }}>
              <Ionicons color={"#ffce01"} name="star" size={18} />
              <Text bold color={theme.colors.white}>
                স্টার
              </Text>
              <Text bold color={theme.colors.white}>
                ১
              </Text>
            </Box>
          </Box>
        </Box>
        {/*******  Account Information End *******/}

        {/*******  Sheba Information End *******/}
        <Text
          borderLeftColor={theme.colors.primary[900]}
          borderLeftWidth={2}
          color={"#565858"}
          mt={6}
          textAlign={"center"}
          borderRightColor={theme.colors.primary[900]}
          borderRightWidth={2}
          fontSize={13}
          underline
          fontFamily={"LiAdoreSemiBold"}
        >
          আপনার প্রয়োজনীয় সেবা সিলেক্ট করুন
        </Text>
        <HStack marginTop={5} justifyContent={"space-between"}>
          <HomeButton
            Icon={({ style }) => (
              <Ionicons name="briefcase-outline" style={style} />
            )}
            onPress={() => navigation.navigate("work")}
            Text={({ style }) => <Text style={style}>কাজ</Text>}
          />
          <HomeButton
            Icon={({ style }) => (
              <MaterialCommunityIcons name="account-supervisor" style={style} />
            )}
            Text={({ style }) => <Text style={style}>রেফার</Text>}
          />
        </HStack>

        <HStack marginTop={6} justifyContent={"space-between"}>
          <HomeButton
            Icon={({ style }) => <FontAwesome name="gift" style={style} />}
            Text={({ style }) => <Text style={style}>প্যাকেজ</Text>}
          />
          <HomeButton
            Icon={({ style }) => (
              <MaterialCommunityIcons name="face-agent" style={style} />
            )}
            Text={({ style }) => <Text style={style}>এজেন্ট</Text>}
          />
        </HStack>
        {/*******  Sheba Information End *******/}

        {/*******  Notice Start *******/}
        <Box
          marginTop={6}
          width={"full"}
          height={100}
          borderRadius={18}
          borderColor={theme.colors.primary[900]}
          borderWidth={2}
        ></Box>
        {/*******  Notice End *******/}

        <HStack marginTop={6} justifyContent={"space-between"}>
          <HomeButton
            Icon={({ style }) => (
              <MaterialCommunityIcons name="account-group" style={style} />
            )}
            Text={({ style }) => <Text style={style}>আমার টিম</Text>}
          />
          <HomeButton
            Icon={({ style }) => <MaterialIcons name="10k" style={style} />}
            Text={({ style }) => <Text style={style}>লটারি</Text>}
          />
        </HStack>

        <HStack marginTop={6} justifyContent={"space-between"}>
          <HomeButtonTwo
            Icon={({ style }) => <Ionicons name="card" style={style} />}
            Text={(props) => <Text {...props}>কার্ড</Text>}
          />
          <HomeButtonTwo
            Icon={({ style }) => <Fontisto name="wallet" style={style} />}
            Text={(props) => (
              <Text
                fontSize={16}
                textBreakStrategy="simple"
                style={{
                  textAlign: "center",
                  lineHeight: 20,
                  color: "white",
                  fontWeight: "500",
                }}
              >{`ফান্ড \nট্রান্সফার`}</Text>
            )}
          />
        </HStack>

        {/*******  Payment History *******/}

        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            borderColor: theme.colors.primary[900],
            borderWidth: 2,
            marginTop: 40,
            marginBottom: 40,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("payment-history")}
        >
          <Text fontSize={20} color={theme.colors.customGray[300]}>
            পেমেন্ট হিস্টোরি
          </Text>
        </TouchableOpacity>
        {/*******  Payment History End *******/}
        <HStack justifyContent={"space-between"}>
          <HomeButton
            Icon={({ style }) => <Fontisto name="ticket-alt" style={style} />}
            Text={({ style }) => <Text style={style}>টিকিট</Text>}
          />
          <HomeButton
            Icon={({ style }) => (
              <MaterialCommunityIcons name="video-image" style={style} />
            )}
            Text={({ style }) => <Text style={style}>মিডিয়া</Text>}
          />
        </HStack>

        <HStack marginTop={6} mb={100} justifyContent={"space-between"}>
          <HomeButton
            Icon={({ style }) => (
              <MaterialCommunityIcons name="hand-heart" style={style} />
            )}
            Text={({ style }) => <Text style={style}>অফার</Text>}
          />
          <HomeButton
            Icon={({ style }) => (
              <MaterialIcons name="support-agent" style={style} />
            )}
            onPress={() => navigation.navigate("support")}
            Text={({ style }) => <Text style={style}>সাপোর্ট</Text>}
          />
        </HStack>
      </ScrollView>
    </View>
  );
};

export default Home;
