import { DocumentPickerAsset } from "expo-document-picker";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  VStack,
} from "native-base";
import { useCallback, useState } from "react";
import { View, Text, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { IDocumentPickerResponse } from "../../interface/documentPicker";
import { Iuser } from "../../interface/user";
import { postRegister } from "../../api/axiosMethod";

const Register = () => {
  const [fileResponse, setFileResponse] = useState([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleRegister = async () => {
    let response
    try {
      const user: Iuser = {
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        username: username,
        name: name,
        lastname: lastName,
      };
    
       
      response = await postRegister(user);

   

    } catch (error: any) {
      console.log(error);
    }
  };

  const selectImage = async () => {
    try {
      const result: IDocumentPickerResponse =
        await DocumentPicker.getDocumentAsync({
          type: "image/*", // Filtra solo imágenes
        });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{ color: "warmGray.50" }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{ color: "warmGray.200" }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          {/* Name Input */}
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input
              value={name}
              onChangeText={(value: string) => setName(value)}
            />
          </FormControl>

          {/* Last Name Input */}
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              value={lastName}
              onChangeText={(value: string) => setLastName(value)}
            />
          </FormControl>

          {/* Username Input */}
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              value={username}
              onChangeText={(value: string) => setUsername(value)}
            />
          </FormControl>

          {/* Email Input */}
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              value={email}
              onChangeText={(value: string) => setEmail(value)}
            />
          </FormControl>

          {/* Password Input */}
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={password}
              onChangeText={(value: string) => setPassword(value)}
            />
          </FormControl>

          {/* Confirm Password Input */}
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input
              type="password"
              value={confirmPassword}
              onChangeText={(value: string) => setConfirmPassword(value)}
            />
          </FormControl>

          {/* Photo URL Input */}

          <FormControl>
            <FormControl.Label>Photo</FormControl.Label>
            <Button onPress={selectImage}>Upload Photo</Button>
          </FormControl>
          {/* Submit Button */}
          <Button mt="2" colorScheme="indigo" onPress={handleRegister}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Register;
