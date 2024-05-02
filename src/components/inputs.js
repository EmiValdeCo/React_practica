import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Input({ title_placeholder, tipo_keyboard, numero, setNumero }) {
    return (
        <View style={styles.container}>
            <Text>Numero 1:</Text>
            <TextInput
                style={styles.input}
                keyboardType='number-pad'
                placeholder='Número 1'
                value={numero.toString()}
                onChangeText={setNumero}
            />
        </View>
    );
}