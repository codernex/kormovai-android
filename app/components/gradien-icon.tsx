import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
type IconType = React.ComponentProps<typeof Ionicons>;

interface IGradientIcon extends IconType {}

type CompType = IGradientIcon & LinearGradientProps;

const GradientIcon: React.FC<CompType> = (props) => {
  return (
    <MaskedView maskElement={<Ionicons {...props} />}>
      <LinearGradient
        colors={props.colors}
        start={props.start}
        end={props.end}
        locations={props.locations}
      >
        <Ionicons
          {...props}
          style={{
            opacity: 0,
          }}
        />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientIcon;
