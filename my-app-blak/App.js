/* ZONA 1 : IMPORTACIONES */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState("Hola Mundo React Native");
  const actualizaTexto = () => {
    setContenido("Texto actualizado");
  };
  return (
    <Text style={[styles.text, style]} onPress={actualizaTexto}>
      {contenido}
    </Text>
  );
};

const Boton = () => {
  const [Texto, setContenido] = useState("TRABAJA");
  const actualizaTexto = () => {
    setContenido("NO TRABAJES");
  };
  return <Button onPress={actualizaTexto} title={Texto}></Button>;
};

/* ZONA 2 : MAIN */

export default function App() {
  return (
    <View style={styles.container}>
      <Boton title="Trabaja!"></Boton>

      <Texto style={styles.green}> </Texto>
      <Texto style={styles.blue}> </Texto>
      <Texto style={styles.black}> </Texto>

      <StatusBar style="auto" />
    </View>
  );
}

/* ZONA 3 : ESTILOS */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  green: { backgroundColor: "green" },
  blue: { backgroundColor: "blue" },
  black: { backgroundColor: "black" },
});
