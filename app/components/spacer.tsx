import React from "react";
import { Box } from "native-base";

type ISize = 20 | 30 | 40 | 50;

const Spacer = ({ size }: { size: ISize }) => {
  return (
    <Box
      style={{
        marginVertical: size,
      }}
    />
  );
};

export default Spacer;