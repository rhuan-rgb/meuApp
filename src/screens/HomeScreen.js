import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";


export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Button title="Cadastrar Evento" onPress={()=>navigation.navigate("CadastroEvento")}></Button>
            <Button title="Cadastrar Ingresso" onPress={()=>navigation.navigate("CadastroIngresso")}></Button>
            <Button title="Cadastrar Organizador" onPress={()=>navigation.navigate("CadastroOrganizador")}></Button>
        </View>
    )
}



    


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title:{
        fontSize:28,
        fontWeight:'bold'
    },
    input:{
        borderColor:'gray',
        width:'100%',
        height:40,
        borderBottomWidth:1,
        marginBottom:20,
        paddingHorizontal:10
    },
    button:{
        backgroundColor:'green',
        padding:10,
        boderRadius:5
    }
})