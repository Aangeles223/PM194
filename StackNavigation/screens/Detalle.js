import { View, Text, StyleSheet } from "react-native";

export default function Detalle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles Usuario</Text>
      <Text style={styles.link}>Usando Navegacion Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#222",
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 8,
    textAlign: "center",
  },
  link: {
    color: "#2a4cff",
    fontSize: 15,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
