import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from "../axios/axios"
import {Ionicons} from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"


export default function Login() {

    const navigation = useNavigation()

    const [user, setUser] = useState({
        email: '',
        password: '',
        showPassword: false
    })

    async function handleLogin() {
        await api.postLogin(user)
        .then(
            (response) => {
                console.log(response.data.message)
                navigation.navigate("Home")
            }, (error) => {
                console.log(error)
                Alert.alert(error.response.data.error)
            }
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça Login</Text>

            <View style={styles.emailContainer}>
                <TextInput
                    placeholder="E-mail"
                    value={user.email}
                    onChangeText={(value) => {setUser({...user, email: value})}}
                    style={styles.emailInput}
                />
            </View>
            

            <View style={styles.passwordContainer}>
                <TextInput
                    placeholder="Senha"
                    value={user.password}
                    onChangeText={(value) => {setUser({...user, password: value})}}
                    style={styles.passwordInput}
                    secureTextEntry={user.showPassword}
                />

                <TouchableOpacity onPress={() => setUser({...user, showPassword: !user.showPassword })}>
                    <Ionicons name={user.showPassword? "eye-off" : "eye"} size={34} color="gray"/>
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity onPress = {handleLogin} style={styles.button}>
                <Text>Login</Text>
            </TouchableOpacity>
            
            <Button title="Cadastro" onPress={()=> navigation.navigate("Cadastro")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
  
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#006400',
        padding: 10,
        borderRadius: 5,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        width: "100%",
        paddingRight: 10,
    },
    emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        width: "100%",
        paddingRight: 10,
    },
    passwordInput: {
        flex: 1,
        height: 40,
    },
    emailInput: {
        flex: 1,
        height: 40,
    }
})