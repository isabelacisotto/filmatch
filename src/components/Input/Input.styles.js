import { colors } from "../../colors";

export const styles = {
  inputContainer: {
    width: "100%",
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontFamily: colors.poppinsRegular,
    color: colors.white,
    marginBottom: 8,
  },

  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background || "#",
    fontFamily: colors.poppinsRegular,
    color: colors.white || "#fffff",
    padding: 12,
    borderRadius: 8,
    fontSize: 13,
    borderWidth: 1,
    borderColor: colors.primary || "#",
  },
};
