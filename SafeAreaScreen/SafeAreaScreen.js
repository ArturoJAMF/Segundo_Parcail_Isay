import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Switch,
} from "react-native";

export default function SafeAreaScreen() {
  const [activo, setActivo] = useState(true);
  const Contenedor = activo ? SafeAreaView : View;
  return (
    <Contenedor style={styles.fondo}>
      <Text style={styles.titulo}>SafeAreaView</Text>
      <Text style={styles.desc}>
        Evita que el contenido se tape con el notch.
      </Text>
      <View style={styles.fila}>
        <Text style={styles.etiqueta}>Activar SafeAreaView</Text>
        <Switch value={activo} onValueChange={(v) => setActivo(v)} />
      </View>
      <ScrollView>
        {[
          "#FF6B6B",
          "#4ECDC4",
          "#45B7D1",
          "#96CEB4",
          "#DDA0DD",
          "#FFEAA7",
          "#98D8C8",
        ].map((color, i) => (
          <View key={i} style={[styles.tarjeta, { backgroundColor: color }]}>
            <Text style={styles.textoTarjeta}>Elemento {i + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </Contenedor>
  );
}

const styles = StyleSheet.create({
  fondo: { flex: 1, backgroundColor: "#f5f5f5", padding: 16 },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 6,
  },
  desc: { fontSize: 13, color: "#888", textAlign: "center", marginBottom: 12 },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  etiqueta: { color: "#333", fontSize: 14 },
  tarjeta: {
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  textoTarjeta: { color: "#333", fontSize: 15, fontWeight: "bold" },
});
