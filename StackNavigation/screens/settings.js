import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="settings-outline"
        size={48}
        color="#2a4cff"
        style={{ marginBottom: 10 }}
      />
      <Text style={styles.title}>Configuraciones de usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2a4cff", // Azul
    textAlign: "center",
  },
});
