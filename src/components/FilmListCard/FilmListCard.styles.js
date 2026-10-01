import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center",
        backgroundColor: colors.bgCard,
        borderRadius: 6,
        flexDirection: "row",
        gap: 10,
        padding: 5,
        width: "100%",
        height: 120,
    },

    poster: {
        aspectRatio: 2 / 3,
        borderRadius: 4,
        width: 80,
        height: "100%",
    },

    detailsContainer: {
        flex: 1,
        justifyContent: "center",
        minWidth: 0,
    },

    title: {
        color: colors.white,
        fontFamily: colors.poppinsMedium,
        fontSize: 12,
    },

    metadata: {
        alignItems: "center",
        flexDirection: "row",
        gap: 3,
        marginTop: 2,
    },

    metadataText: {
        color: colors.primary,
        fontFamily: colors.poppinsRegular,
        fontSize: 10,
    },

    metadataSeparator: {
        color: colors.primary,
        fontSize: 10,
    },

    classificationBadge: {
        alignItems: "center",
        borderColor: "#D9B500",
        borderRadius: 3,
        borderWidth: 1,
        justifyContent: "center",
        marginLeft: 4,
        width: 18,
        height: 18,
        padding: 2,
    },

    classificationText: {
        color: "#D9B500",
        fontFamily: colors.poppinsRegular,
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 9,
    },

    genres: {
        color: colors.gray,
        fontFamily: colors.poppinsRegular,
        fontSize: 8,
        marginTop: 4,
    },

    description: {
        color: colors.gray,
        fontFamily: colors.poppinsRegular,
        fontSize: 10,
        marginTop: 4,
    },
});