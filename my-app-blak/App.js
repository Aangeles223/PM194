/* ZONA 1 : IMPORTACIONES */
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";

/* ZONA 2 : MAIN */

export default function App() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [age, setAge] = useState("");

  const showAlert = () => {
    if (nombre.trim() === "" || password.trim() === "" || age.trim() === "") {
      window.alert("Error", "Por favor, completa todos los campos.");
    } else {
      window.alert(
        `Nombre: ${nombre}\nContrasena: ${password}\nEdad: ${age}\nComentarios: ${comment}`
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      ></TextInput>

      <Text style={styles.title}>Contrasena</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu contrasena"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      ></TextInput>

      <Text style={styles.title}>Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      ></TextInput>

      <Text style={styles.title}>Comentarios Multilineal</Text>
      <TextInput
        style={[styles.input, { height: 100, textAlignVertical: "top" }]}
        placeholder="Escribe tus comentarios"
        multiline={true}
        numberOfLines={4}
        value={comment}
        onChangeText={setComment}
      ></TextInput>

      <Text style={styles.title}>Campo de solo lectura</Text>
      <TextInput
        style={styles.input}
        value="Este campo es de solo lectura"
        editable={false}
        selectTextOnFocus={false}
      ></TextInput>

      <Button
        title="Mostrar Alerta"
        onPress={showAlert}
        color="#841584"
      ></Button>
    </ScrollView>
  );
}

/* ZONA 3 : ESTILOS */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: "#333",
    marginBottom: 6,
    alignSelf: "flex-start",
  },
  input: {
    height: 44,
    borderColor: "#bbb",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 15,
  },
});
