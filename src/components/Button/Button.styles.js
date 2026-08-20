import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    primaryButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        padding: 8,
        borderWidth: 2,
        borderRadius: 8,
        width: "60%",
        gap: 4,
    },

    secondaryButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        padding: 8,
        borderWidth: 2,
        borderRadius: 8,
        width: "60%",
        gap: 4,
    },

    buttonText: {
        color: colors.white,
        fontFamily: colors.poppinsMedium,
        fontSize: 13,
    },
})