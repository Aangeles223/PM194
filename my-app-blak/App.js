/* ZONA 1 : IMPORTACIONES */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Switch } from "react-native";
import React, { useState } from "react";

const Interruptor = () => {
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Text>{isEnable ? "Activado" : "Desactivado"}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnable ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  );
};

const Texto = ({ style }) => {
  const [contenido, setContenido] = useState("Hola Mundo React Native");
  const actualizaTexto = () => {
    setContenido("Texto actualizado");
  };
  return (
    <View style={{ margin: 10 }}>
      <Text style={[styles.text, style]} onPress={actualizaTexto}>
        {contenido}
      </Text>
      <Button
        title="Actualizar Texto"
        onPress={actualizaTexto}
        color="orange"
      />
    </View>
  );
};

/* ZONA 2 : MAIN */

export default function App() {
  return (
    <View style={styles.container}>
      <Interruptor />
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
