import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    homeContainer: {
        backgroundColor: colors.background,
        padding: 10,
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 30,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
    },

    welcomeContainer: {
        marginLeft: "auto",
        marginTop: 30,
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },

    line: {
        width: 3,
        height: 80,
        backgroundColor: colors.white,
        marginBottom: 10,
        backgroundColor: colors.primary,
    },

    welcomeTexts: {
        marginLeft: 4,
        display: "flex",
        flexDirection: "column",
    },

    welcomeTextHome: {
        fontSize: 16,
        fontFamily: colors.poppinsBold,
        color: colors.white,
    },

    highlightedText: {
        color: colors.primary,
    },

    subTitleHome: {
        fontSize: 12,
        fontFamily: colors.poppinsRegular,
        color: colors.gray,
    },

    filmsSection: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
    },

    filmsSectionHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    lineMini: {
        width: 3,
        height: 30,
        backgroundColor: colors.primary,
        marginBottom: 10,
    },

    filmsSectionTexts: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    filmsSectionTitle: {
        fontSize: 12,
        fontFamily: colors.poppinsMedium,
        color: colors.white,
        marginLeft: 4,
    },

    filmsSectionSeeAll: {
        fontSize: 12,
        fontFamily: colors.poppinsMedium,
        color: colors.primary,
        marginLeft: 70,
    },

    filmsSectionCards: {
        marginTop: 10,
        width: "100%",
        flexWrap: "wrap",
    },

    exploreGenres: {
        marginTop: 30,
        marginBottom: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "100%",
    },

    exploreGenresHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    exploreGenresTexts: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    exploreGenresTitle: {
        fontSize: 12,
        fontFamily: colors.poppinsMedium,
        color: colors.white,
        marginLeft: 4,
    },

    exploreGenresCards: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        width: "100%",
        flexWrap: "wrap",
        gap: 10,
    },
})