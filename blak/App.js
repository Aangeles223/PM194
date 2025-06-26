import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Modal,
  ImageBackground,
  Image,
} from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMensaje, setModalMensaje] = useState("");
  const [modalTitulo, setModalTitulo] = useState("");

  // 1. Maneja el registro y validaciones
  const handleRegistro = () => {
    if (!nombre || !correo) {
      setModalTitulo("Error");
      setModalMensaje("Por favor completa todos los campos.");
      setModalVisible(true);
      return;
    }
    if (!aceptarTerminos) {
      setModalTitulo("Términos no aceptados");
      setModalMensaje("Debes aceptar los términos y condiciones.");
      setModalVisible(true);
      return;
    }
    // 2. Mensaje de éxito con datos ingresados
    setModalTitulo("¡Registro exitoso!");
    setModalMensaje(
      `Bienvenido, ${nombre}!\nCorreo: ${correo}\nTérminos aceptados: Sí`
    );
    setModalVisible(true);
  };

  return (
    <ImageBackground
      source={require("./assets/fondo.jpeg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.formBox}>
          {/* 3. Logo personalizado */}
          <Image
            source={require("./assets/logo.png")} // Cambia por tu logo
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Registro de Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#ccc"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.terminosRow}>
            <Text style={styles.terminosText}>
              Aceptar términos y condiciones
            </Text>
            <Switch
              value={aceptarTerminos}
              onValueChange={setAceptarTerminos}
              thumbColor={aceptarTerminos ? "#2196F3" : "#ccc"}
              trackColor={{ false: "#aaa", true: "#2196F3" }}
            />
          </View>
          <TouchableOpacity
            style={styles.registrarBtn}
            onPress={handleRegistro}
          >
            <Text style={styles.registrarText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{modalTitulo}</Text>
            <Text style={styles.modalMsg}>{modalMensaje}</Text>
            <TouchableOpacity
              style={styles.okBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 18,
    padding: 24,
    width: "88%",
    maxWidth: 400,
    alignItems: "stretch",
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
    fontSize: 16,
    color: "#222",
  },
  terminosRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    justifyContent: "space-between",
  },
  terminosText: {
    color: "#fff",
    fontSize: 15,
    flex: 1,
    marginRight: 10,
  },
  registrarBtn: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
  },
  registrarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#222",
    borderRadius: 14,
    padding: 28,
    width: "80%",
    maxWidth: 320,
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalMsg: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
    textAlign: "center",
  },
  okBtn: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  okText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});



import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  Modal,
  ImageBackground,
  Image,
} from "react-native";
import { Accelerometer } from "expo-sensors";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMensaje, setModalMensaje] = useState("");
  const [modalTitulo, setModalTitulo] = useState("");
  const [splashVisible, setSplashVisible] = useState(false);

  
  const handleRegistro = () => {
    if (!nombre || !correo) {
      setModalTitulo("Error");
      setModalMensaje("Por favor completa todos los campos.");
      setModalVisible(true);
      return;
    }
    if (!aceptarTerminos) {
      setModalTitulo("Términos no aceptados");
      setModalMensaje("Debes aceptar los términos y condiciones.");
      setModalVisible(true);
      return;
    }
    setModalTitulo("¡Registro exitoso!");
    setModalMensaje(
      `Bienvenido, ${nombre}!\nCorreo: ${correo}\nTérminos aceptados: Sí`
    );
    setModalVisible(true);
  };

  
  useEffect(() => {
    let lastShake = Date.now();
    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      const totalForce = Math.abs(x) + Math.abs(y) + Math.abs(z);
      if (totalForce > 2.2 && Date.now() - lastShake > 1500) {
        lastShake = Date.now();
        setSplashVisible(true);
        setTimeout(() => {
          setSplashVisible(false);
          // Recargar la app (web y móvil)
          if (typeof window !== "undefined" && window.location) {
            window.location.reload();
          } else {
            setNombre("");
            setCorreo("");
            setAceptarTerminos(false);
            setModalVisible(false);
            setModalMensaje("");
            setModalTitulo("");
          }
        }, 1500);
      }
    });
    return () => subscription && subscription.remove();
  }, []);

  return (
    <ImageBackground
      source={require("./assets/fondo.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Splash al agitar */}
      {splashVisible && (
        <View style={styles.splashOverlay}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.splashImg}
            resizeMode="contain"
          />
        </View>
      )}
      <View style={styles.overlay}>
        <View style={styles.formBox}>
          <Image
            source={require("./assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Registro de Usuario</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#ccc"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.terminosRow}>
            <Text style={styles.terminosText}>
              Aceptar términos y condiciones
            </Text>
            <Switch
              value={aceptarTerminos}
              onValueChange={setAceptarTerminos}
              thumbColor={aceptarTerminos ? "#2196F3" : "#ccc"}
              trackColor={{ false: "#aaa", true: "#2196F3" }}
            />
          </View>
          <TouchableOpacity
            style={styles.registrarBtn}
            onPress={handleRegistro}
          >
            <Text style={styles.registrarText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>{modalTitulo}</Text>
            <Text style={styles.modalMsg}>{modalMensaje}</Text>
            <TouchableOpacity
              style={styles.okBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    backgroundColor: "rgba(0,0,0,0.65)",
    borderRadius: 18,
    padding: 24,
    width: "88%",
    maxWidth: 400,
    alignItems: "stretch",
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
    fontSize: 16,
    color: "#222",
  },
  terminosRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    justifyContent: "space-between",
  },
  terminosText: {
    color: "#fff",
    fontSize: 15,
    flex: 1,
    marginRight: 10,
  },
  registrarBtn: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
  },
  registrarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#222",
    borderRadius: 14,
    padding: 28,
    width: "80%",
    maxWidth: 320,
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalMsg: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
    textAlign: "center",
  },
  okBtn: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  okText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  splashOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },
  splashImg: {
    width: 220,
    height: 220,
  },
});
