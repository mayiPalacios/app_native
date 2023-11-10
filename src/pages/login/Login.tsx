import React from "react";
import { styles } from "../../style/main/main";
import FormComponent from "../../components/login/FormComponent";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const image = {
  uri: "https://media.istockphoto.com/id/170958625/es/foto/azul-oscuro-fondo-grunge.jpg?s=612x612&w=0&k=20&c=FEBMiNDMhTJVUP4ds8sqbe9IxbfB1leISYvJNVwpjVo=",
};

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Button title="login" />
        <Button title="Register" />
      </ImageBackground>
    </View>
  );
};

export default Login;
