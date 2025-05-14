import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";
import DateTimePicker from "../components/DateTimePicker";

export default function CadastroEvento({ navigation }) {
  const [event, setEvent] = useState({
    nome: "",
    descricao: "",
    data_hora: "",
    local: "",
    fk_id_organizador: "",
  });

  async function handleCadastroEvento() {
    await api.postEvento(event).then(
      (response) => {
        console.log(response.data.message);
        Alert.alert(response.data.message);
      },
      (error) => {
        console.log(error);
        Alert.alert("Erro", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de evento</Text>

      <TextInput
        style={styles.input}
        placeholder="nome"
        value={event.nome}
        onChangeText={(value) => {
          setEvent({ ...event, nome: value });
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="descricao"
        value={event.descricao}
        onChangeText={(value) => {
          setEvent({ ...event, descricao: value });
        }}
      />

      <DateTimePicker
        type={"datetime"}
        buttonTitle={
          event.data_hora === "" ? "Selecione a data do evento" : event.data_hora.toLocaleString()
        }
        dateKey={"data_hora"}
        setValue={setEvent}
      />

      <TextInput
        style={styles.input}
        placeholder="local"
        value={event.local}
        onChangeText={(value) => {
          setEvent({ ...event, local: value });
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="id do organizador"
        value={event.fk_id_organizador}
        onChangeText={(value) => {
          setEvent({ ...event, fk_id_organizador: value });
        }}
      />

      <TouchableOpacity onPress={handleCadastroEvento} style={styles.button}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      <Button
        title="Home"
        onPress={() => navigation.navigate("HomeScreen")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    borderColor: "gray",
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    boderRadius: 5,
  },
});
