import React from "react";
import { Center, Heading, Image, Text } from "native-base";
import Colors from "../colors";
import Tabs from "../components/profile/Tabs";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2014/03/25/16/32/user-297330_960_720.png",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Doe
        </Heading>
        <Text italic fontSize={15} isTruncated my={2} color={Colors.white}>
          Joined Jan 1 2022
        </Text>
      </Center>
      {/* Tabs */}
      <Tabs />
    </>
  );
};

export default ProfileScreen;
