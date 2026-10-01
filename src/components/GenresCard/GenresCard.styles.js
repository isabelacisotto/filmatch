import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
	genreCardContainer: {
		alignItems: "center",
		backgroundColor: colors.bgCard,
		borderRadius: 6,
		height: 100,
		justifyContent: "center",
		paddingHorizontal: 8,
		width: 110 ,
	},

	genreCardIcon: {
		alignItems: "center",
		height: 30,
		justifyContent: "center",
		width: 30,
	},

	genreCardText: {
		color: colors.white,
		fontFamily: colors.poppinsMedium,
		fontSize: 10,
		marginTop: 3,
		textAlign: "center",
	},
});
