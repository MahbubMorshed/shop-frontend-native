import React from "react";
import { Box, Heading, ScrollView } from "native-base";
import Colors from "../colors";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import OrderInfo from "../components/OrderInfo";
import OrderItem from "../components/OrderItem";
import PlaceOrderModal from "../components/PlaceOrderModal";

const PlaceOrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="Customer"
            subTitle="Admin Doe"
            text="admin@example.com"
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="Shipping Info"
            subTitle="Shipping: Bangladesh"
            text="Payment Method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="Delivery To"
            subTitle="Address:"
            text="Fulbari Bogura"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          Products
        </Heading>
        <OrderItem />
        {/* Total */}
        <PlaceOrderModal />
      </Box>
    </Box>
  );
};

export default PlaceOrderScreen;
