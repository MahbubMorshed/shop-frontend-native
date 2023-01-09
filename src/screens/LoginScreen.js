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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
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
        <Heading>Login</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
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
          Login
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.deepestGray}>Signup</Text>
        </Pressable>
      </Box>
    </Box>
  );
};

export default LoginScreen;
