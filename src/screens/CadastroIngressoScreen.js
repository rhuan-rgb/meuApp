import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from '../axios/axios'

export default function CadastroIngresso({navigation}){
    const [user, setUser] = useState({
        preco:"",
        tipo:"",
        fk_id_evento:""
    })

    async function handleCadastroIngresso() {
        await api.postIngresso(user).then(
           (response)=>{
                console.log(response.data.message)
                Alert.alert(response.data.message)
           },(error)=>{
                console.log( error)
                Alert.alert('Erro', error.response.data.error)
           }
        )
    }



    return(
        <View style={styles.container}>
        <Text style={styles.title}>Cadastro de ingresso</Text>

        <TextInput style={styles.input}
        placeholder="preço"
        value={user.preco}
        onChangeText={(value)=> {setUser({...user,preco: value})} }/>

        <TextInput style={styles.input}
        placeholder="tipo"
        value={user.tipo}
        onChangeText={(value)=> {setUser({...user,tipo: value})} }/>

        <TextInput style={styles.input}
        placeholder="id do evento"
        value={user.fk_id_evento}
        onChangeText={(value)=> {setUser({...user,fk_id_evento: value})} }/>


        <TouchableOpacity onPress={handleCadastroIngresso} style={styles.button}>
            <Text>Cadastrar</Text>
        </TouchableOpacity>
        <Button title="Home" onPress={()=> navigation.navigate("HomeScreen")}></Button>
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