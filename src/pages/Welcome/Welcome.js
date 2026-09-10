import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Welcome.styles";
import { useNavigation } from "@react-navigation/native";
import { PrimaryButton, SecondaryButton } from "../../components/Button/Button";
import { Logo } from "../../components/Logo/Logo";

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
          <Logo />
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
