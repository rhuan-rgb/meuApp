import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "./screens/LoginScreen";
import Cadastro from "./screens/CadastroScreen";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import CadastroEvento from "./screens/CadastroEventoScreen"
import CadastroIngresso from "./screens/CadastroIngressoScreen"
import CadastroOrganizador from "./screens/CadastroOrganizadorScreen"
import HomeScreen from "./screens/HomeScreen"


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        
        <Stack.Screen name="Cadastro" component={Cadastro}/>

        <Stack.Screen name="CadastroEvento" component={CadastroEvento}/>

        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizador}/>

        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso}/>

        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}


