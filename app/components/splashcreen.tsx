import { View, Text } from "react-native";
import React, { SetStateAction } from "react";
import LottieView from "lottie-react-native";

const SplashScreen = ({
  setAppIsReady,
}: {
  setAppIsReady: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        margin: 0,
      }}
    >
      <LottieView
        source={require("@/assets/animation.json")}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          setAppIsReady(true);
        }}
      />
    </View>
  );
};

export default SplashScreen;
