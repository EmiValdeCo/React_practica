import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(parseFloat(numero1) + parseFloat(numero2));
  }

  const restar = () => {
    setResultado(parseFloat(numero1) - parseFloat(numero2));
  }

  const multiplicar = () => {
    setResultado(parseFloat(numero1) * parseFloat(numero2));
  }

  const dividir = () => {
    if (numero2 !== 0) {
      setResultado(parseFloat(numero1) / parseFloat(numero2));
    } else {
      alert('No se puede dividir por cero');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Calculadora de números</Text>
      <Text>Numero 1:</Text>
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        placeholder='Número 1'
        value={numero1.toString()}
        onChangeText={setNumero1}
      />
      <Text>Numero 2: </Text>
      <TextInput
        style={styles.input}
        keyboardType='number-pad'
        placeholder='Número 2'
        value={numero2.toString()}
        onChangeText={setNumero2}
      />
      <View style={styles.botonesContainer}>
        <View style={styles.botonesContainer1}>
          <TouchableOpacity style={styles.boton} onPress={sumar}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Sumar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={restar}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Restar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.botonesContainer2}>
          <TouchableOpacity style={styles.boton} onPress={multiplicar}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Multiplicar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boton} onPress={dividir}>
            <Text style={{ textAlign: 'center', color: 'white' }}>Dividir</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Resultado: {resultado}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'black',
    fontSize: 30,
    padding: 10,
    marginBottom: 20
  },
  input: {
    backgroundColor: 'grey',
    width: 150,
    padding: 10,
    margin: 5,
    fontSize: 20,
    fontWeight: '900',
    borderRadius: 20,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: 'green',
    width: 100,
    padding: 10,
    margin: 5,
    borderRadius: 20
  },
  botonesContainer: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 20
  },
  botonesContainer1: {
    flexDirection: 'row'
  },
  botonesContainer2: {
    flexDirection: 'row'
  }
});