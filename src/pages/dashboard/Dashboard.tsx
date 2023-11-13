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


import { useNavigation } from '@react-navigation/native';

const image = {
  uri: "https://media.istockphoto.com/id/170958625/es/foto/azul-oscuro-fondo-grunge.jpg?s=612x612&w=0&k=20&c=FEBMiNDMhTJVUP4ds8sqbe9IxbfB1leISYvJNVwpjVo=",
};
const Dashboard = () =>{

  const navigation = useNavigation(); 

  // const goToRegister = () => {
  //   navigation.navigate('Register'); 
  // };

    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Button title="login2" />
          <Button title="Register" />
        </ImageBackground>
      </View>
    )
}

export default Dashboard