import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Home() {
  return (
    <View style={styles.container}>
      <Ionicons
        name="home-outline"
        size={48}
        color="#e53935"
        style={{ marginBottom: 10 }}
      />
      <Text style={styles.title}>Perfil de usuario</Text>
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
    color: "#e53935", // Rojo
    textAlign: "center",
  },
});
