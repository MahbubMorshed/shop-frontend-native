import React from "react";
import { Box, VStack, Image, Center } from "native-base";
import Colors from "../colors";
import ButtonT from "../components/ButtonT";

const NotVerifyScreen = () => {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require("../../assets/Images/icon600.png")} />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <ButtonT bg={Colors.black} color={Colors.white}>
          Register
        </ButtonT>
        <ButtonT bg={Colors.white} color={Colors.black}>
          Login
        </ButtonT>
      </VStack>
    </Box>
  );
};

export default NotVerifyScreen;
