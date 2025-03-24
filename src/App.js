import Login from "./screens/LoginScreen";
import Cadastro from "./screens/CadastroScreen";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import CadastroEvento from "./screens/CadastroEventoScreen"
import CadastroIngresso from "./screens/CadastroIngressoScreen"
import CadastroOrganizador from "./screens/CadastroOrganizadorScreen"
import HomeScreen from "./screens/HomeScreen"
import Layout from "./components/Layout";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={()=>(
          <Layout>
            <Login/>
          </Layout>
        )}/>
        
        <Stack.Screen name="Cadastro" component={Cadastro}/>

        <Stack.Screen name="CadastroEvento" component={CadastroEvento}/>

        <Stack.Screen name="CadastroOrganizador" component={CadastroOrganizador}/>

        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso}/>

        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}


