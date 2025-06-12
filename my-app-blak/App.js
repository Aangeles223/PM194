/* ZONA 1 : IMPORTACIONES */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

const Texto = (props) => {
  const { contenidos } = props;
  return <Text> {contenidos} </Text>;
};

/* ZONA 2 : MAIN */

export default function App() {
  return (
    <View style={styles.container}>
      <Texto contenidos="Hola"> </Texto>
      <Texto contenidos="Mundo"> </Texto>
      <Texto contenidos="Reac Native"></Texto>
      <Button title="Trabaja!"></Button>
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
