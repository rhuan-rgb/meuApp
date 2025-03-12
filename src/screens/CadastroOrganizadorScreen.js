import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from '../axios/axios'

export default function CadastroOrganizador({navigation}){
    const [user, setUser] = useState({
        telefone:'',
        email:'',
        senha:'',
        nome:'',
    })

    async function handleCadastroOrganizador() {
        await api.postOrganizador(user).then(
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
        <Text style={styles.title}>Cadastro de Organizador</Text>

        <TextInput style={styles.input}
        placeholder="telefone"
        value={user.telefone}
        onChangeText={(value)=> {setUser({...user,telefone: value})} }/>

        <TextInput style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value)=> {setUser({...user,email: value})} }/>

        <TextInput style={styles.input}
        placeholder="nome"
        value={user.nome}
        onChangeText={(value)=> {setUser({...user,nome: value})} }/>

        <TextInput style={styles.input}
        placeholder="Senha"
        value={user.senha}
        onChangeText={(value)=> {setUser({...user,senha: value})} }/>


        <TouchableOpacity onPress={handleCadastroOrganizador} style={styles.button}>
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