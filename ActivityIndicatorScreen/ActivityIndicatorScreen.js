import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";

export default function ActivityIndicatorScreen() {
  const [cargando, setCargando] = useState(false);
  return (
    <View style={styles.fondo}>
      <Text style={styles.titulo}>ActivityIndicator</Text>
      {cargando ? (
        <ActivityIndicator
          size="large"
          color="#45B7D1"
          style={{ marginVertical: 30 }}
        />
      ) : (
        <Text style={styles.desc}>Presiona el botón para simular carga</Text>
      )}
      <Pressable
        style={({ pressed }) => [styles.boton, { opacity: pressed ? 0.7 : 1 }]}
        onPress={() => {
          setCargando(true);
          setTimeout(() => setCargando(false), 3000);
        }}
        disabled={cargando}
      >
        <Text style={styles.textoBoton}>
          {cargando ? "Cargando..." : "Iniciar carga"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: { fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 20 },
  desc: { color: "#888", fontSize: 14, marginBottom: 30 },
  boton: {
    backgroundColor: "#45B7D1",
    padding: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  textoBoton: { color: "#fff", fontSize: 15, fontWeight: "600" },
});
