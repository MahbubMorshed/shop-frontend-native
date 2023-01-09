import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  Input,
  Image,
  Pressable,
  Center,
} from "native-base";
import Colors from "../colors";
import { FontAwesome } from "@expo/vector-icons";
import ButtonT from "./ButtonT";

const CartEmpty = () => {
  return (
    <Box flex={1} px={2}>
      <Center h="90%">
        <Center w={200} h={200} bg={Colors.white} rounded="full">
          <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
        </Center>
        <Text color={Colors.main} bold mt={5}>
          Cart is Empty
        </Text>
      </Center>
      <ButtonT bg={Colors.black} color={Colors.white}>
        Start Shopping
      </ButtonT>
    </Box>
  );
};

export default CartEmpty;
