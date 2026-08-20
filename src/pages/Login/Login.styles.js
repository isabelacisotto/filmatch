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

  header: {
    width: "100%",
    height: 50,
  },

  content: {
    width: "100%",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontFamily: colors.poppinsBold,
    color: colors.white,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: colors.poppinsMedium,
    color: colors.white,
    marginTop: 8,
  },
});
