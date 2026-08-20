import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Welcome.styles";
import { Clapperboard } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { PrimaryButton, SecondaryButton } from "../../components/Button/Button";

export function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/background.png")}
        style={styles.image}
        resizeMode="cover"
      />

      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={styles.welcomeContainer}>
          <Clapperboard size={55} color="#FFFFFF" />
          <Text style={styles.welcomeText}>
            Fil
            <Text style={styles.filmatchSpan}>match</Text>
          </Text>

          <Text style={styles.subTitle}>Seu próximo filme já deu match</Text>
        </View>

        <View style={styles.navButtons}>
          <PrimaryButton text="Começar" onPress={() => navigation.navigate("Register")} />
          <SecondaryButton text="Já tenho uma conta" onPress={() => navigation.navigate("Login")} />
        </View>
      </SafeAreaView>         
    </View>
  );
}
