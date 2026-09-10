import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
    filmCardContainer: {
        backgroundColor: colors.bgCard,
        width: 115,
        marginRight: 12,
    },

    filmImage: {
        width: 115,
        height: 168,
        borderRadius: 3,
    },

    filmTitle: {
        color: colors.white,
        fontFamily: colors.poppinsMedium,
        fontSize: 11,
        marginTop: 6,
    },

    filmDetails: {
        alignItems: "center",
        flexDirection: "row",
        gap: 3,
        marginTop: 3,
    },
    
    rating: {
        color: colors.primary,
        fontFamily: colors.poppinsMedium,
        fontSize: 10,
    },
    
    detailSeparator: {
        color: colors.primary,
        fontSize: 10,
    },

    year: {
        color: colors.primary,
        fontFamily: colors.poppinsRegular,
        fontSize: 10,
    },

    niche: {
        color: colors.gray,
        fontFamily: colors.poppinsRegular,
        fontSize: 9,
        marginTop: 1,
    }
})