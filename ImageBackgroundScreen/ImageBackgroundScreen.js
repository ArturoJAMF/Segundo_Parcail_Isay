import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function ImageBackgroundScreen() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.titulo}>ImageBackground</Text>
      <ImageBackground
        source={{ uri: "https://picsum.photos/seed/expo/800/400" }}
        style={styles.imagen}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.textoImagen}>Texto sobre imagen</Text>
          <Text style={styles.subTexto}>Contenido encima de una imagen</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  imagen: { width: "100%", height: 200, justifyContent: "flex-end" },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 14,
  },
  textoImagen: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  subTexto: { color: "#ddd", fontSize: 12, marginTop: 2 },
});
