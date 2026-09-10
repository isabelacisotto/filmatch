import { Clapperboard } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./Logo.styles";

export function Logo() {
    return (
        <>
        <Clapperboard size={45} color="#FFFFFF" />
          <Text style={styles.welcomeText}>
            Fil
            <Text style={styles.filmatchSpan}>match</Text>
          </Text>
        </>
    )
}

export function LogoHome() {
    return (
        <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Clapperboard size={30} color="#FFFFFF" />
          <Text style={styles.welcomeTextHome}>
            Fil
            <Text style={styles.filmatchSpanHome}>match</Text>
          </Text>
        </View>
    )
}