import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import React from "react";
import Colors from "../../colors";
import ButtonT from "../ButtonT";

const Inputs = [
  {
    label: "Username",
    type: "text",
  },
  {
    label: "Email",
    type: "text",
  },
  {
    label: "New Password",
    type: "password",
  },
  {
    label: "Confirm Password",
    type: "password",
  },
];

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
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
                borderWidth={0.2}
                bg={Colors.subGreen}
                borderColor={Colors.main}
                py={4}
                type={i.type}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <ButtonT bg={Colors.main} color={Colors.white}>
            Update Profile
          </ButtonT>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
