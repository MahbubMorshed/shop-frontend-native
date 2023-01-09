import React from "react";
import {
  Box,
  Heading,
  VStack,
  Input,
  Image,
  Button,
  Pressable,
  Text,
} from "native-base";
import Colors from "../colors";
import { MaterialIcons, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/Images/login.jpg")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>Register</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <FontAwesome5 name="user-alt" size={24} color="black" />
            }
            variant="underlined"
            placeholder="John Doe"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.main}
          />
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.main}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="********"
            w="70%"
            pl={2}
            color={Colors.main}
            type="password"
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{ bg: Colors.main }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => navigation.navigate("Bottom")}
        >
          Register
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>Signup</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default RegisterScreen;
