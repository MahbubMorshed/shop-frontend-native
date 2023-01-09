import React from "react";
import { Box, Text, Center, ScrollView, HStack, Button } from "native-base";
import Colors from "../colors";
import CartEmpty from "../components/CartEmpty";
import CartItems from "../components/CartItems";
import ButtonT from "../components/ButtonT";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* if cart is empty */}
      {/* <CartEmpty /> */}
      {/* cart items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $345
            </Button>
          </HStack>
        </Center>
        {/* CheckOut */}
        <Center px={5}>
          <ButtonT
            bg={Colors.black}
            color={Colors.white}
            mt={10}
            onPress={() => navigation.navigate("Shipping")}
          >
            Checkout
          </ButtonT>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
