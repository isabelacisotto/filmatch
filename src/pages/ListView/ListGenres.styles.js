import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },

    listContent: {
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingBottom: 24,
    },

    listHeader: {
        paddingTop: 8,
        paddingBottom: 17,
    },

    navigationHeader: {
        alignItems: "center",
        flexDirection: "row",
        height: 34,
        justifyContent: "space-between",
        position: "relative",
    },

    backButton: {
        alignItems: "center",
        flexDirection: "row",
        gap: 2,
        minWidth: 64,
        zIndex: 1,
    },

    backText: {
        color: colors.primary,
        fontFamily: colors.poppinsRegular,
        fontSize: 12,
    },

    genreTitle: {
        color: colors.white,
        fontFamily: colors.poppinsBold,
        fontSize: 16,
        left: 72,
        position: "absolute",
        right: 72,
        textAlign: "center",
    },

    searchButton: {
        alignItems: "center",
        height: 34,
        justifyContent: "center",
        width: 34,
        zIndex: 1,
    },

    controlsRow: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },

    filterButton: {
        alignItems: "center",
        borderColor: colors.primary,
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: "row",
        gap: 6,
        height: 27,
        justifyContent: "center",
        paddingHorizontal: 10,
    },

    filterButtonText: {
        color: colors.primary,
        fontFamily: colors.poppinsRegular,
        fontSize: 10,
    },

    sortButton: {
        alignItems: "center",
        borderColor: "#333333",
        borderRadius: 16,
        borderWidth: 1,
        flexDirection: "row",
        height: 27,
        justifyContent: "space-between",
        paddingHorizontal: 10,
        width: 138,
    },

    sortButtonText: {
        color: colors.gray,
        fontFamily: colors.poppinsRegular,
        fontSize: 10,
    },

    searchInputContainer: {
        alignItems: "center",
        borderColor: "#333333",
        borderRadius: 6,
        borderWidth: 1,
        flexDirection: "row",
        gap: 8,
        marginTop: 12,
        paddingHorizontal: 10,
    },

    searchInput: {
        color: colors.white,
        flex: 1,
        fontFamily: colors.poppinsRegular,
        fontSize: 11,
        height: 36,
        paddingVertical: 0,
    },

    cardSeparator: {
        height: 28,
    },

    emptyMessage: {
        color: colors.gray,
        fontFamily: colors.poppinsRegular,
        fontSize: 12,
        marginTop: 28,
        textAlign: "center",
    },
})