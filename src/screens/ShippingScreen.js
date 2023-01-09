import React from "react";
import {
  Box,
  VStack,
  Input,
  Text,
  Center,
  ScrollView,
  FormControl,
} from "native-base";
import Colors from "../colors";
import ButtonT from "../components/ButtonT";
import { useNavigation } from "@react-navigation/native";

const ShippingInputs = [
  {
    label: "Enter City",
    type: "text",
  },
  {
    label: "Enter Country",
    type: "text",
  },
  {
    label: "Enter Postal Code",
    type: "text",
  },
  {
    label: "Enter Address",
    type: "text",
  },
];

const ShippingScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          Delivery Address
        </Text>
      </Center>
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  type={i.type}
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <ButtonT
              bg={Colors.main}
              color={Colors.white}
              mt={5}
              onPress={() => navigation.navigate("Checkout")}
            >
              Continue
            </ButtonT>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
