import { StyleSheet, Text, View, TextInput, Button } from "react-native";
// import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <Cadastro/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box4: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  row: {
    flexDirection: "row",
  },
  text:{
    fontSize:28,
    fontWeight:'bold'
  },
  input:{
    borderWidth:1,
    borderColor:'gray',
    width:'80%',
    padding:10,
    marginVertical:10
  }
});
