import React from "react";
import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import Colors from "../../colors";

const Order = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              9888776
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              Paid
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              JAN 02 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.white,
              }}
              _pressed={{
                bg: Colors.main,
              }}
            >
              $598
            </Button>
          </HStack>
        </Pressable>
        {/* Not Paid */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              9888776
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              Not Paid
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              DEC 02 2021
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{
                color: Colors.red,
              }}
              _pressed={{
                bg: Colors.red,
              }}
            >
              $234
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Order;
