import React, { useState, useEffect, use } from "react";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setAppReady(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);
}

/* ZONA 3 : ESTILOS */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: "#333",
    marginBottom: 6,
    alignSelf: "flex-start",
  },
  input: {
    height: 44,
    borderColor: "#bbb",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 15,
  },
});
