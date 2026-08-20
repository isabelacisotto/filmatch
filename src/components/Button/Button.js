import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.styles";

export function PrimaryButton({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export function SecondaryButton({ text, onPress }) {
    return (
        <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}