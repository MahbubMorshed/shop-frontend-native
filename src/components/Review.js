import React, { useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  FormControl,
  CheckIcon,
  TextArea,
  Select,
} from "native-base";
import Colors from "../colors";
import Rating from "./Rating";
import Message from "./notifications/Message";
import ButtonT from "./ButtonT";

const Review = () => {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Review
      </Heading>
      <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"No Review"}
      />
      {/* review */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Nov 23 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
          }
        />
      </Box>
      {/* Write Review */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          Review This Products
        </Heading>
        <VStack>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Rating
            </FormControl.Label>
            {/* <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select> */}
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This product is good ...."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
            />
          </FormControl>
          <ButtonT bg={Colors.main} color={Colors.white}>
            Submit
          </ButtonT>
          {/* if not user not login */}
          {/* <Message
            color={Colors.white}
            bg={Colors.black}
            size={10}
            children={"Please 'login' to review this product"}
          /> */}
        </VStack>
      </Box>
    </Box>
  );
};

export default Review;
