import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";

export default function ModalScreen() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.fondo}>
      <Text style={styles.titulo}>Modal</Text>
      <Text style={styles.desc}>
        Un Modal aparece encima de la pantalla actual.
      </Text>
      <Pressable style={styles.boton} onPress={() => setVisible(true)}>
        <Text style={styles.textoBoton}>Abrir Modal</Text>
      </Pressable>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>¡Hola!</Text>
            <Text style={styles.modalDesc}>Este es un ejemplo de Modal.</Text>
            <Pressable
              style={styles.botonCerrar}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.textoBoton}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  titulo: { fontSize: 20, fontWeight: "bold", color: "#333", marginBottom: 8 },
  desc: { color: "#888", fontSize: 14, textAlign: "center", marginBottom: 24 },
  boton: {
    backgroundColor: "#4ECDC4",
    padding: 14,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  textoBoton: { color: "#fff", fontSize: 15, fontWeight: "600" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    width: "80%",
    alignItems: "center",
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  modalDesc: {
    color: "#888",
    fontSize: 13,
    textAlign: "center",
    marginBottom: 20,
  },
  botonCerrar: {
    backgroundColor: "#FF6B6B",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
});
