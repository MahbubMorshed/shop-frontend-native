import React, { useState } from "react";
import {
  Text,
  Center,
  HStack,
  Button,
  Modal,
  VStack,
  Pressable,
  Image,
} from "native-base";
import Colors from "../colors";
import ButtonT from "./ButtonT";

const OrderInfos = [
  {
    title: "Products",
    price: 123,
    color: "black",
  },
  {
    title: "Shipping",
    price: 23,
    color: "black",
  },
  {
    title: "Tax",
    price: 12,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 158,
    color: "main",
  },
];

const OrderModal = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <Center>
      <ButtonT
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}
      >
        Show Payment & Total
      </ButtonT>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          {/* <Modal.CloseButton /> */}
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfos.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === "main" ? Colors.main : Colors.black}
                    bold
                  >
                    ${i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={3}
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../assets/Images/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              w="full"
              bg={Colors.black}
              mt={2}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => setShowModel(false)}
              _pressed={{ bg: Colors.black }}
            >
              Place An Order
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModal;
