import React from "react";
import {
  Box,
  Heading,
  Image,
  Pressable,
  Text,
  ScrollView,
  Flex,
} from "native-base";
import Colors from "../colors";
import { products } from "../data/products";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

const HomeProducts = () => {
  const navigation = useNavigation();
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((product) => (
          <Pressable
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
            onPress={() => navigation.navigate("Single", product)}
          >
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              mt={3}
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ${product.price}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.name}
              </Text>
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
