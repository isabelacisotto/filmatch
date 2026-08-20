import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    overlay: {
        flex: 1,
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        marginTop: 50,
        width: "100%",
        height: 30,
        top: 0,
        left: 0,
        zIndex: 1,
        position: "absolute",
    },

    content: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        paddingHorizontal: 20,
        marginTop: 50,
    },

    title: {
        fontSize: 32,
        fontFamily: colors.poppinsBold,
        color: colors.white,
    },

    subtitle: {
        fontSize: 14,
        fontFamily: colors.poppinsRegular,
        color: colors.white,
        marginTop: 8,
    },

    LoginForm: {
        marginTop: "15%",
    },

    label: {
        fontSize: 14,
        fontFamily: colors.poppinsMedium,
        color: colors.white,
        marginBottom: 4,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 12,
    },

    input: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 8,
        color: colors.white,
        placeholderTextColor: colors.gray,
        fontFamily: colors.poppinsRegular,
        fontSize: 12,
    },

    register: {
        fontSize: 12,
        fontFamily: colors.poppinsRegular,
        color: colors.white,
        marginTop: 50,
        textAlign: "center",
    },

    registerLink: {
        fontSize: 12,
        fontFamily: colors.poppinsMedium,
        color: colors.primary,
    },
})