import { StyleSheet } from "react-native";
import { colors } from "../../colors";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

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

  buttonRegister: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 8,
    borderWidth: 2,
    borderRadius: 8,
    width: "60%",
  },

  buttonLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    padding: 8,
    borderWidth: 2,
    borderRadius: 8,
    width: "60%",
  },

  buttonText: {
    color: colors.white,
    fontFamily: colors.poppinsMedium,
    fontSize: 13,
  },
});
