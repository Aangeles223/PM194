/* ZONA 1 : IMPORTACIONES */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const Texto = () => {
  const [contenido, setContenido] = useState("Hola Mundo React Native");
  const actualizaTexto = () => {
    setContenido("Texto actualizado");
  };
  return <Text onPress={actualizaTexto}> {contenido} </Text>;
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
      <Texto> </Texto>
      <Texto> </Texto>
      <Texto> </Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/* ZONA 3 : ESTILOS */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
