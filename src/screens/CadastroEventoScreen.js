import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from '../axios/axios'

export default function CadastroEvento({navigation}){
    const [user, setUser] = useState({
        nome:'',
        descricao:'',
        data_hora:'',
        local:'',
        fk_id_organizador:''
    })

    async function handleCadastroEvento() {
        await api.postEvento(user).then(
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
        <Text style={styles.title}>Cadastro de evento</Text>

        <TextInput style={styles.input}
        placeholder="nome"
        value={user.nome}
        onChangeText={(value)=> {setUser({...user,nome: value})} }/>

        <TextInput style={styles.input}
        placeholder="descricao"
        value={user.descricao}
        onChangeText={(value)=> {setUser({...user,descricao: value})} }/>

        <TextInput style={styles.input}
        placeholder="data_hora"
        value={user.data_hora}
        onChangeText={(value)=> {setUser({...user,data_hora: value})} }/>

        <TextInput style={styles.input}
        placeholder="local"
        value={user.local}
        onChangeText={(value)=> {setUser({...user,local: value})} }/>

        <TextInput style={styles.input}
        placeholder="id do organizador"
        value={user.fk_id_organizador}
        onChangeText={(value)=> {setUser({...user,fk_id_organizador: value})}}/>


        <TouchableOpacity onPress={handleCadastroEvento} style={styles.button}>
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