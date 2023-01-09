import React, { useState } from "react";
import { Text, Center, HStack, Button, Modal, VStack } from "native-base";
import Colors from "../colors";
import ButtonT from "./ButtonT";
import { useNavigation } from "@react-navigation/native";

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

const PlaceOrderModal = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);

  return (
    <Center>
      <ButtonT
        onPress={() => setShowModel(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        Show Total
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
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => {
                navigation.navigate("Order");
                setShowModel(false);
              }}
              _pressed={{ bg: Colors.main }}
            >
              Place An Order
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModal;
