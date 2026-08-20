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

  welcomeContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  welcomeText: {
    fontSize: 55,
    fontFamily: colors.poppinsBold,
    color: colors.white,
  },

  subTitle: {
    fontSize: 16,
    fontFamily: colors.poppinsMedium,
    fontWeight: 200,
    color: colors.white,
  },

  filmatchSpan: {
    color: colors.primary,
  },

  navButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 8,
    marginTop: "20%",
  },
});
