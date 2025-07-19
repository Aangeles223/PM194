import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // Asegúrate de tener instalado el paquete

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="person-outline"
        size={38}
        color="#1ca150"
        style={{ marginBottom: 10 }}
      />
      <Text style={styles.title}>Perfil usuario</Text>
      <Pressable
        style={styles.buttonDetail}
        onPress={() => navigation.navigate("Detalle")}
      >
        <Text style={styles.buttonDetailText}>Detalles de Usuario</Text>
      </Pressable>
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
    color: "#1ca150", // Verde
    marginBottom: 16,
    textAlign: "center",
  },
  buttonDetail: {
    backgroundColor: "#2a4cff", // Azul
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  buttonDetailText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
