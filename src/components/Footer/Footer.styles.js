import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
	footerContainer: {
		alignItems: "center",
		backgroundColor: colors.bgCard,
		flexDirection: "row",
		justifyContent: "space-around",
		minHeight: 80,
		paddingHorizontal: 12,
		paddingTop: 7,
		width: "100%",
	},

	footerItem: {
		alignItems: "center",
		height: 54,
		justifyContent: "center",
		minWidth: 64,
	},

	footerLabel: {
		fontFamily: colors.poppinsRegular,
		fontSize: 9,
		marginTop: 2,
		textAlign: "center",
	},
});
