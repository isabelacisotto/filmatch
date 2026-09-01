import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },

    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },

    overlay: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    safeArea: {
        flex: 1,
        width: "100%",
    },

    scrollContent: {
        flexGrow: 1,
        width: "100%",
        height: "120%",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
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
        marginTop: 10,
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