import Login from "./screens/LoginScreen";
import Cadastro from "./screens/CadastroScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CadastroEvento from "./screens/CadastroEventoScreen";
import CadastroIngresso from "./screens/CadastroIngressoScreen";
import CadastroOrganizador from "./screens/CadastroOrganizadorScreen";
import HomeScreen from "./screens/HomeScreen";
import Layout from "./components/Layout";
import TaskList from "./screens/TaskList";
import TaskDetail from "./screens/TaskDetail";
import EventosScreen from "./screens/EventosScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="TaskList" component={TaskList}/>
        <Stack.Screen name="TaskDetail" component={TaskDetail}/> */}

        <Stack.Screen
          name="Login"
          component={() => (
            <Layout>
              <Login />
            </Layout>
          )}
        />

        <Stack.Screen name="Cadastro" component={Cadastro} />

        <Stack.Screen name="CadastroEvento" component={CadastroEvento} />

        <Stack.Screen
          name="CadastroOrganizador"
          component={CadastroOrganizador}
        />

        <Stack.Screen name="CadastroIngresso" component={CadastroIngresso} />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen name="EventosScreen">
          {() => (
            <Layout>
              <EventosScreen />
            </Layout>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
