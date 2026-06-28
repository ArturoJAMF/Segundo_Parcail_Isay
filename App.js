import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const handleEnviar = () => {
    if (
      nombre.trim() === "" ||
      carrera.trim() === "" ||
      semestre.trim() === ""
    ) {
      alert("Campos incompletos\n\nDebes llenar todos los campos.");
      return;
    }

    if (isNaN(semestre) || semestre.trim() === "") {
      alert("Error\n\nEl semestre debe ser un número.");
      return;
    }

    alert(
      `Registro enviado\n\n` +
        `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\n\n` +
        `Taller: ${taller ? "Sí" : "No"}\n` +
        `Constancia: ${constancia ? "Sí" : "No"}\n` +
        `Deportes: ${deportes ? "Sí" : "No"}`,
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      <TextInput
        style={styles.input}
        placeholder="Semestre"
        value={semestre}
        onChangeText={setSemestre}
        keyboardType="numeric"
      />

      <Text style={styles.seccion}>Opciones</Text>

      <View style={styles.fila}>
        <Text style={styles.etiqueta}>¿Asistirá al taller?</Text>
        <Switch value={taller} onValueChange={setTaller} />
      </View>

      <View style={styles.fila}>
        <Text style={styles.etiqueta}>¿Requiere constancia?</Text>
        <Switch value={constancia} onValueChange={setConstancia} />
      </View>

      <View style={styles.fila}>
        <Text style={styles.etiqueta}>¿Participará en deportes?</Text>
        <Switch value={deportes} onValueChange={setDeportes} />
      </View>

      <TouchableOpacity style={styles.boton} onPress={handleEnviar}>
        <Text style={styles.botonTexto}>Enviar Registro</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  seccion: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 12,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  etiqueta: {
    fontSize: 16,
  },
  boton: {
    backgroundColor: "#1a73e8",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 24,
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
