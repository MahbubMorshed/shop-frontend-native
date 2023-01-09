import React from "react";
import {
  Box,
  VStack,
  Image,
  Text,
  Center,
  ScrollView,
  HStack,
} from "native-base";
import Colors from "../colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import ButtonT from "../components/ButtonT";
import { useNavigation } from "@react-navigation/native";

const paymentMethods = [
  {
    image: require("../../assets/Images/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/Images/paypal.png"),
    alt: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/Images/paypal.png"),
    alt: "googlepay",
    icon: "fontAwesome",
  },
];

const PaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.subGreen} fontSize={14} bold>
          Payment Method
        </Text>
      </Center>
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {paymentMethods.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                rounded={10}
              >
                <Box>
                  <Image
                    source={i.image}
                    alt={i.alt}
                    resizeMode="contain"
                    justifyContent="space-between"
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}

            <ButtonT
              bg={Colors.main}
              color={Colors.white}
              mt={5}
              onPress={() => navigation.navigate("Placeorder")}
            >
              Place A Order
            </ButtonT>
            <Text italic textAlign="center">
              Payment method is <Text bold>Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
