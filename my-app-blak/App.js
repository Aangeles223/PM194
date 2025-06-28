import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={styles.background}
      showsVerticalScrollIndicator={false}
      horizontal={true}
    >
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
