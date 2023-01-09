import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  ScrollView,
  HStack,
  Spacer,
} from "native-base";
import Colors from "../colors";
import Rating from "../components/Rating";
import NumericInput from "react-native-numeric-input";
import ButtonT from "../components/ButtonT";
import Review from "../components/Review";
import { useNavigation } from "@react-navigation/native";

const SingleProductScreen = ({ route }) => {
  const navigation = useNavigation();
  const [value, setValue] = useState(0);
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <>
              <NumericInput
                value={value}
                totalWidth={140}
                totalHeight={35}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.main}
                rounded
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              />
            </>
          ) : (
            <Heading bold color={Colors.white} italic fontSize={12}>
              Out Of Stock
            </Heading>
          )}

          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <ButtonT
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={() => navigation.navigate("Cart")}
        >
          Add To Cart
        </ButtonT>
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
