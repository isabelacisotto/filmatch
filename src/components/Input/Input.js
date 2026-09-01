import { Text, TextInput, View } from "react-native";
import { styles } from "./Input.styles";
import { colors } from "../../colors";

export function Input({label, placeholder, value, onChangeText, secureTextEntry, keyboardType}) {
    return(
        <View style={styles.inputContainer}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.placeholder || '#'}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize="none"
            />
        </View>
    )
}