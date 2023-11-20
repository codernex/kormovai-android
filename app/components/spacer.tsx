import React from "react";
import { Box } from "native-base";

type ISize = 15 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

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
